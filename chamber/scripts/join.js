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
    console.table(data.memberships);
    displayMemberships(data.memberships);
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
