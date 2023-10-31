import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId, name, address, zipcode, country, city } = await readBody(
    event
  );
  const res = await prisma.addresses.create({
    data: {
      userId: userId,
      name: name,
      address: address,
      zipcode: zipcode,
      country: country,
      city: city,
    },
  });

  return res;
});
