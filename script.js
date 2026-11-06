
async function loadWebsiteContent() {
    try {
        const response = await fetch('/content/site.json');

        if (!response.ok) {
            throw new Error('Could not load website content');
        }

        const data = await response.json();

        // Business information
        document.getElementById('business-name').textContent =
            data.businessName;

        document.getElementById('introduction').textContent =
            data.introduction;

        // Services
        const servicesContainer = document.getElementById('services');

        data.services.forEach(service => {
            const card = document.createElement('article');

            const name = document.createElement('h3');
            name.textContent = service.name;

            const description = document.createElement('p');
            description.textContent = service.description;

            const price = document.createElement('p');
            price.textContent = `${service.price} Kč`;

            card.append(name, description, price);

            servicesContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Website loading error:', error);
    }
}

loadWebsiteContent();
