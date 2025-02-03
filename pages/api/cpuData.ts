import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simulate CPU data
  const cpuData = [
    { id: 1, usage: 20 },
    { id: 2, usage: 35 },
    { id: 3, usage: 50 },
  ];

  res.status(200).json(cpuData);
}
