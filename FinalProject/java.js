// Example program data (in a real-world scenario, this could be fetched from an API)
const programsData = [
    {
        school: "CUNY School of Design",
        program: "Bachelor of Digital Design",
        degree: "Bachelor",
        borough: "manhattan",
        discipline: "digital-design",
        description: "Learn to design interactive digital experiences.",
        image: "program-image-1.jpg",
        link: "https://www.cuny.edu/design/bachelor-digital-design"
    },
    {
        school: "Brooklyn College",
        program: "Associate in Animation",
        degree: "Associate",
        borough: "brooklyn",
        discipline: "animation",
        description: "Create stunning animations and visual effects.",
        image: "program-image-2.jpg",
        link: "https://www.brooklyn.edu/animation/associate"
    },
    {
        school: "City Tech",
        program: "Bachelor of Industrial Design",
        degree: "Bachelor",
        borough: "brooklyn",
        discipline: "industrial-design",
        description: "Design innovative consumer products and systems.",
        image: "program-image-3.jpg",
        link: "https://www.citytech.edu/industrial-design/bachelor"
    }
    // More program objects can be added
];

// Function to filter and display the program cards
function filterPrograms() {
    const borough = document.getElementById("borough").value;
    const discipline = document.getElementById("discipline").value;
    const degree = document.getElementById("degree").value;

    // Filter programs based on selected options
    const filteredPrograms = programsData.filter(program => {
        return (
            (borough === "all" || program.borough === borough) &&
            (discipline === "all" || program.discipline === discipline) &&
            (degree === "all" || program.degree.toLowerCase() === degree.toLowerCase())
        );
    });

    // Clear existing cards
    const programsGrid = document.getElementById("programs-grid");
    programsGrid.innerHTML = "";

    // Generate and append the filtered program cards
    filteredPrograms.forEach(program => {
        const card = document.createElement("div");
        card.classList.add("program-card");
        card.innerHTML = `
            <img src="${program.image}" alt="${program.program} image">
            <h3>${program.school}</h3>
            <h4>${program.program}</h4>
            <p>${program.degree} in ${program.discipline}</p>
            <p>${program.description}</p>
            <a href="${program.link}" target="_blank">Learn More</a>
        `;
        programsGrid.appendChild(card);
    });
}

// Event listener for the form submission
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the page from refreshing
    filterPrograms();  // Call the function to filter programs
});

// Initial loading of programs
filterPrograms();
