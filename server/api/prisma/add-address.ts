import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId, name, address, zipcode, country, city, products } =
    await readBody(event);
  const res = await prisma.addresses.create({
    data: {
      userId,
      name,
      address,
      zipcode,
      country,
      city,
    },
  });

  return res;
});
