// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

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

    let wisdom = await gptwisdom(JSON.stringify(allUserData));
    const cleanedText = wisdom.replace(/\*/g, '');

    // 2. Split by newlines and trim each line, removing empty ones
    const lines = cleanedText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line);
    
    const adviceJSON = {};
    lines.forEach((line, index) => {
        adviceJSON[`Line${index + 1}`] = line;
    });

    res.json({
        "advice": adviceJSON
    });
})

async function gptwisdom(userdata){
    const url = 'https://chatgpt-42.p.rapidapi.com/chatgpt';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '00f8a3d412mshae13d562b6987c6p169362jsn20c5892a8c91',
            'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: `Given the data below, provide:
                    Recommendations on spending habits (limit your response to 300 words)

                    (If you don't have enough data: be transparant about it and try your best)
                    
                    Do not use titles in your response.

                    Data:
                    ${userdata}`
                }
            ],
            web_access: false
        })
    };

    try {
        const response = await fetch(url, options);
        const resu = await response.json();

        console.log(resu);

        // Analysis: everything between "1. **Analysis**" and "2. **Recommendations**"
        
        //console.log(recommended);
        return resu.result;
    } catch (error) {
        console.error(error);
    }
}

module.exports = router;