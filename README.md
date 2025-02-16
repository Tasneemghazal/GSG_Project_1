# Clinic Appointment System

## Overview
The **Clinic Appointment System** is a simple web application that allows patients to book appointments with doctors. It provides role-based authentication for patients and doctors, enabling them to manage appointments efficiently. The application is built using **React** and **Material-UI (MUI)** for the frontend, with **local storage** used for data persistence.

## Features

### Authentication 🔐
- **Sign Up & Login** based on roles (Patient, Doctor)
- Role-based access control

### Patient Features 👩‍⚕️
- Book an appointment with a doctor 🗓️
- View a list of their appointments 📋

### Doctor Features 🩺
- View all appointments 📅
- Add notes to appointments 📝
- Change appointment status (pending, completed, confirmed) ✅❌
- Search appointments by patient name 🔍
- Filter appointments based on status 🗂️

## Tech Stack 🛠️
- **Frontend:** React, Material-UI (MUI)
- **Storage:** Local Storage (No Backend)

## Installation & Setup ⚙️
```sh
# Clone the repository
git clone https://github.com/Tasneemghazal/GSG_Project_1.git
cd GSG_Project_1.git

# Install dependencies
npm install

# Start the development server
npm run dev
