# 🚀 Live Code

**Live Code** is a real-time collaborative code editor that allows multiple users to write, edit, and execute code together in the same online coding environment.

The project is designed to make coding collaboration easier by providing a shared workspace where users can work on code in real time.

---

## ✨ Features

* 🔴 **Real-Time Code Editing**
* 👥 **Collaborative Coding**
* 📝 **Online Code Editor**
* ⚡ **Instant Code Updates**
* 💻 **Multiple Programming Languages Support**
* 🔗 **Create & Join Coding Rooms**
* 📋 **Copy Room ID**
* 🎨 **Modern & Responsive UI**
* 🚪 **Leave Room Functionality**
* 🔄 **Real-Time Synchronization**

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* React Router
* Code Editor

### Backend

* Node.js
* Express.js
* Socket.IO

### Database

* MongoDB

### Development Tools

* VS Code
* Git
* GitHub
* npm

---

## 📂 Project Structure

```text
Live-Code/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/live-code.git
```

### 2. Navigate to the project

```bash
cd live-code
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Install backend dependencies

```bash
cd ../backend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Add any additional API keys required by your implementation.

---

## ▶️ Run the Project

### Start Backend

```bash
cd backend
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

## 💡 How It Works

1. Open the Live Code application.
2. Create a new coding room.
3. Share the room ID with another user.
4. The second user joins the same room.
5. Both users can edit the code simultaneously.
6. Changes are synchronized in real time.
7. Users can collaborate on coding from different devices.

---

## 🔌 Real-Time Communication

The application uses **Socket.IO** to establish real-time communication between users.

Whenever a user changes the code, the updated content is sent through the socket connection and synchronized with other users in the same room.

```text
User A
   │
   │ Code Change
   ▼
Socket.IO Server
   │
   │ Broadcast Update
   ▼
User B
```

---

## 🎯 Future Improvements

* 🔐 User Authentication
* 👤 User Profiles
* 💬 Real-Time Chat
* 🖥️ Code Execution
* 📁 File & Folder Support
* 🌙 Dark/Light Mode
* 💾 Save Code Automatically
* 📜 Code Version History
* 👨‍💻 Multiple Language Support
* 🚀 Cloud Deployment

---

## 📸 Screenshots

Add screenshots of your project here:

```text
screenshots/
├── home.png
├── editor.png
├── room.png
└── collaboration.png
```

Example:

```markdown
![Home Page](screenshots/home.png)
![Code Editor](screenshots/editor.png)
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add new feature"
```

5. Push your branch

```bash
git push origin feature/new-feature
```

6. Create a Pull Request

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Prince Pawar**

If you like this project, consider giving it a ⭐ on GitHub!

---

## ⭐ Support

If this project helped you or you found it interesting, don't forget to **star the repository** ⭐
