//Fetch and await/sync function
const cards = document.querySelector('#directory-container');

async function getData() {
    const response = await fetch('../chamber/data/members.json');
    const data = await response.json();
    displayCompanies(data.companies);

}
getData();

const displayCompanies = (companies) => {
    companies.forEach(company => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const portrait = document.createElement("img");
        const url = document.createElement("a");
        const address = document.createElement("p");
        const emailAddress = document.createElement("a");

        name.textContent = `${company.company_name}`;
        portrait.setAttribute('src', company.image_file);
        portrait.setAttribute("alt", `${company.company_name} - Guatemala Company`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "150px");
        portrait.setAttribute("height", "auto");
        url.innerHTML = `${company.company_name}`;
        url.setAttribute("href", `${company.company_website}`);
        emailAddress.innerHTML = `${company.email_address}`;
        emailAddress.setAttribute("href", `mailto:${company.email_address}`);

        company.company_address.forEach(add => {
            address.textContent = `${add.street_and_number}, zona ${add.zone}, ${add.city}`;
        })

        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(emailAddress);
        card.appendChild(url);

        cards.appendChild(card);
    });

}

