const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

async function addReceiptItem(itemData) {
  return prisma.receiptitems.create({
    data: itemData
  });
}

module.exports = { addReceiptItem };