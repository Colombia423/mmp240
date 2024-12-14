// Program data for each borough
const programsData = {
    manhattan: [
        {
            school: "CUNY School of Design",
            program: "Bachelor of Digital Design",
            degree: "Bachelor",
            discipline: "digital-design",
            description: "Learn to design interactive digital experiences.",
            image: "program-image-1.jpg",
            link: "https://www.cuny.edu/design/bachelor-digital-design"
        },
        {
            school: "Parsons School of Design",
            program: "Associate in Animation",
            degree: "Associate",
            discipline: "animation",
            description: "Create stunning animations and visual effects.",
            image: "program-image-2.jpg",
            link: "https://www.parsons.edu/animation/associate"
        }
    ],
    brooklyn: [
        {
            school: "Brooklyn College",
            program: "Bachelor of Industrial Design",
            degree: "Bachelor",
            discipline: "industrial-design",
            description: "Design innovative consumer products and systems.",
            image: "program-image-3.jpg",
            link: "https://www.brooklyn.edu/industrial-design/bachelor"
        }
    ],
    queens: [
        {
            school: "Queens College",
            program: "Associate in Digital Design",
            degree: "Associate",
            discipline: "digital-design",
            description: "Master the fundamentals of digital design.",
            image: "program-image-4.jpg",
            link: "https://www.qc.edu/digital-design/associate"
        }
    ]
};

// Function to display programs for a specific borough
function displayPrograms(borough) {
    const programsGrid = document.getElementById("programs-grid");
    programsGrid.innerHTML = ""; // Clear the grid

    const filteredPrograms = programsData[borough] || [];
    filteredPrograms.forEach(program => {
        const card = document.createElement("div");
        card.classList.add("program-card");
        card.innerHTML = `
            <img src="${program.image}" alt="${program.program}">
            <h3>${program.school}</h3>
            <h4>${program.program}</h4>
            <p>${program.degree} in ${program.discipline}</p>
            <p>${program.description}</p>
            <a href="${program.link}" target="_blank">Learn More</a>
        `;
        programsGrid.appendChild(card);
    });
}

// Display programs based on the page title
const borough = document.title.toLowerCase().split(' ')[4];  // Extract borough name from title
displayPrograms(borough);
