# TaskCare ✅
 
A modern, responsive task management app built with React, Express, and MongoDB.
 
---
 
## ✨ Features
 
- 🔐 User authentication (Register & Login with JWT)
- ✅ Create, update, and delete tasks
- 🎯 Task status management (Low / Medium / High)
- 📅 Calendar view
- 📱 Fully responsive (mobile & desktop)
- 🔔 PWA support (installable on mobile)
- 🚪 Logout functionality
---
 
## 🛠 Tech Stack
 
### Frontend
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/) for authentication
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) for password hashing
---
 
## 📁 Project Structure
 
```
todo-app/
├── Server/
│   ├── models/
│   │   ├── user.js
│   │   └── todo.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── todos.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── index.js
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   │   └── api.js
│   └── main.jsx
└── package.json
```
 
---
 
## 🚀 Getting Started
 
### Prerequisites
- Node.js
- MongoDB (local or Atlas)
### 1. Clone the repo
```bash
git clone https://github.com/PhatemehDev11/todo-app.git
cd todo-app
```
 
### 2. Setup Backend
```bash
cd Server
npm install
```
 
Create a `.env` file inside `Server/`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```
 
Run the server:
```bash
node index.js
```
 
### 3. Setup Frontend
```bash
cd ..
npm install
npm run dev
```
 
---
 
## 🔑 API Endpoints
 
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |
 
---
 
## 📸 Screenshots


<p align="center">
  
### 📝 Register
<img width="900"  alt="Screenshot2" src="https://github.com/user-attachments/assets/c0ba02a3-9a16-409c-b2e2-251cb9426ed8" />

### 🔐 Login
<img width="900"  alt="Screenshot1" src="https://github.com/user-attachments/assets/ae5eed55-ebdc-480c-ac65-c574153a2faa" />

### 🏠 Task Manager
<img width="900"  alt="Screenshot3" src="https://github.com/user-attachments/assets/c587c06f-a176-400c-952e-23b711eda349" />
</p>


---
 
## 👩‍💻 Developer
 
<p align="center">
  If you like this project, give it a ⭐ !
  <br/><br/>
  Made with ❤️☕ by <a href="https://github.com/PhatemehDev11">PhatemehDev11</a>
</p>
