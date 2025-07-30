# GitHub User Search

A React application that allows users to search for GitHub profiles using the GitHub Search API. Users can view key information, including their avatar, username, profile URL, location, and public repository count. The app includes advanced search and filtering capabilities.

## 🚀 Features

- 🔍 Real-time GitHub user search
- 📍 Advanced filtering by location and repo count
- 🌐 GitHub Search API integration
- ⚡ Built with Vite for fast performance
- 💅 Styled with Tailwind CSS
- 📦 State management with Zustand
- 🔐 Secure API key management with `.env`
- 🌙 Clean, responsive UI

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **Zustand** (state management)
- **Axios** (HTTP requests)
- **GitHub REST API**

## 🔧 Installation

1. **Clone the repo**
   git clone https://github.com/immaculate-munde/alx-fe-reactjs.git
   cd alx-fe-reactjs/github-user-search
Install dependencies


npm install
Add your GitHub API key
Create a .env file in the root with the following:

VITE_APP_GITHUB_API_KEY=your_github_personal_access_token
Start the development server
npm run dev

🧪 Build for production
npm run build

📁 Project Structure

github-user-search/
├── public/
├── src/
│   ├── components/
│   │   ├── Search.jsx
│   │   ├── UserCard.jsx
│   ├── services/
│   │   └── githubService.js
│   ├── store/
│   │   └── userStore.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
└── tailwind.config.js
🌐 Live Demo
[https://githubusersearch-pied-five.vercel.app/]
