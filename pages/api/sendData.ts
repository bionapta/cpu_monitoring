import { NextApiRequest, NextApiResponse } from 'next';
import { InfluxDB, Point } from '@influxdata/influxdb-client';

// ini untuk ambil nilai dari env
const url = process.env.INFLUXDB_URL || '';
const token = process.env.INFLUXDB_TOKEN || '';
const org = process.env.INFLUXDB_ORG || '';
const bucket = process.env.INFLUXDB_BUCKET || '';

// init client nya InfluxDB
if (!url || !token) {
  throw new Error('INFLUXDB_URL and INFLUXDB_TOKEN must be defined');
}
const client = new InfluxDB({ url, token });
const writeApi = client.getWriteApi(org, bucket, 'ms');

async function sendData() {
  const cpuUsage = Math.random() * 100; // Simulasi Load CPU %
  const cpuTemperature = 30 + Math.random() * 70; // Simulasi temperatur CPU (range 30-100)

  const point = new Point('cpu')
    .floatField('usage', cpuUsage)
    .floatField('temperature', cpuTemperature);

  try {
    await writeApi.writePoint(point);
    await writeApi.close();
  } catch (error) {
    console.error('Error writing data to InfluxDB', error);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendData();
  res.status(200).json({ message: 'Data sent successfully' });
}
