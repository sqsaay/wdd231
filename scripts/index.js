const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const navBar = document.querySelector('#nav-bar');

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const sectionClass = document.querySelector('.button-container');
if (sectionClass) {
    const buttonData = [
        { label: 'All Courses', id: 'btn-1' },
        { label: 'WDD Courses', id: 'btn-2' },
        { label: 'CSE Courses', id: 'btn-3' }
    ];

    buttonData.forEach(data => {
        const newButton = document.createElement('button');

        newButton.textContent = data.label;
        newButton.id = data.id;

        sectionClass.appendChild(newButton);
    });
}

function deleteCards(){
    document.querySelector('.courses-container').innerHTML = "";
}

//Buttons
const allCoursesBtn = document.querySelector('#btn-1');
const wddCoursesBtn = document.querySelector('#btn-2');
const cseCoursesBtn = document.querySelector('#btn-3');

createCoursesCard(courses, "all");
createCreditParagraph(courses);

allCoursesBtn.addEventListener("click", () => {
    createCoursesCard(courses, "all");
    createCreditParagraph(courses);
});

wddCoursesBtn.addEventListener("click", () => {
    createCoursesCard(courses, "wdd");
    const wddCards = courses.filter(course => course.subject === "WDD");
    createCreditParagraph(wddCards);
});

cseCoursesBtn.addEventListener("click", () => {
    createCoursesCard(courses, "cse");
    const cseCards = courses.filter(course => course.subject === "CSE");
    createCreditParagraph(cseCards);
});

//Create Courses Cards
function createCoursesCard(filteredCards, type) {
    const container = document.querySelector('.courses-container');
    container.innerHTML = "";

    courses.forEach(course => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        name.textContent = `${course.subject} ${course.number}`;

        if (type === "all") {
            card.style.backgroundColor = "var(--secondary-color)"; 
        } else if (type === "wdd") {
            card.style.backgroundColor =
                course.subject === "WDD" ? "var(--secondary-color)" : "var(--tertiary-color)"; 
        } else if (type === "cse") {
            card.style.backgroundColor =
                course.subject === "CSE" ? "var(--secondary-color)" : "var(--tertiary-color)"; 
        }

        card.appendChild(name);
        container.appendChild(card);
    });
}

// Credits function
function createCreditParagraph(filteredCards) {
    let totalCredits = 0;
    filteredCards.forEach(course => {
        if (course.completed === true) {
            totalCredits += course.credits;
        }
    });

    const container = document.querySelector('.credits-container');
    container.innerHTML = ""; 
    const content = document.createElement("p");
    content.textContent = `The total number of credits listed is ${totalCredits}`;
    container.appendChild(content);
}
