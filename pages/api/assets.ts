import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export type Asset = {
  id: number;
  assets: string;
  lastTrade: string;
  dayChange: number;
  dayChangeAmount: number;
  image: string;
};

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Asset[]>) {
  const assets = await prisma.asset.findMany();
  res.status(200).json(assets);
}