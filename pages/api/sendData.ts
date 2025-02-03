import { NextApiRequest, NextApiResponse } from 'next';
import { InfluxDB, Point } from '@influxdata/influxdb-client';

// ini untuk ambil nilai dari env
const url = process.env.INFLUXDB_URL || '';
const token = process.env.INFLUXDB_TOKEN || '';
const org = process.env.INFLUXDB_ORG || '';
const bucket = process.env.INFLUXDB_BUCKET || '';

// init client nya InfluxDB
const client = new InfluxDB({ url, token });
const writeApi = client.getWriteApi(org, bucket, 'ms');

async function sendData() {
  const cpuUsage = Math.random() * 100; // Simulasi Load CPU %
  const cpuTemperature = 30 + Math.random() * 70; // Simulasi temperatur CPU (range 30-100)

  const point = new Point('cpu')
    .tag('host', 'host1')
    .floatField('usage_user', cpuUsage)
    .floatField('temperature', cpuTemperature);

  writeApi.writePoint(point);
  await writeApi.flush();
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await sendData();
      res.status(200).json({ message: 'Data sent successfully' });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
