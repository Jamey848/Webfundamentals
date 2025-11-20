// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

router.get('/', async(req, res) => {
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

    res.json({
        "advice": wisdom
    });

    res.json(allUserData);
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
                    - analysis (max 100 words)
                    - recommendations (max 300 words)
                    
                    The structure of your response will be:
                    @1. Analysis@
                    /your response/

                    #2. recommendations#
                    +your response+

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
        return resu.result;
    } catch (error) {
        console.error(error);
    }
}

module.exports = router;