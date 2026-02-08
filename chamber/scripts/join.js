const cards = document.querySelector('#membership-cards');
const buttonData = [
    { label: 'np', class: 'btn-np' },
    { label: 'bronze', class: 'btn-bronze' },
    { label: 'silver', class: 'btn-silver' },
    { label: 'gold', class: 'btn-gold' }
];

async function getMembership() {
    const response = await fetch('../chamber/data/memberships.json');
    const data = await response.json();
    displayMemberships(data.memberships);
    return data.memberships;
}

getMembership();
const displayMemberships = (memberships) => {
    memberships.forEach(member => {
        const card = document.createElement("section");
        const mName = document.createElement("h3");
        const mButton = document.createElement("button");

        mName.textContent = member.membership_type;
        mButton.textContent = "Learn More";
        const firstWord = member.membership_type.split(" ")[0].toLowerCase();
        mButton.id = `btn-${firstWord}`;

        card.appendChild(mName);
        card.appendChild(mButton);

        cards.appendChild(card);

    });
};



/*Modals*/
const modalNp = document.createElement("dialog");
modalNp.id = "modalNp";
function createModals(modals) {
    
    modals.forEach(data => {
    const title = document.createElement("h2");
    const eligibility = document.createElement("p");
    const fee = document.createElement("p");
    const perks = document.createElement("ul");
    const closeBtn = document.createElement("button");

        title.textContent = `${membership_type}`;
        eligibility.textContent = `Fee: ${eligibility}`;
        fee.textContent = `Fee: ${fee}`;
        closeBtn.id = "closeModal";
        closeBtn.textContent = "close";

        closeBtn.addEventListener("click", ()=>{
            modalNp.close();
        });
        modalNp.appendChild(title);
        modalNp.appendChild(eligibility);
        modalNp.appendChild(fee);
        modalNp.appendChild(closeBtn);
    });
}

    const dataMembership = getMembership();
    create(dataMembership);
    console.log(dataMembership);

    function create (members){
        members.forEach( member =>{
            console.log(member[0])
        });

    }





