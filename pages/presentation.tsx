import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Presentation = () => {
  return (
    <div className="main-content">
      <main className="container mx-auto p-4">
        <section className="my-8 p-4 bg-gray-100">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Overview</CardTitle>
              <p>
                InfluxDB adalah database time series yang dirancang untuk
                menyimpan dan menganalisis data yang berubah seiring waktu. Ini
                sangat cocok untuk penggunaan dalam monitoring, IoT, dan
                berbagai aplikasi lainnya.
              </p>
            </CardHeader>
          </Card>
        </section>
        <section className="my-8 p-4 bg-white">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Key Concepts</CardTitle>
              <p>
                InfluxDB menggunakan konsep measurement, series, dan points
                untuk menyimpan data. Measurement adalah jenis data (misalnya
                CPU usage), series adalah kumpulan data dengan tags yang sama,
                dan points adalah entri data individu.
              </p>
            </CardHeader>
          </Card>
        </section>
        <section className="my-8 p-4 bg-gray-100">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Benefits</CardTitle>
              <ul className="list-disc list-inside">
                <li>Optimized for time series data</li>
                <li>High write and query performance</li>
                <li>Rich query language (Flux)</li>
                <li>Scalable and highly available</li>
              </ul>
            </CardHeader>
          </Card>
        </section>
        <section className="my-8 p-4 bg-white">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                Comparison with Other Databases
              </CardTitle>
              <p>
                Dibandingkan dengan database relasional seperti MySQL, InfluxDB
                lebih efisien dalam menangani data time series. Selain itu,
                InfluxDB juga memiliki keunggulan dibandingkan database NoSQL
                lainnya dalam hal performa dan fitur khusus untuk data time
                series.
              </p>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Presentation;
