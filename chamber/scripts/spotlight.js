async function getData() {
    const response = await fetch('../chamber/data/members.json');
    const data = await response.json();

    const randomMembershipNumber = Math.random() < 0.5 ? "2" : "3";

    displayMembers(data.companies, randomMembershipNumber);
}

getData();

function displayMembers(companies, membershipNumber) {
    const filteredCompanies = companies.filter(company => {
        const membershipObj = company.membership[0];
        return membershipObj.hasOwnProperty(membershipNumber);
    });

    const cards = document.querySelector('#members-section');
    cards.innerHTML = ""; 

    filteredCompanies.forEach(company => {
        const membershipLevel = company.membership[0][membershipNumber];

        const card = document.createElement("section");
        card.innerHTML = `
            <h3>${company.company_name}</h3>
            <p>${membershipLevel}</p>
            <img src="${company.image_file}" alt="${company.company_name} height:"30" widht="30">
            <a href="mailto:${company.email_address}" target="_blank">Email: ${company.email_address}</a>
            <p>Phone: ${company.company_phone_number}</p>
            <a href="${company.company_website}" target="_blank">URL: ${company.company_name}</a>
            
        `;
        cards.appendChild(card);
    });
}
