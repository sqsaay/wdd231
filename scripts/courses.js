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
        { label: 'All Courses', class: 'btn-1' },
        { label: 'WDD Courses', class: 'btn-2' },
        { label: 'CSE Courses', class: 'btn-3' }
    ];

    buttonData.forEach(data => {
        const newButton = document.createElement('button');

        newButton.textContent = data.label;
        newButton.classList.add(data.class);

        sectionClass.appendChild(newButton);
    });
}

//Buttons
const allCoursesBtn = document.querySelector('.btn-1');
const wddCoursesBtn = document.querySelector('.btn-2');
const cseCoursesBtn = document.querySelector('.btn-3');
const courseDetails = document.querySelector('#course-details');

createCoursesCard(courses, "all");
createCreditParagraph(courses);

allCoursesBtn.addEventListener("click", () => {
    displayCourseDetails(courses);
    
});

wddCoursesBtn.addEventListener("click", () => {
    const wddCards = courses.filter(course => course.subject === "WDD");
    createCoursesCard(wddCards, "wdd");
    createCreditParagraph(wddCards);
    allCoursesBtn.removeAttribute('id');
    cseCoursesBtn.removeAttribute('id');
    wddCoursesBtn.setAttribute('id','active_btn');
    displayCourseDetails(courses);
});

cseCoursesBtn.addEventListener("click", () => {
    const cseCards = courses.filter(course => course.subject === "CSE");
    createCoursesCard(cseCards,"cse");
    createCreditParagraph(cseCards);
    allCoursesBtn.removeAttribute('id');
    wddCoursesBtn.removeAttribute('id');
    cseCoursesBtn.setAttribute('id','active_btn'); 
    courseDetails.showModal(displayCourseDetails());

});

//Create Courses Cards
function createCoursesCard(filteredCards, type) {
    const container = document.querySelector('.courses-container');
    container.innerHTML = "";

    filteredCards.forEach(course => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        name.textContent = `${course.subject} ${course.number}`;


        if (course.completed === true){
            if (type === "cse" ){
                card.style.backgroundColor = "var(--secondary-accent)";
                card.style.color = "var(--secondary-color)";
                name.textContent = `✅ ${course.subject} ${course.number}`;
            }
            else if (type === "wdd" ){
                card.style.backgroundColor = "var(--secondary-accent)";
                card.style.color = "var(--secondary-color)";
                name.textContent = `✅ ${course.subject} ${course.number}`;

            }
            else if(type == "all"){
                card.style.backgroundColor = "var(--secondary-accent)";
                card.style.color = "var(--secondary-color)";
                name.textContent = `✅ ${course.subject} ${course.number}`;
            }

        }
      
        card.appendChild(name);
        container.appendChild(card);
    });
}

// Credits function
function createCreditParagraph(filteredCards) {
    const totalCredits = filteredCards.reduce((sum, course) => sum + course.credits, 0);

    const container = document.querySelector('.credits-container');
    container.innerHTML = ""; 
    const content = document.createElement("p");
    content.textContent = `The total number of credits listed is ${totalCredits}`;
    container.appendChild(content);
}

//Modal #course-details

function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}