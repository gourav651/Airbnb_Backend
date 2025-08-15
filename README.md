# Airbnb Clone Backend (with React UI)

A full-stack **Airbnb clone** built with **Node.js, Express.js, MongoDB**, and **React**.  
Users can **sign up, log in, add homes as hosts, and book homes as guests**, with all data stored and updated in MongoDB in real-time.

---

## 🔹 Features

### **User Features**
- ✅ Signup & Login securely
- ✅ Browse available homes
- ✅ Book homes as a guest

### **Host Features**
- ✅ Add new homes with property details
- ✅ Update or remove existing homes
- ✅ View bookings for hosted properties

### **Database & Admin**
- ✅ Data stored in **MongoDB**
- ✅ Real-time updates for homes and bookings

---

## 🔹 Technologies Used
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Frontend:** React (UI)  
- **Authentication:** Session-based or JWT  
- **Other Tools:** Mongoose, bcrypt, dotenv  

---

## 🔹 Project Summary
This project allows users to experience a simplified Airbnb-like system:

1. **User Signup & Login:** Secure authentication for guests and hosts.  
2. **Host Operations:** Hosts can add, edit, or remove properties with images.  
3. **Guest Operations:** Guests can view and book homes.  
4. **Database Integration:** All actions update MongoDB in real-time, storing users, homes, and bookings efficiently.

---

## 🔹 Future Improvements
- Enhance the React frontend with a polished UI/UX  
- Add payment gateway integration  
- Implement role-based authentication (Admin, Host, Guest)  
- Use cloud storage for uploaded images (e.g., AWS S3)

---


## 🔹 How to Use / Run the Project

Follow these steps to run the project locally:

### 1. Clone the Repository

  git clone https://github.com/gourav651/Airbnb_Backend.git
cd Airbnb_Backend 

### 2. Install Backend Dependencies
  npm install

### 3. Setup Environment Variables
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  SECRET=your_session_secret_or_jwt_secret

### 4. Run the Backend Server
  npm start


