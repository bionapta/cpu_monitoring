import type { NextApiRequest, NextApiResponse } from 'next';
import { InfluxDB } from '@influxdata/influxdb-client';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.INFLUXDB_URL || '';
const token = process.env.INFLUXDB_TOKEN || '';
const org = process.env.INFLUXDB_ORG || '';
const bucket = process.env.INFLUXDB_BUCKET || '';

const client = new InfluxDB({ url, token });
const queryApi = client.getQueryApi(org);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const fluxQuery = `
    from(bucket: "${bucket}")
      |> range(start: -1h)
      |> filter(fn: (r) => r._measurement == "cpu")
      |> filter(fn: (r) => r.host == "host1")
      |> filter(fn: (r) => r._field == "usage_user" or r._field == "temperature")
  `;

  try {
    const data = await queryApi.collectRows(fluxQuery);
    console.log('Flux Query:', fluxQuery);
    console.log('Query Results:', data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error querying InfluxDB:', error);
    res.status(500).json({ error: (error as Error).message });
  }
};

export default handler;
