const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const name = req.body.name;
    const type = req.body.type;

    if (!name || !type) {
        return res.json({ error: "Missing name or type" });
    }
    else{
        const modelMap = {
            category: prisma.category,
            unit: prisma.unit,
            store: prisma.store,
        };

        const fieldnames = {
            category: "categoryname",
            unit: "unitname",
            store: "storename",
        }

        const model = type.toLowerCase();

        const table = modelMap[model];
        const tablename = fieldnames[model];

        if (!model) return res.json({ error: "Invalid type" });

        const item = await table.create({
            data:{
                [tablename]: name
            }
        });

        res.json(item);
    }
})

router.put('/', async (req, res) => {
    const id = parseInt(req.body.id);
    const name = req.body.name;
    const type = req.body.type;

    if (!name || !type) {
        return res.json({ error: "Missing name or type" });
    }
    else{
        const modelMap = {
            category: prisma.category,
            unit: prisma.unit,
            store: prisma.store,
        };

        const fieldnames = {
            category: "categoryname",
            unit: "unitname",
            store: "storename",
        }

        const idfields = {
            category: "categoryID",
            unit: "unitID",
            store: "storeID",
        }

        const model = type.toLowerCase();

        const table = modelMap[model];
        const tablename = fieldnames[model];
        const itemID = idfields[model];

        if (!model) return res.json({ error: "Invalid type" });

        const item = await table.update({
            where:{ [itemID]: id },
            data:{
                [tablename]: name
            }
        });

        res.json(item);
    }
})

router.delete('/', async (req, res) => {
    const id = parseInt(req.body.id);
    const type = req.body.type;

    const modelMap = {
        category: prisma.category,
        unit: prisma.unit,
        store: prisma.store,
    };

    const idFields = {
        category: "categoryID",
        unit: "unitID",
        store: "storeID",
    };

    const model = type.toLowerCase();
    const table = modelMap[model];
    const idField = idFields[model];

    if (!table) return res.json({ error: "Invalid type" });
    else{
        
        const deleted = await table.delete({
            where: { [idField]: id }
        });

        res.json(deleted);
    }
})



module.exports = router;