document.addEventListener('DOMContentLoaded', () => {
    const factDisplay = document.getElementById('factDisplay');
    const generateBtn = document.getElementById('generateBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');

    const facts = {
        basketball: [
            "I practice basketball shots for at least an hour every day",
            "My favorite basketball move is the crossover dribble",
            "I've been playing basketball since I was 12 years old"
        ],
        singing: [
            "I love performing karaoke with friends",
            "I practice vocal exercises daily",
            "My favorite genre to sing is pop music"
        ],
        fashion: [
            "I enjoy creating unique outfit combinations",
            "I follow the latest fashion trends on social media",
            "I love mixing vintage and modern fashion styles"
        ]
    };

    let currentCategory = 'basketball';

    function generateFact(category) {
        const categoryFacts = facts[category];
        const randomIndex = Math.floor(Math.random() * categoryFacts.length);
        factDisplay.textContent = categoryFacts[randomIndex];
    }

    generateBtn.addEventListener('click', () => {
        generateFact(currentCategory);
    });

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentCategory = e.target.dataset.category;
            generateFact(currentCategory);
        });
    });
});
