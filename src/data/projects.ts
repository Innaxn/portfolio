export interface Project {
    id: number;
    title: string;
    technologies: string[]; 
    description: string;
    image: string;
  }
  
export const projects: Project[] = [
    {
      id: 1,
      title: "Social cooking platform - Foody",
      technologies: ["Java", "Spring Boot", "ReactJS","MUI","PostgreSQL", "MongoDB", "Docker", "Git", "Azure", "Kubernetes", "Qodana", "Artillery"],
      description: "I developed Foody, a social cooking platform designed to inspire and connect culinary enthusiasts. Users can save recipes to a digital recipe box, share their cooking experiences, and engage with others through conversations and recipe exchanges. The platform also features cooking workshops and interactive recipe-saving tools. Built as part of a sixth-semester project at Fontys University, Foody uses Java and Spring Boot for the backend and ReactJS for the frontend. It employs a microservice architecture to ensure scalability and performance. The application was load tested to confirm its scalability and performance, and DevOps practices, including CI/CD pipelines, Azure hosting, Azure Functions, and Kubernetes orchestration, were implemented to ensure robustness and reliability.",
      image: "/foody.jpg",
    },
    {
      id: 2,
      title: "Medical Clinic - SanoMed",
      technologies: ["Java", "Spring Boot", "ReactJS", "Bootstrap", "MySQL", "Docker", "Git", "SonarQube"],
      description: "I developed a full-stack clinic management application featuring three types of users: patients, secretaries, and doctors. Patients can search for doctors, schedule appointments when available, view their diagnoses and prescriptions, and communicate with the secretary to adjust their appointments if needed. Secretaries can interact with patients, manage appointment changes, and handle various administrative tasks. Doctors can set their schedules, create holidays, issue diagnoses and prescriptions, and manage patient interactions. Admins have the capability to add and manage secretaries and doctors, as well as oversee patient usage of the platform. The application employs advanced software architecture models and coding practices, covering the entire web application lifecycle. I implemented a scheduling algorithm, ensured comprehensive test code coverage, and established a CI/CD pipeline in GitLab for continuous integration and delivery.",
      image: "/sanomed.jpg",
    },
    {
      id: 3,
      title: "Sports Tournament App",
      technologies: ["Razor Pages", "WinForms", "C#", "MySQL"],
      description: "I created a .NET Core Windows Forms application for tournament management with CRUD functionalities. This application allows for arranging tournaments, recording scores, managing participant sign-ups, and displaying leaderboards. Additionally, I developed a web application using Razor Pages where users and sports participants can register for tournaments, create accounts, view tournament schedules, and check leaderboards for each tournament they have participated in.",
      image: "/tournament.jpg",
    },
    {
      id: 4,
      title: "Photo Forum",
      technologies: ["Razor Pages", "WindowsForms", "C#", "MySQL"],
      description: "I developed a photo forum application using .NET Core, incorporating both Windows Forms and Razor Pages. This application enables photographers to upload, share, and view photos and videos, as well as engage with other photographers. The web application, built with Razor Pages, offers a user-friendly interface for these interactions, while the Windows Forms app provides an administrative view for managing the platform and tracking statistics.",
      image: "/photo-forum.jpg",
    },
  ];
  
  