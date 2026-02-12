const cards = document.querySelector('#membership-cards');
const btnNp = document.querySelector('#btn-np');
const btnBronze = document.querySelector("#btn-bronze");
const btnSilver = document.querySelector("#btn-silver");
const btnGold = document.querySelector("#btn-gold");
const modal = document.querySelector(".modal");

async function getMemberships() {
    const response = await fetch('../chamber/data/memberships.json');
    const data = await response.json();
    return data.memberships;
}

const displayMemberships = (memberships) => {
    memberships.forEach(member => {
        const card = document.createElement("section");
        const mName = document.createElement("h3");
        const mButton = document.createElement("button");

        mName.textContent = member.membership_type;
        mButton.textContent = "Learn More";
        const firstWord = member.membership_type.split(" ")[0].toLowerCase();
        card.id = `sec-${firstWord}`;
        mButton.id = `btn-${firstWord}`;

        card.append(mName, mButton);
        cards.appendChild(card);

        //Event listener for each button
        if (mButton.id === "btn-np") {
            mButton.addEventListener("click", () => {
                modal.showModal();
            });
        } else if (mButton.id === "btn-bronze") {
            mButton.addEventListener("click", () => {
                getMembership()[1];
                console.log(`Membership Bronze: ${member.membership_type}`);
            });
        } else if (mButton.id === "btn-silver") {
            mButton.addEventListener("click", () => {
                getMembership()[1];
                console.log(`Membership silver: ${member.membership_type}`);
            });
        } else if (mButton.id === "btn-gold") {
            mButton.addEventListener("click", () => {
                getMembership()[2];
                console.log(`Membership gold: ${member.membership_type}`);
            });
        }
    });
};

// Load and render membership options
const memberships = await getMemberships();
displayMemberships(memberships);
console.log(memberships[0].eligibility);

// Modals


function modalContent(memberships, index){
    const modalTitle = document.querySelector("modal-title");
    const modalContent = document.querySelector("modal-content");
    const modalCloseBtn = document.querySelector("close-button");
    memberships.forEach(member => {
        modalTitle.textContent = member[index].membership_type;
        modalContent.textContent = `<strong>Eligibility</strong>: ${member[index].eligibility}<br>
        <strong>Fee</strong>: ${member[index].fee}<br>
        <strong>Perks</strong>: ${member[index].eligibility}<br>
        `;

        modal.showModal();

        modalCloseBtn.addEventListener("click", ( )=>{
            modal.closeModal();
        });
        });
   
}
