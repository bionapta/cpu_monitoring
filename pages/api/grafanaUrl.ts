import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API called: /api/grafanaUrl');
  const grafanaUrl =
    process.env.NEXT_PUBLIC_GRAFANA_URL || 'http://localhost:3000/';
  console.log('Returning Grafana URL:', grafanaUrl);
  res.status(200).json({ url: grafanaUrl });
}
