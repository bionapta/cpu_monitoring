import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Presentation = () => {
  return (
    <div className="main-content">
      <main className="container mx-auto p-4">
        <section className="my-8 p-4 bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Overview</CardTitle>
                <p>
                  InfluxDB adalah database time series yang dirancang untuk
                  menyimpan dan menganalisis data yang berubah seiring waktu.
                  Cocok untuk monitoring, IoT, dan aplikasi lain yang
                  membutuhkan pencatatan data secara berkala.
                </p>
              </CardHeader>
            </Card>
          </div>
          <Image
            src="/images/influxdb.png"
            alt="InfluxDB Logo"
            width={400}
            height={200}
          />
        </section>

        <section className="my-8 p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <Image
            src="/images/influxdb_architecture.png"
            alt="InfluxDB Architecture"
            width={500}
            height={300}
          />
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Key Concepts</CardTitle>
                <p>
                  InfluxDB menyimpan data dalam bentuk measurement, series, dan
                  points. Measurement adalah kategori data, series adalah
                  kumpulan data dengan tags yang sama, dan points adalah setiap
                  entri data individu.
                </p>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="my-8 p-4 bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Benefits</CardTitle>
                <ul className="list-disc list-inside">
                  <li>Performa tinggi untuk data time-series</li>
                  <li>Skalabilitas tinggi dengan arsitektur cloud-native</li>
                  <li>Bahasa query fleksibel dengan Flux</li>
                </ul>
              </CardHeader>
            </Card>
          </div>
          <Image
            src="/images/query-performance.jpg"
            alt="Comparison with Other Databases"
            width={500}
            height={300}
          />
        </section>

        <section className="my-8 p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <Image
            src="/images/visualisasi.png"
            alt="Grafana Visualization"
            width={500}
            height={300}
          />
          <Image
            src="/images/grafana-influx.png"
            alt="Grafana & InfluxDB Integration"
            width={400}
            height={300}
          />
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">
                  Example Application
                </CardTitle>
                <p>
                  Data yang dikumpulkan dari Telegraf dikirim ke InfluxDB,
                  kemudian divisualisasikan menggunakan Grafana Cloud. Hasilnya
                  adalah dashboard real-time yang menampilkan penggunaan CPU,
                  RAM, dan metrik lainnya secara akurat.
                </p>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Presentation;
