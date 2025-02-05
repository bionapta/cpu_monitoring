import React, { useEffect, useState } from 'react';
import GrafanaEmbed from '../components/GrafanaEmbed';
import InfoSection from '../components/InfoSection';
import MetaHead from '../components/Head';
import '../app/globals.css';

interface CpuData {
  // Define the structure of your CPU data here
  // Example:
  usage: number;
  temperature: number;
}

interface InfluxData {
  // Define the structure of your InfluxDB data here
  // Example:
  measurements: Array<{ time: string; value: number }>;
}

const Home = () => {
  const [cpuData, setCpuData] = useState<CpuData | null>(null);
  const [influxData, setInfluxData] = useState<InfluxData | null>(null);
  const [grafanaUrl, setGrafanaUrl] = useState(
    process.env.NEXT_PUBLIC_GRAFANA_URL || ''
  );

  useEffect(() => {
    // Fetch Grafana URL from environment variable or API
    const fetchGrafanaUrl = async () => {
      console.log('Fetching Grafana URL...');
      try {
        const response = await fetch('/api/grafanaUrl');
        const data = await response.json();
        console.log('Fetched Grafana URL:', data.url);
        setGrafanaUrl(data.url);
      } catch (error) {
        console.error('Error fetching Grafana URL:', error);
        console.log('Using fallback URL');
        setGrafanaUrl('https://bionapta.grafana.net/'); // Fallback to your public IP
      }
    };

    fetchGrafanaUrl();
  }, []);

  useEffect(() => {
    const fetchCpuData = async () => {
      try {
        const response = await fetch('/api/cpuData');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CpuData = await response.json();
        setCpuData(data);
      } catch (error) {
        console.error('Error fetching CPU data:', error);
      }
    };

    fetchCpuData();
  }, []);

  useEffect(() => {
    const fetchInfluxData = async () => {
      try {
        const response = await fetch('/api/influxdb');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: InfluxData = await response.json();
        setInfluxData(data);
      } catch (error) {
        console.error('Error fetching InfluxDB data:', error);
      }
    };

    fetchInfluxData();
  }, []);

  return (
    <div className="main-content">
      <MetaHead
        title="Monitoring Dashboard"
        description="Monitor CPU usage and other metrics using InfluxDB and Grafana"
      />
      <main className="container mx-auto p-4">
        <InfoSection />
        <div className="grid grid-cols-3 gap-3 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
          {/* Panel Kiri - Gauge CPU Load dan CPU Temp */}
          <div className="col-span-1 flex flex-col gap-3 rounded-lg shadow-lg">
            <GrafanaEmbed
              src={`${grafanaUrl}/d-solo/cebqm8gdewk5cd/cpu-monitor?orgId=1&from=1736134625213&to=1738726625213&timezone=browser&refresh=5s&panelId=3&__feature.dashboardSceneSolo`}
              width="100%"
              height="220"
            />
            <GrafanaEmbed
              src={`${grafanaUrl}/d-solo/cebqm8gdewk5cd/cpu-monitor?orgId=1&from=1736134656721&to=1738726656721&timezone=browser&refresh=5s&panelId=4&__feature.dashboardSceneSolo`}
              width="100%"
              height="220"
            />
          </div>

          {/* Panel Kanan - Grafik Timeseries */}
          <div className="col-span-2 rounded-lg shadow-lg">
            <GrafanaEmbed
              src={`${grafanaUrl}/d-solo/cebqm8gdewk5cd/cpu-monitor?orgId=1&from=1736134677520&to=1738726677520&timezone=browser&refresh=5s&panelId=1&__feature.dashboardSceneSolo`}
              width="100%"
              height="450"
            />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">CPU Usage Data</h2>
          <pre className="bg-gray-200 p-4 rounded">
            {JSON.stringify(cpuData, null, 2)}
          </pre>
          <h2 className="text-2xl font-semibold mt-4">InfluxDB Data</h2>
          <pre className="bg-gray-200 p-4 rounded">
            {JSON.stringify(influxData, null, 2)}
          </pre>
        </div>
      </main>
    </div>
  );
};

export default Home;
