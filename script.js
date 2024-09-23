window.onload = function() {
    const webpageTitle = document.getElementById('webpage-title')
    const loadingScreen = document.getElementById('loading-screen');
    const profilePhoto = document.getElementById('profile-photo');
    const cascadingPhotos = document.querySelector('.cascading-photos');
    const sections = document.querySelectorAll('.section');
    const languageToggle = document.getElementById('language-toggle');
    const welcomeTitle = document.getElementById('welcome-title');
    const weclomeDescription = document.getElementById('welcome-description');
    const aboutTitle = document.getElementById('about-title');
    const aboutDescription = document.getElementById('about-description');
    const projectsTitle = document.getElementById('projects-title');
    const photosTitle = document.getElementById('photos-title');
    const contactTitle = document.getElementById('contact-title');
    const languageButtonTitle = document.getElementById('language-toggle')
    // const contactName = document.getElementById('contact-name');
    // const contactEmail = document.getElementById('contact-email');
    // const contactMessage = document.getElementById('contact-message');
    //const contactButton = document.getElementById('contact-button');
    const navAbout = document.getElementById('about-link');
    const navProjects = document.getElementById('projects-link');
    const navPhotos = document.getElementById('photos-link');
    const navContact = document.getElementById('contact-link');
    const projectsContainer = document.getElementById('projectsContainer');

    // Language text content
    const textContent = {
        english: {
            webpageTitle: "Ezequiel Medrano's Portfolio Website",
            aboutTitle: "About Me🐊💻",
            welcomeTitle: "🎉Welcome🎉",
            weclomeDescription: "Thank you for visiting my portfolio website. This is where I showcase myself and some of the works I'm most proud of. To easily navigate from the top, click any of the section titles below the main title. To make this website more accessible I've provided English and Spanish translations that can be controlled with the language toggle button.",
            aboutDescription: "I am a first-generation, third-year undergraduate student that the University of Florida who majors in computer science. Some clubs I'm involved in/have been involved in are SHPE, OpenSource, SSD, and SolarGators. My interests are in Software Engineering, UXD, and Frontend and Full-Stack Development. My favorite languages so far are C++ and Go but, after designing this website, I've began developing a love for JavaScript. Academics aside, I enjoy weightlifting, playing volleyball, working on/repairing cars, gaming (mainly 40k SM2 and Overwatch), and spending time with my friends and dogs. I currently work as a server/barista at a local bakery called Uppercrust, located here in Gainesville, and am looking for an internship for Summer 2025.",
            projectsTitle: "Projects",
            photosTitle: "Photo Gallery",
            contactTitle: "Contact Me",
            languageButtonTitle: "Español",
            // contactNamePlaceholder: "Your Name",
            // contactEmailPlaceholder: "Your Email",
            // contactMessagePlaceholder: "Your Message",
            // contactButton: "Send Message",
            navLinks: {
                about: "About Me",
                projects: "Projects",
                photos: "Photos",
                contact: "Contact"
            },
            projects: [
                {link:"https://ezequielmedrano.com", title: "EzequielMedrano.com🖥️", description: "This is my first fully-hosted website that I've been very excited for. In making this website, I developed great knowledge of CSS, HTML, and JS and general web-design. In addition, I found it very fun to be creative and give the website the design and energy I wanted while being mindful of my users. My biggest challenge in making this website was definitely creating the language toggle, not only because difficult for me to physically code but also becuase I needed to triple check all of my Spanish translations." },
                {link:"https://github.com/jbryan2ufl/ChompSort", title: "ChompSort🐊", description: "This was a project I made with two of my friends that simulates the efficiency of 6 different sorting algorithms. Completely Coded in Python, ChompSort aims to allow computer science students to visualize sorting algorithms for academic help but can also be used to identify which sorting algorithm fits the needs of one's application. This project allowed me to gain experience with using GitHub as a project manager, designing an interface, and simulating non-deterministic events. It was also a great opportunity to work with other programmers and learn how to allocate tasks and work with agreed upon deadlines." },
                {link:"https://github.com/ZeekGeeq/minesweeper", title: "Minesweeper In C++💣", description: "This project was my first major C++ project that utilized the SFML framework to acheive an fully-functional and responsive implementation of the classic Minesweeper game. I learned a lot about implementing recursive functions, game loops, and generators. When designing this project, I learned that, while it is not our first thought, it can often be easier to rework an entire section of code instead of adding exceptions to make a bad implementation work. This project was definitely a test of my C++ skills and I'm very pleased with how well it runs and how fun it is to play." }
            ]
        },
        spanish: {
            webpageTitle:"Sitio web del portafolio de Ezequiel Medrano",
            welcomeTitle:"🎉Bienvenidos🎉",
            weclomeDescription:"Gracias por visitar mi sitio web de portafolios. Aquí es donde me muestro y presento algunos de los trabajos de los que estoy más orgulloso. Para navegar fácilmente desde la parte superior, haga clic en cualquiera de los títulos de las secciones debajo del título principal. Para que este sitio web sea más accesible, yo incluyo traducciones al inglés y al español que se pueden controlar con el botón de idioma.",
            aboutTitle: "Sobre mí🐊💻",
            aboutDescription: "Soy un estudiante de tercer año de la University of Florida que estudia ciencia de los computadores. Algunos clubes en los que participo o he participado son SHPE, OpenSource, SSD y SolarGators. Mis intereses son la ingeniería de software, UXD, y el desarrollo frontend y full-stack. Mis lenguajes de programación favoritos hasta ahora son C++ y Go, pero después de diseñar este sitio web, comencé un amor con JavaScript. Dejando de lado lo académico, disfruto levantar pesas, jugar voleibol, trabajar en carros y repararlos, jugar video juegos (principalmente 40k SM2 y Overwatch) y pasar tiempo con mis amigos y perros. Ahorita trabajo como mesero/barista en una panadería local llamada Uppercrust y tambien estoy buscando una pasantía para el verano de 2025.",
            projectsTitle: "Proyectos",
            photosTitle: "Galería de fotos",
            contactTitle: "Contáctame",
            languageButtonTitle: "English",
            // contactNamePlaceholder: "Tu Nombre",
            // contactEmailPlaceholder: "Tu Correo Electrónico",
            // contactMessagePlaceholder: "Tu Mensaje",
            // contactButton: "Enviar Mensaje",
            navLinks: {
                about: "Sobre mí",
                projects: "Proyectos",
                photos: "Fotos",
                contact: "Contacto"
            },
            projects: [
                { link:"https://ezequielmedrano.com",title: "EzequielMedrano.com🖥️", description: "Diseñar este sitio web fue una gran experiencia. Este es el primer sitio web que construí y desplegué. mientras construía esta sitio web, aprendí mucho de JavaScript, HTML, CSS, y diseño web general. Además, fue muy divertido ser creativo y darle al sitio web el diseño y la energía que quería sin dejar de ser consciente de mis usuarios. Mi mayor desafío al diseñar este sitio web fue implementar la traducción del idioma. No por lo difícil que fue codificar, sino porque tuve que traducir mucho Ingles." },
                {link:"https://github.com/jbryan2ufl/ChompSort",title: "ChompSort🐊", description: "Este fue un proyecto que hice con dos amigos que simula la eficiencia de 6 algoritmos de ordenamiento diferentes. Completamente codificado en Python, ChompSort tiene como objetivo permitir que los estudiantes de informática visualicen algoritmos de ordenamiento para obtener ayuda académica, pero también se puede utilizar para identificar qué algoritmo de ordenamiento se adapta a las necesidades de la aplicación de uno. Este proyecto me permitió adquirir experiencia en el uso de GitHub como gerente de proyectos, diseñando una interfaz y simulando eventos no deterministas. También fue una gran oportunidad para trabajar con otros programadores y aprender a asignar tareas y trabajar con plazos acordados." },
                {link:"https://github.com/ZeekGeeq/minesweeper", title: "Minesweeper en C++💣", description: "Este proyecto fue mi primer proyecto importante en C++ que utilizó el marco SFML para lograr una implementación totalmente funcional y responsiva del clásico juego Buscaminas. Aprendí mucho sobre la implementación de funciones recursivas, bucles de juego y generadores. Al diseñar este proyecto, aprendí que, si bien no es nuestra primera idea, a menudo puede ser más fácil rehacer una sección completa de código en lugar de agregar excepciones para hacer que funcione una mala implementación. Este proyecto fue definitivamente una prueba de mis habilidades en C++ y estoy muy satisfecho con lo bien que funciona y lo divertido que es jugarlo." }
            ]
        }
    };

    let isSpanish = false;

    function updateTextContent() {
        const language = isSpanish ? 'spanish' : 'english';
        const content = textContent[language];

        webpageTitle.innerText = content.webpageTitle;
        welcomeTitle.innerText = content.welcomeTitle;
        weclomeDescription.innerText = content.weclomeDescription;
        aboutTitle.innerText = content.aboutTitle;
        aboutDescription.innerText = content.aboutDescription;
        projectsTitle.innerText = content.projectsTitle;
        photosTitle.innerText = content.photosTitle;
        contactTitle.innerText = content.contactTitle;
        languageButtonTitle.innerText = content.languageButtonTitle


        navAbout.innerText = content.navLinks.about;
        navProjects.innerText = content.navLinks.projects;
        navPhotos.innerText = content.navLinks.photos;
        navContact.innerText = content.navLinks.contact;

        projectsContainer.innerHTML = '';
        content.projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-item';
            projectElement.innerHTML = `<h3><a href=${project.link} target = "_blank">${project.title}</a></h3><p>${project.description}</p>`;
            projectsContainer.appendChild(projectElement);
        });
    }

    // Toggle language
    languageToggle.addEventListener('click', () => {
        isSpanish = !isSpanish;
        updateTextContent();
    });

    // Simulate loading time
    setTimeout(() => {
        // Hide loading screen
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.style.display = 'none', 1000);

        // Move profile photo left
        profilePhoto.style.transform = 'translateX(-100px)';

        // Show cascading photos after profile moves
        setTimeout(() => {
            cascadingPhotos.style.opacity = '1';
            cascadingPhotos.querySelectorAll('img').forEach(img => {
                img.style.opacity = '1';
                img.style.transform = 'translateY(0)';
            });
        }, 1000);

        // Fade in sections one by one
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateX(0)';
            }, (index + 1) * 500);
        });
    }, 2500); // Simulate a 2-second loading time

    // Initial text content update
    updateTextContent();
};
