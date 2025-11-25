Week 3 — Advanced Frontend (Next.js + TailwindCSS)

#Introduction

Week 3 focused on learning how to build modern, frontend applications using Next.js and TailwindCSS.
The goal was to understand routing, layouts, reusable UI components, responsive design, and building complete multi-page applications with clean architecture.
The entire week included hands-on exercises, reusable UI system creation, page routing, SEO enhancements, and one final capstone mini-project.
![alt text](<Screenshot from 2025-11-25 06-09-21.png>)

![alt text](<Screenshot from 2025-11-25 07-08-47.png>)


#Folder Structure(Week 3 Project)

week3
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── about/
│   │   └── page.js
│   ├── dashboard/
│   │   ├── page.js
│   │   └── profile/
│   │       └── page.js
│   └── globals.css
│
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx
│   └── layout/
│       ├── Header.jsx
│       └── Sidebar.jsx
│
├── public/
│
├
│   
├── screenshots/
│   ├── dashboard.png
│   ├── landing-page.png
│   ├── users.png
│   ├── profile.png
│   └── login.png
│
├
├── package.json
└── README.md

![alt text](<Screenshot from 2025-11-20 19-56-25.png>)


#Components List (Reused Across Project)

UI Components
Button.jsx
Input.jsx
Card.jsx
Badge.jsx
Modal.jsx
Datatable.jsx
Graph.jsx
ProfileCard.jsx
Table.jsx
Navbar.jsx
Sidebar.jsx

Charts components
AreaCHart.jsx
BarCHart.jsx

![alt text](<Screenshot from 2025-11-24 09-21-38.png>)



![alt text](<Screenshot from 2025-11-24 09-22-00.png>)

#Key Learnings

1.Next.js Folder Structure
 Understanding app directory flow
 How routing works using folder-based routing.

2.Reusable UI Components
 Button, Card, Badge, Sidebar, Navbar, Input, Modal, Graph components.
 How to create UI components once and use them everywhere.

3.Charts Integration
 AreaChart and BarChart components.
 Displaying analytics data visually.

4.Dashboard Layout
 Sidebar + Navbar layout using CSS and Tailwind.
 Structuring the dashboard into pages like profile, users, about.

5.Styling with Tailwind CSS
 Utility classes for spacing, layout, shadows, fonts.
 Creating responsive UI.

6.Routing Concepts
 Nested routing (dashboard → users/profile).
 Creating multiple pages with page.jsx files.



