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

router.get('/:id', async(req,res) => {
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

        let budgets = await prisma.$queryRaw`SELECT BU.budgetID, BU.budgetamount FROM budget as BU
        WHERE BU.usersID = ${userID};`;

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

//router.put


module.exports = router;