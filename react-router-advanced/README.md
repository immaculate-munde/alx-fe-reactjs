# Advanced Routing in React with React Router

This project demonstrates advanced routing techniques using **React Router v6**:

## Features
- **Nested Routes**: `/profile/details` and `/profile/settings`
- **Dynamic Routes**: `/blog/:id` for blog posts
- **Protected Routes**: `/profile/*` requires authentication

## Setup
npm install
npm run dev
`
Testing
Navigate to /profile → redirects to home if not authenticated

Set isAuthenticated = true in ProtectedRoute.jsx to access profile pages

/blog/1, /blog/2, etc. load dynamically