// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

//------------------------------
// [GET] all user information (ADMIN DASHBOARD)
// Data. Username, Gmail, Budget, Permission
//------------------------------

router.get('/dashboardcheck/:id', async(req,res) => {
    let admincheck = await prisma.users.findFirst({
        where:{
            usersID: parseInt(req.params.id)
        }
    })

    if(admincheck.permission == 2){
        let allusers = await prisma.users.findMany({
            where:{
                permission:{
                    in: [1,3]
                }
            }
        });
        res.json(allusers);
    }
    else{
        let userID = req.params.id
        let userinfo = await prisma.users.findFirst({
            where:{
                usersID: parseInt(userID)
            }
        });

        let totalamount = await prisma.$queryRaw`SELECT SUM(RI.price) AS TotalAmount FROM receiptitems as RI
        INNER JOIN receipt as RE on RI.receiptID = RE.receiptID
        WHERE RE.usersID = ${userID};`;

        let budgets = await prisma.$queryRaw`SELECT BU.budgetID, BU.budgetamount, BU.startdate, BU.enddate, 
        ROUND(((BU.budgetamount - COALESCE(SUM(RI.price), 0)) / BU.budgetamount) * 100, 0) AS spent_budget FROM budget as BU
        LEFT JOIN receipt AS RE ON BU.budgetID = RE.budgetID
        LEFT JOIN receiptitems AS RI ON RE.receiptID = RI.receiptID
        WHERE BU.usersID = ${userID}
        GROUP BY BU.budgetID, BU.budgetamount;;`;

        res.json({
            userinfo: userinfo,
            totalamount: totalamount,
            budgets: budgets
        })
    }
})

//------------------------------
// [PUT] all user information (ADMIN DASHBOARD)
// Data. Username, Gmail & Permission (mostly just permission that is important)
//------------------------------

router.put('/users/:id', async(req,res) => {
    let { username, gmail } = req.body;

    let updateData = {};

    // Only add fields that actually have values
    if (username !== undefined && username !== "") updateData.username = username;
    if (gmail !== undefined && gmail !== "") updateData.gmail = gmail;

    // Now run your update
    await prisma.users.update({
        where: { usersID: parseInt(req.params.id) },
        data: updateData
    });

    res.json({
        Status: "Success"
    })
})

router.put('/admin/:id', async(req,res) => {
    let { username, gmail, permission } = req.body;

    let updateData = {};

    // Only add fields that actually have values
    if (username !== undefined && username !== "") updateData.username = username;
    if (gmail !== undefined && gmail !== "") updateData.gmail = gmail;
    if (permission !== undefined && permission !== "") updateData.permission = permission;

    // Now run your update
    await prisma.users.update({
        where: { usersID: parseInt(req.params.id) },
        data: updateData
    });

    res.json({
        Status: "Success"
    })
})

router.post('/budget', async(req, res) => {
    let usersID = req.body.usersID;
    let budgetamount = req.body.budgetamount;

    if(typeof budgetamount === "number")
    {
        await prisma.budget.create({
            data:{
                usersID: usersID,
                budgetamount: budgetamount
            }
        });

        res.json({
            "status": "succes"
        })
    }
    else
    {
        res.json({
            "error": "wrong datatype"
        })
    }
})

router.get('/budget', async(req, res) => {
    let usersID = req.body.userID;

    let budgets = await prisma.budget.findMany({
        where:{
            usersID: usersID
        }
    });

    res.json(budgets);
})

router.delete('/budget/:id', async(req, res) => {
    let usersID = req.body.usersID;
    let budgetID = req.params.id;

    if(typeof budgetamount === "number")
    {
        await prisma.budget.delete({
            where:{
                userID: usersID,
                budgetID: budgetID
            }
        });

        res.json({
            "status": "succes"
        })
    }
    else
    {
        res.json({
            "error": "wrong datatype"
        })
    }
})

router.put('/budget/:id', async(req, res) => {
    let budgetamount = req.body.budgetamount;

    if(typeof budgetamount === "number")
    {
        await prisma.budget.update({
            where:{
                budgetID: parseInt(req.params.id)
            },
            data:{
                budgetamount: budgetamount
            }
        });

        res.json({
            "status": "succes"
        })
    }
    else
    {
        res.json({
            "error": "wrong datatype"
        })
    }
})

//router.put


module.exports = router;