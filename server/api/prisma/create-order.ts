import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId, stripeId, name, address, zipcode, country, city, products } =
    await readBody(event);
  const order = await prisma.orders.create({
    data: {
      userId,
      stripeId,
      name,
      address,
      zipcode,
      country,
      city,
    },
  });

  products.forEach(async (product) => {
    await prisma.orderItem.create({
      data: { orderId: order.id, productId: Number(product.id) },
    });
  });
  return order;
});
