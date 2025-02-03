import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="main-content flex flex-col min-h-screen">
      <main className="container mx-auto p-4 flex-grow">
        <section className="my-8 p-4 bg-gray-100">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">About Us</CardTitle>
              <p>
                This application is developed to provide real-time monitoring of
                CPU usage and other metrics using InfluxDB and Grafana. Our goal
                is to deliver an efficient and scalable solution for time-series
                data analysis.
              </p>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;
