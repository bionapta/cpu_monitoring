import React from 'react';

const ApiDocs = () => {
  return (
    <div className="main-content bg-gray-50 min-h-screen py-10">
      <main className="container mx-auto p-6 max-w-4xl">
        <section className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            API Documentation
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome to our API documentation. Below are the details on how to
            use our API.
          </p>
        </section>

        {/* Authentication */}
        <section className="mt-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            Authentication
          </h3>
          <p className="text-gray-600">
            Use your API key to authenticate requests.
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded-md mt-3 overflow-x-auto">
            <code>{`GET /api/influxdb?api_key=your_api_key`}</code>
          </pre>
        </section>

        {/* GET /api/influxdb */}
        <section className="mt-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            GET /api/influxdb
          </h3>
          <p className="text-gray-600">
            Retrieve CPU usage data from InfluxDB.
          </p>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-700">Query Parameters</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <code>start</code> - Start time for query (ISO 8601 format).
              </li>
              <li>
                <code>end</code> - End time for query (ISO 8601 format).
              </li>
              <li>
                <code>limit</code> - Limit the number of results.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-700">Example Request</h4>
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
              <code>{`GET /api/influxdb?start=2025-01-30T00:00:00Z&end=2025-01-31T23:59:59Z&limit=10`}</code>
            </pre>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-700">Response</h4>
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
              <code>{`[
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
]`}</code>
            </pre>
          </div>
        </section>

        {/* Error Handling */}
        <section className="mt-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            Error Responses
          </h3>
          <p className="text-gray-600">
            API may return the following error codes:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <code>400 Bad Request</code> - Invalid parameters.
            </li>
            <li>
              <code>401 Unauthorized</code> - Missing or invalid API key.
            </li>
            <li>
              <code>403 Forbidden</code> - API key does not have permission.
            </li>
            <li>
              <code>500 Internal Server Error</code> - Server issue.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ApiDocs;
