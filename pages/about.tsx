import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="main-content flex flex-col min-h-screen">
      <main className="container mx-auto p-6 flex-grow">
        <section className="my-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-semibold mb-4">
                About This Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                This application is developed to provide real-time monitoring of
                CPU usage and other metrics using InfluxDB and Grafana. Our goal
                is to deliver an efficient and scalable solution for time-series
                data analysis.
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-2">
                Project Goals
              </h3>
              <p className="text-lg mb-4">
                The main goal of this project is to help system administrators
                and teams to analyze performance and optimize infrastructure by
                utilizing time-series data.
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-2">Key Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Real-time monitoring of CPU usage.</li>
                <li>Integration with InfluxDB for time-series data storage.</li>
                <li>REST API endpoints for external access.</li>
                <li>Data visualization with Grafana.</li>
                <li>
                  Scalable architecture for enterprise-level applications.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-2">
                Technologies Used
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>
                  <strong>Frontend:</strong> Next.js, React, Tailwind CSS
                </li>
                <li>
                  <strong>Backend:</strong> Next.js API Routes (temp)
                </li>
                <li>
                  <strong>Database:</strong> InfluxDB
                </li>
                <li>
                  <strong>Visualization:</strong> Grafana
                </li>
                <li>
                  <strong>Security:</strong> API Key authentication
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-2">Target Users</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>
                  <strong>System Administrators:</strong> Monitor CPU
                  performance and resource usage.
                </li>
                <li>
                  <strong>Data Analysts:</strong> Utilize historical data for
                  decision-making.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;
