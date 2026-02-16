# 🌡️ Temperature Converter Application

A simple full-stack web application that allows users to convert temperature values between **Celsius**, **Fahrenheit**, and **Kelvin**.

This project was developed as part of a practical assessment using the Microsoft .NET stack with Angular.

---

## 🚀 Technologies Used

- .NET 8 Web API
- Angular
- TypeScript
- HTML & CSS
- Git & GitHub

---

## ✨ Features

- Convert temperature between:
  - Celsius → Fahrenheit
  - Celsius → Kelvin
  - Fahrenheit → Celsius
  - Kelvin → Celsius
- RESTful API implementation
- Clean and responsive user interface
- Structured full-stack architecture (Backend + Frontend)

---

## 📁 Project Structure

```
temperature-converter/
│
├── backend/
│   └── TemperatureApi/
│
└── frontend/
    └── temperature-app/
```

---

## ⚙️ Prerequisites

Make sure the following are installed on your system:

- .NET 8 SDK
- Node.js (v18+ recommended)
- Angular CLI
- Git

---

## ▶️ How to Run the Application

### 🔹 Run Backend (.NET Web API)

```bash
cd backend/TemperatureApi
dotnet restore
dotnet run
```

The API will start at:
```
https://localhost:5001
```

Swagger UI:
```
https://localhost:5001/swagger
```

---

### 🔹 Run Frontend (Angular)

```bash
cd frontend/temperature-app
npm install
ng serve
```

The Angular app will start at:
```
http://localhost:4200
```

---

## 🔗 API Endpoint Example

```
GET /api/temperature/convert?value=100&from=Celsius&to=Fahrenheit
```

---

## 🧪 Example Conversion

- 100°C → 212°F
- 0°C → 273.15K

---

## 📌 Author

**Minol Udawaththa**  
BSc (Hons) in Information Technology  

---

## 📄 License

This project is created for evaluation purposes as part of a technical assessment.
