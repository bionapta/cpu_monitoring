import React from 'react';

const ApiDocs = () => {
  return (
    <div className="main-content">
      <main className="container mx-auto p-4">
        <section className="my-8 p-4 bg-gray-100">
          <h2 className="text-2xl mb-4">API Documentation</h2>
          <h3 className="text-xl mb-2">GET /api/influxdb</h3>
          <p>Retrieve CPU usage data from InfluxDB.</p>
          <pre>
            <code>
              {`
GET /api/influxdb
Response:
[
  {
    "result": "_result",
    "table": 0,
    "_start": "2025-01-30T17:03:27.000Z",
    "_stop": "2025-01-31T17:03:27.000Z",
    "_time": "2025-01-31T16:03:27.000Z",
    "_value": 0.5,
    "_field": "usage_user",
    "_measurement": "cpu",
    "host": "host1",
    "cpu": "cpu0"
  },
  ...
]
              `}
            </code>
          </pre>
        </section>
      </main>
    </div>
  );
};

export default ApiDocs;