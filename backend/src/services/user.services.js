import { prisma } from "../utils/db";
import bcrypt from "bcrypt";

export const findUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const createUser = (user) => {

  return prisma.user.create({
    data: user,
  });
};

export const findUserById = (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};
