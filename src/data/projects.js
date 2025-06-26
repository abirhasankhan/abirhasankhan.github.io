import vr01 from '../images/vr01.png';
import vr02 from '../images/vr02.png';
import vr03 from '../images/vr03.png';
import bloodplus01 from '../images/bloodplus01.PNG';
import bloodplus02 from '../images/bloodplus02.PNG';
import bloodplus03 from '../images/bloodplus03.PNG';
import bloodplus04 from '../images/bloodplus04.PNG';
import event01 from '../images/event01.png';
import event02 from '../images/event02.png';
import event03 from '../images/event03.png';
import event04 from '../images/event04.png';
import ewu_buysell01 from '../images/ewu_buysell01.PNG';
import ewu_buysell01_5 from '../images/ewu_buysell01.5.PNG';
import ewu_buysell02 from '../images/ewu_buysell02.PNG';
import ewu_buysell03 from '../images/ewu_buysell03.PNG';
import capstone01 from '../images/capstone01.PNG';
import capstone02 from '../images/capstone02.PNG';
import capstone03 from '../images/capstone03.PNG';
import restaurant1 from '../images/restaurant_app_react01.PNG';
import restaurant2 from '../images/restaurant_app_react02.PNG';
import restaurant3 from '../images/restaurant_app_react03.PNG';
import restaurant4 from '../images/restaurant_app_react04.PNG';
import sms01 from '../images/SMS01.png';
import sms02 from '../images/SMS02.png';
import sms03 from '../images/SMS03.png';
import sms04 from '../images/SMS04.png';
import sms05 from '../images/SMS05.png';
import sms06 from '../images/SMS06.png';

const projects = [
    {
        id: 1,
        title: "Social Gatherings Through VR App",
        description:
            "The project explores the integration of Virtual Reality (VR) technology to enhance social interactions and gatherings, overcoming physical and geographical barriers.",
        details:
            "This solution provides users with immersive environments to connect, communicate, and collaborate virtually.",
        images: [vr01, vr02, vr03],
        githubLink: "https://github.com/abirhasankhan/VRsocial",
        year: "2024",
        category: "VR/Gaming",
        status: "Completed",
        tech: ["Unity", "VR", "C#", "3D Graphics"],
    },
    {
        id: 2,
        title: "BloodPlus Android",
        description:
            "BloodPlus is a mobile application that connects blood donors and recipients during emergencies.",
        details:
            "Featuring quick communication, Firebase for user authentication and data storage, SQLite for local data management, and health tips to enhance the user experience.",
        images: [bloodplus01, bloodplus02, bloodplus03, bloodplus04],
        githubLink: "https://github.com/abirhasankhan/Android-BloodPlus-App",
        year: "2023",
        category: "Mobile",
        status: "Completed",
        tech: ["Android", "Firebase", "SQLite", "Java"],
    },
    {
        id: 3,
        title: "Event Management Android",
        description: "This app is designed for efficiently managing events and schedules.",
        details:
            "Allowing users to create, organize, and track upcoming events, set reminders, and share schedules with others for better coordination.",
        images: [event01, event02, event03, event04],
        githubLink: "https://github.com/abirhasankhan/Android-Event-Management-App",
        year: "2023",
        category: "Mobile",
        status: "Completed",
        tech: ["Android", "Java", "Event Scheduling", "Notifications"],
    },
    {
        id: 4,
        title: "EWU Book Buy & Sell Webapp",
        description:
            "The East West University Book Buy and Sell Website is a secure platform for university students to buy and sell used books.",
        details:
            "Offering account registration, verification, and management of book-related activities.",
        images: [ewu_buysell01, ewu_buysell01_5, ewu_buysell02, ewu_buysell03],
        githubLink: "https://github.com/abirhasankhan/ewu-book-buy-sell-website",
        year: "2023",
        category: "Web",
        status: "Completed",
        tech: ["PHP", "MySQL", "Web Development", "Security"],
    },
    {
        id: 5,
        title: "Capstone Management System Webapp",
        description:
            "The Capstone Management System streamlines the management of capstone projects at East West University.",
        details:
            "Allowing students to register and form groups, faculty to monitor and grade progress, and administrators to oversee project allocation and grading.",
        images: [capstone01, capstone02, capstone03],
        githubLink: "https://github.com/abirhasankhan/capstone-management-webapp",
        year: "2023",
        category: "Full-Stack",
        status: "Completed",
        tech: ["Full-Stack", "Database Design", "Web App", "Node.js", "React"],
    },
    {
        id: 6,
        title: "My Restaurant App",
        description:
            "My Restaurant App is a beautifully designed, responsive web application built using React.js that allows users to explore various aspects of a restaurant, including menu items, client testimonials, booking a table, and contact details.",
        details:
            "The app features modern UI/UX elements, smooth animations, and an intuitive interface for seamless navigation.",
        images: [restaurant1, restaurant2, restaurant3, restaurant4],
        githubLink: "https://github.com/abirhasankhan/my-restaurant-app",
        year: "2024",
        category: "Web",
        status: "Completed",
        tech: ["React.js", "Tailwind CSS", "Responsive Design", "Animations"],
    },
    {
        id: 7,
        title: "SMS-assessment (School Management System)",
        description:
            "SMS-assessment is a comprehensive School Management System built to manage student records, teacher profiles, grades, schedules, and communication.",
        details:
            "It includes robust features like role-based permissions, real-time notifications, and report generation to enhance school operations for administrators, teachers, and students.",
        images: [sms01, sms02, sms03, sms04, sms05, sms06],
        githubLink: "https://github.com/abirhasankhan/SMS-assessment",
        year: "2024",
        category: "Full-Stack",
        status: "Completed",
        tech: ["Full-Stack", "Role-Based Permissions", "Real-Time Notifications", "Report Generation"],
    },
];

export default projects;
