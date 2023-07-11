import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await prisma.user.findMany();
    res.status(200).json(data);
  } else if (req.method === "POST") {
    try {
      const existingData = await prisma.user.findUnique({
        where: {
          id: req.body.id,
        },
      });
      if (!existingData) {
        await prisma.user.create({
          data: req.body,
        });
        res.status(200).json({ message: "Data added" });
      } else {
        res.status(500).json({ message: "Data already exist" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating data" });
    }
  } else if (req.method === "PUT") {
    try {
      const newData = req.body;
      await prisma.user.update({
        where: {
          id: newData.id,
        },
        data: newData,
      });
      res.status(200).json(newData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating data" });
    }
  }
}
