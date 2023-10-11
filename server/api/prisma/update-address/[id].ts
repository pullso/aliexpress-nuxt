import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId, stripeId, name, address, zipcode, country, city, products } =
    await readBody(event);

  const res = await prisma.addresses.update({
    where: { id: Number(event.context.params?.id) },
    data: {
      name,
      address,
      zipcode,
      country,
      city,
    },
  });

  return res;
});
