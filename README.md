
# 🎵 Music_App Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

This repository contains the **backend for Music_App**, responsible for user management, music storage, favorites, and comments. It provides a REST API for the Flutter frontend.

---

## 🌟 Features

- **User Management**  
  - Create, update, delete users  
  - Login and authentication  

- **Music Management**  
  - Store and retrieve saved songs  
  - Favorite songs  
  - Add and retrieve comments  

- **API Endpoints**  
  - `/users` → Create, update, delete users  
  - `/signin` → Authenticate users  
  - `/songs` → Get, save, and update songs  
  - `/favorites` → Add or remove favorite songs  
  - `/comments` → Add or retrieve comments  

- **Frontend Integration**  
  - Serves data to the Flutter Music_App  
  - Handles all CRUD operations  

---

## 🗂 Folder Structure (Example)

```

Music\_App\_Backend/
│
├─ controllers/      # Handles API request logic
├─ models/           # Database models (User, Song, Comment)
├─ routes/           # API route definitions
├─ config/           # Database & environment setup
├─ server.js         # Main server file
└─ package.json

````

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Music_App_Backend.git
````

2. Navigate to the project folder:

```bash
cd Music_App_Backend
```

3. Install dependencies:

```bash
npm install
```

4. Configure the server:

**For real device:**

```js
const PORT = 3000;
const server = app.listen(PORT, "0.0.0.0", () => console.log(`Server running at http://192.168.x.x:${PORT}`));
```

**For emulator:**

```js
const PORT = 3000;
const server = app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
```

5. Start the server:

```bash
npm run dev  # Uses the script defined in package.json
```

6. Access the server:

* Emulator: `http://localhost:3000`
* Real device: `http://192.168.x.x:3000`

---

## 🔗 API Endpoints

### **Users**

| Endpoint  | Method | Description           |
| --------- | ------ | --------------------- |
| `/`       | POST   | Create a new user     |
| `/signin` | POST   | Sign in existing user |
| `/`       | GET    | Get all users         |
| `/:id`    | GET    | Get user by ID        |
| `/:id`    | PUT    | Update user by ID     |
| `/:id`    | DELETE | Delete user by ID     |
| `/`       | DELETE | Delete all users      |

**Example Request – Create User**

```json
POST /users
{
  "name": "Ayaz",
  "avatar": "avatar1.png"
}
```

**Example Response**

```json
{
  "success": true,
  "user": {
    "_id": "123abc",
    "name": "Ayaz",
    "avatar": "avatar1.png"
  }
}
```

---

### **Songs**

| Endpoint           | Method | Description                        |
| ------------------ | ------ | ---------------------------------- |
| `/`                | POST   | Add a song                         |
| `/:userId`         | GET    | Get all songs of a user            |
| `/:id`             | DELETE | Delete song by ID                  |
| `/:songId/:userId` | DELETE | Delete song by song ID and user ID |
| `/`                | DELETE | Delete all songs                   |

**Example Request – Add Song**

```json
POST /songs
{
  "userId": "123abc",
  "title": "Song Name",
  "artist": "Artist Name",
  "url": "https://song-url.mp3"
}
```

---

### **Comments**

| Endpoint        | Method | Description             |
| --------------- | ------ | ----------------------- |
| `/`             | POST   | Add comment             |
| `/song/:songId` | GET    | Get comments for a song |
| `/`             | DELETE | Delete all comments     |

**Example Request – Add Comment**

```json
POST /comments
{
  "songId": "456def",
  "userId": "123abc",
  "comment": "Great song!"
}
```

**Example Response**

```json
{
  "success": true,
  "comment": {
    "_id": "789ghi",
    "songId": "456def",
    "userId": "123abc",
    "comment": "Great song!"
  }
}
```

---

## 🛠 Technologies Used

* Node.js
* Express.js
* MongoDB
* REST API



It’s now **GitHub-ready** and professional.  

If you want, I can also **make a matching README for your frontend Music_App** that references this backend cleanly.  

Do you want me to do that?
```
