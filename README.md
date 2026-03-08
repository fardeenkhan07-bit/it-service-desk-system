# IT Service Desk | Ticket Management System

## 📌 Project Overview
A database-driven IT Support system designed to streamline **incident management** and **service ticket resolution**. This application enables users to report technical issues, while providing IT administrators with a centralized dashboard to track, prioritize, and resolve tickets using a full **CRUD (Create, Read, Update, Delete)** lifecycle.

## 🚀 Key Features
* **Incident Reporting**: Responsive user interface for submitting technical issues with category and priority levels.
* **Real-Time Dashboard**: A dynamic data table that fetches and displays active service tickets from a MySQL database using the Fetch API.
* **Full CRUD Integration**: Complete backend logic for creating, reading, updating (status changes), and deleting ticket records.
* **Data Analytics**: Structured data organization to help identify resolution trends and high-priority bottlenecks.
* **Excel Export**: Integrated functionality to export ticket data for offline analysis and reporting.

## 🛠️ Tech Stack
* [cite_start]**Frontend**: HTML5, CSS3, JavaScript (Vanilla)[cite: 17].
* [cite_start]**Backend**: Node.js, Express.js[cite: 17, 20].
* [cite_start]**Database**: MySQL (Relational Database Management)[cite: 7, 19].
* [cite_start]**Tools**: VS Code, GitHub, Postman[cite: 21].

## 📊 Database Schema
The system utilizes a relational MySQL schema to maintain data integrity:
- `id`: Unique identifier (Primary Key).
- `title`: Short summary of the incident.
- `category`: Hardware, Software, Network, or Database.
- `priority`: Low, Medium, or High.
- `status`: Open, In Progress, or Resolved.

## ⚙️ Setup & Installation
1.  Clone the repository: `git clone https://github.com/fardeenkhan07/it-service-desk-system.git`
2.  Install dependencies: `npm install`
3.  Configure your MySQL database in `db.js`.
4.  Start the server: `node server.js`
5.  Access the portal at `http://localhost:3000`.

## 📈 Impact for IT Operations
This project demonstrates proficiency in **ITSM (IT Service Management)** by providing a scalable solution for monitoring production environments and handling client-centric support tickets.