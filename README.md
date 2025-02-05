# CPU Monitoring Dashboard

## **Deskripsi Proyek**

Proyek ini adalah sebuah dashboard monitoring yang menggunakan **InfluxDB** dan **Grafana** untuk memantau penggunaan CPU dan suhu CPU secara real-time. Dashboard ini menampilkan data dalam bentuk **gauge, grafik garis**, serta menyediakan **API endpoint** untuk pengambilan data mentah dalam format JSON.

### **Fitur Utama**

- **📊 Grafana Dashboard**: Menampilkan CPU Load dan Temperature dalam bentuk gauge serta grafik garis.
- **🔗 API untuk Mengambil Data**: Menggunakan **InfluxDB** untuk menyimpan dan mengambil data.
- **⏳ Auto Refresh**: Data diperbarui setiap 1 detik secara otomatis.
- **☁️ Menggunakan Cloud InfluxDB & Grafana**: Tidak perlu setup database lokal.

---

## **🚀 Installation & Setup**

### **1. Clone Repository**

```sh
git clone https://github.com/yourusername/cpu_monitoring.git
cd cpu_monitoring
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Konfigurasi .env.local**

Buat file `.env.local` di root project dan isi dengan kredensial InfluxDB Cloud:

```
INFLUXDB_URL=your_influxdb_url
INFLUXDB_TOKEN=your_influxdb_token
INFLUXDB_ORG=your_influxdb_org
INFLUXDB_BUCKET=your_influxdb_bucket
```

### **4. Jalankan Aplikasi**

```sh
npm run dev
```

Aplikasi akan berjalan di **http://localhost:3000**.

---

## **📡 API Endpoints**

### **1. GET `/api/influxdb`**

Mengambil data CPU usage dari InfluxDB.

#### **Request**

```sh
GET /api/influxdb
```

#### **Response**

```json
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
  }
]
```

---

## **💾 InfluxDB & Grafana Setup**

**1️⃣ Setup InfluxDB Cloud**

- **URL:** [InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/orgs/6ffdac236bb9b962)
- **Gunakan Telegraf** untuk mengambil data CPU.

**2️⃣ Setup Grafana Dashboard**

- **Dashboard Publik:** [Grafana Dashboard](https://bionapta.grafana.net/public-dashboards/b710af3453fc44a7bc78b861f7edbe58?orgId=1&from=now-30d&to=now&timezone=browser)
- **Terhubung langsung ke InfluxDB untuk visualisasi data CPU.**

---

## **📂 Struktur Proyek**

```
cpu_monitoring/
│
├── .env.local
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.ts
├── pages/
│   ├── api/                 # Endpoint untuk mengambil data dari InfluxDB
│   ├── index.tsx            # Halaman utama dashboard
│   ├── about.tsx            # Halaman tentang proyek
│   ├── contact.tsx          # Halaman Contact Us
├── components/
│   ├── GrafanaEmbed.tsx     # Komponen untuk menyematkan dashboard Grafana
│   ├── InfoSection.tsx      # Komponen informasi tambahan
│   ├── Navbar.tsx           # Navigasi utama
│   ├── Footer.tsx           # Footer halaman
├── public/
│   ├── images/       # Logo atau gambar tambahan
└── lib/
    ├── utils.ts             # Helper functions
```

---

## **📜 License**

This project is licensed under the **MIT License**.

---

### **🔗 Links**

- 🌐 **Live Demo:** [https://cpumonitoring-bion.vercel.app/](https://cpumonitoring-bion.vercel.app/)
- 📊 **Grafana Dashboard:** [https://bionapta.grafana.net](https://bionapta.grafana.net/public-dashboards/b710af3453fc44a7bc78b861f7edbe58?orgId=1&from=now-30d&to=now&timezone=browser)
- 💾 **InfluxDB Cloud:** [https://us-east-1-1.aws.cloud2.influxdata.com/orgs/6ffdac236bb9b962](https://us-east-1-1.aws.cloud2.influxdata.com/orgs/6ffdac236bb9b962)
- 💻 **GitHub Repository:** [https://github.com/bionapta/cpu_monitoring](https://github.com/bionapta/cpu_monitoring)

---
