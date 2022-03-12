import { PrismaClient } from "@prisma/client";
/**
 * Allow global access to the prisma client.
 */
declare global {
  var prisma: PrismaClient | undefined;
}
/** Export the variable. */
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
