const translations = {
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact Me",
        nav_contact_mobile: "Contact",

        hero_greeting: "Hi, I'm",
        hero_bio: "Welcome to my personal portfolio. Here you'll find a curated collection of my selected projects. Links to both demo and source code can be found under each project.",
        hero_view_projects: "View Projects",
        hero_contact_me: "Contact Me",

        about_title: "About Me",
        about_education: "Education",
        edu_dtu_degree: "M.Sc. Autonomous Systems",
        edu_dtu_school: "Technical University of Denmark",
        edu_uis_degree: "BEng Electrical Engineering",
        edu_uis_school: "University of Stavanger",

        about_techstack: "Tech Stack",
        tech_core: "Core & Backend",
        tech_ai: "AI & Robotics",
        tech_frontend: "Frontend & Recent Pokes",

        projects_title: "Featured Projects",
        projects_subtitle: "Here are some of the projects I've worked on, ranging from autonomous systems to modern web applications.",

        proj_drone_title: "Drone-Based Corrosion Detection System",
        proj_drone_desc: "Developed an automated system for detecting and mapping corrosion in marine vessels using drones with RGB cameras and LiDAR. Employed UNet models (ResNet and MobileNetV3 backbones) for pixel-wise segmentation on images, projected detections to 3D point clouds, and used OctoMap for persistent voxel-based mapping. Achieved 88% Corrosion Detection Rate; demo shows real-time RViz visualization. Challenges included domain adaptation for drone-captured data.",

        proj_rag_title: "SkyComfort RAG Chatbot",
        proj_rag_desc: "An intelligent customer support chatbot built with FastAPI. Uses RAG (Retrieval-Augmented Generation) to provide accurate, context-aware responses about flight services, policies, and booking details.",

        proj_weather_title: "Weather ETL API",
        proj_weather_desc: "An automated ETL system ingesting multi-source weather data (yr.no, Open-Meteo), performing weighted aggregation, and persisting results to a database for access via a FastAPI service.",

        proj_patch_title: "Patch Notes AI",
        proj_patch_desc: "An intelligent system that summarizes video game patch notes using LLMs to normalize data into structured formats. (Currently under development)",



        contact_title: "Get In Touch",



        footer_quicklinks: "Quick Links",
        footer_connect: "Connect",
        footer_copyright: "&copy; 2026 Simen Lynne Røisi. All rights reserved."
    },
    no: {
        nav_about: "Om meg",
        nav_projects: "Prosjekter",
        nav_contact: "Kontakt meg",
        nav_contact_mobile: "Kontakt",


        hero_greeting: "<span class='text-4xl md:text-5xl'>Hei, jeg er</span>",
        hero_bio: "Velkommen til min personlige portefølje. Her finner du en samlet kolleksjon av mine utvalgte prosjekter. Link til både demo og kildekode finner du under hvert prosjekt.",
        hero_view_projects: "Se Prosjekter",
        hero_contact_me: "Kontakt Meg",

        about_title: "Om Meg",
        about_education: "Utdanning",
        edu_dtu_degree: "M.Sc. Autonome Systemer",
        edu_dtu_school: "Danmarks Tekniske Universitet",
        edu_uis_degree: "B.Ing Elektroingeniør",
        edu_uis_school: "Universitetet i Stavanger",

        about_techstack: "Teknologistack",
        tech_core: "Kjerne & Backend",
        tech_ai: "AI & Robotikk",
        tech_frontend: "Frontend & Nylig Utforsket",

        projects_title: "Utvalgte Prosjekter",
        projects_subtitle: "Her er noen av prosjektene jeg har jobbet med, fra autonome systemer til moderne webapplikasjoner.",

        proj_drone_title: "Dronebasert Korrosjonsdeteksjon",
        proj_drone_desc: "Utviklet et automatisert system for å oppdage og kartlegge korrosjon i marine fartøy ved hjelp av droner med RGB-kameraer og LiDAR. Brukte UNet-modeller (ResNet og MobileNetV3) for pikselvis segmentering på bilder, projiserte deteksjoner til 3D-punktskyer og brukte OctoMap for persistent voxel-basert kartlegging. Oppnådde 88% deteksjonsrate for korrosjon; demo viser sanntids RViz-visualisering. Utfordringer inkluderte domenetilpasning for dronedata.",

        proj_rag_title: "SkyComfort RAG Chatbot",
        proj_rag_desc: "En intelligent kundesupport-chatbot bygget med FastAPI. Bruker RAG (Retrieval-Augmented Generation) for å gi nøyaktige, kontekstbevisste svar om flytjenester, retningslinjer og bookingdetaljer.",

        proj_weather_title: "Vær ETL API",
        proj_weather_desc: "Et automatisert ETL-system som henter værdata fra flere kilder (yr.no, Open-Meteo), utfører vektet aggregering og lagrer resultater i en database for tilgang via en FastAPI-tjeneste.",

        proj_patch_title: "Patch Notes AI",
        proj_patch_desc: "Et intelligent system som oppsummerer patch-notater for videospill ved hjelp av LLM-er for å normalisere data til strukturerte formater. (For tiden under utvikling)",



        contact_title: "Ta Kontakt",
        footer_quicklinks: "Snarveier",
        footer_connect: "Connect",
        footer_copyright: "&copy; 2026 Simen Lynne Røisi. Alle rettigheter reservert."
    }
};
