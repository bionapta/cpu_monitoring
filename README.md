# Monitoring Dashboard

This is a web application for monitoring CPU usage and other metrics using InfluxDB and Grafana. The application is built with Next.js, React, TypeScript, Tailwind CSS, and Shadcn/UI.

## Prerequisites

- Node.js
- InfluxDB
- Grafana

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/monitoring-dashboard.git
    cd monitoring-dashboard
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file and add your InfluxDB configuration:
    ```env
    INFLUXDB_TOKEN=your-influxdb-token
    INFLUXDB_URL=http://localhost:8086
    INFLUXDB_ORG=your-org
    INFLUXDB_BUCKET=your-bucket
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Connect your GitHub repository.
4. Deploy your project.

## Structure

cpu_monitoring/
│
├── .env.local
├── components.json
├── eslint.config.mjs
├── jest.config.js
├── jest.setup.js
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tailwind.config.ts
├── tsconfig.json
├── app/
│   └── globals.css
│   └── layout.tsx
├── components/
│   └── ui
│       └── button.tsx
│       └── card.tsx
│       └── form.tsx
│       └── input.tsx
│       └── label.tsx
│       └── textarea.tsx
│   └── Footer.tsx
│   └── Head.tsx
│   └── GrafanaEmbed.tsx
│   └── InfoSection.tsx
│   └── Navbar.tsx
│   └── PageTransition.tsx
├── lib/
│   └── utils.ts
├── pages/
│   └── api
│       └── influxdb.ts
├── public/
    └── images
        └── spc.png

## License

This project is licensed under the MIT License.

# Monitoring Dashboard Project

## Deskripsi Proyek
Proyek ini adalah sebuah dashboard monitoring yang menggunakan InfluxDB dan Grafana untuk memantau penggunaan CPU dan temperatur CPU. Dashboard ini menampilkan data dalam bentuk gauge dan grafik, serta menyediakan data mentah dalam format JSON.

## Fitur
- **Grafana Dashboard**: Menampilkan CPU Load, CPU Temperature dalam bentuk gauge, dan CPU Load dalam bentuk grafik garis.
- **API untuk Mengirim dan Mengambil Data**: Menggunakan InfluxDB untuk menyimpan dan mengambil data.
- **Auto Refresh**: Data diperbarui setiap 1 detik.

## Struktur Proyek
- `components/`: Berisi komponen React yang digunakan dalam proyek.
  - `GrafanaEmbed.tsx`: Komponen untuk menyematkan dashboard Grafana.
  - `InfoSection.tsx`: Komponen untuk menampilkan informasi tambahan.
- `pages/`: Berisi halaman utama proyek.
  - `index.tsx`: Halaman utama yang menampilkan dashboard dan data CPU.
- `api/`: Berisi API endpoint untuk mengirim dan mengambil data.
  - `sendData.ts`: Endpoint untuk mengirim data ke InfluxDB.
  - `influxdb.ts`: Endpoint untuk mengambil data dari InfluxDB.
- `app/globals.css`: Berisi gaya global untuk proyek.

## Persyaratan
- Node.js
- InfluxDB
- Grafana

## Cara Menjalankan Proyek

### Instalasi
Pastikan Anda telah menginstal Node.js di sistem Anda. Kemudian, instal dependensi proyek dengan menjalankan:

```bash
npm install