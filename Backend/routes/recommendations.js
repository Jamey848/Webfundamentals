// --------------------------------------------
// Import Packages
// --------------------------------------------
import express from 'express';
const router = express.Router();

import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

import { GoogleGenerativeAI } from '@google/generative-ai';

router.post('/', async(req, res) => {
    let usersID = req.body.usersID;
    let allUserData = await prisma.$queryRaw`SELECT RE.receiptname, RE.receiptdate, ST.storename, PR.productname, CONCAT(RI.amount, ' x ', RI.quantity, UN.unitname) as QUA, SUM(RI.price)
    FROM receipt as RE
    INNER JOIN receiptitems as RI on RE.receiptID = RI.receiptID
    INNER JOIN product as PR on RI.productID = PR.productID
    INNER JOIN store as ST on RE.storeID = ST.storeID
    INNER JOIN unit as UN on RI.unitID = UN.unitID
    WHERE RE.usersID = ${usersID}
    GROUP BY 
    RE.receiptname,
    RE.receiptdate,
    ST.storename,
    PR.productname,
    QUA;;`;

    const wisdom = await geminiwisdow(JSON.stringify(allUserData));

    res.json(wisdom);
    
})

async function geminiwisdow(userdata){
    const apiKey = "AIzaSyASXLZtR_vEZTwlNbG4x7mJHaW1KulD_Z4";

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        generationConfig: {
            responseMimeType: "application/json"
        }
    });

    const result = await model.generateContent(`
        Return ONLY valid JSON.

        Your answer will include the following structure:

        {
            "Titel": "Text",
            "Recommendation": "Text" (Max 200 words)
        },
        {
            "Titel": "Text",
            "Price comparisons": "Text" (max 100 words)
        },
        {
            "Titel": "Text",
            "Recommended change of shopping habits": "Text" (max 100 words)
        }

        

        DATA:
        ${userdata}`);
    
    const airesponse = JSON.parse(result.response.text());
    return airesponse;
    
}

export default router;