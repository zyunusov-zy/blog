# Blog Project

## Overview
**Blog** is a full-stack web application built using **Django REST Framework (DRF) and React**. It allows users to create, read, update, and delete (CRUD) blog posts with authentication and role-based access control. The project includes a user-friendly frontend and a powerful backend API.

## Features
### ✅ Completed Features:
- User authentication (signup, login, logout)
- Create, read, update, and delete (CRUD) blog posts
- Commenting system for blog posts
- User profile management
- Role-based access control (Admin, Author, Reader)
- Responsive UI with **React and TailwindCSS**
- RESTful API using **Django REST Framework**
- Pagination and search functionality

## Tech Stack
- **Frontend:** React, TailwindCSS
- **Backend:** Django, Django REST Framework (DRF)
- **Database:** PostgreSQL
- **Authentication:** JWT-based authentication

## Setup Instructions
### Backend:
1. Clone the repository:
   ```sh
   git clone https://github.com/zyunusov-zy/blog.git
   cd blog/backend
   ```
2. Create a virtual environment:
   ```sh
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run database migrations:
   ```sh
   python manage.py migrate
   ```
5. Start the backend server:
   ```sh
   python manage.py runserver
   ```

### Frontend:
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```

## Deployment
The project is fully completed and can be deployed on **VPS, Docker, or cloud platforms**.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.


---
📝 **Project Completed! Start blogging today!**

