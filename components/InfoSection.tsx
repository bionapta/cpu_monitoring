import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const InfoSection = () => {
  return (
    <section className="my-8 p-4 bg-gray-100">
      <div className="container mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Overview</CardTitle>
            <p>
              This application monitors CPU usage and other metrics using
              InfluxDB and Grafana.
            </p>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default InfoSection;
