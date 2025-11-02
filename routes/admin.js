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
        res.json({"error": "incorrect permission status to access admin dashboard"});
    }
})

module.exports = router;