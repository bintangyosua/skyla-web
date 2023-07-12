import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await prisma.command.findMany();
    res.status(200).json(data);
  } else if (req.method === "POST") {
    try {
      const existingData = await prisma.command.findUnique({
        where: {
          id: req.body.id,
        },
      });
      if (!existingData) {
        await prisma.command.create({
          data: req.body,
        });
        res.status(200).json({ message: "Command has been addedd" });
      } else {
        res.status(200).json({ message: "Command already exists" });
      }
    } catch (error) {
      console.error(error);
      res.status(200).json({ message: "Invalid Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      await prisma.command.upsert({
        where: {
          id: req.body.id,
        },
        create: req.body,
        update: req.body,
      });
      res.status(200).json({ message: "command has been created or updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.command.delete({
        where: { id: req.body.id },
      });
      res.status(200).json({ message: "Command has been deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
