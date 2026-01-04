export function loadHome() {
    const content = document.getElementById('content');
        // Clear existing content
        content.textContent = '';

        // Create elements
        const bgImage = document.createElement('img');
        bgImage.src = 'food.jpg';
        bgImage.alt = 'Delecious Food';

        const mainHeading = document.createElement('div');
        mainHeading.textContent = 'Food from the Eeast';
        mainHeading.className = 'heroHeading';

        const topContent = document.createElement('div');
        topContent.className = 'topContent';
        topContent.append(bgImage, mainHeading);

        const scndHeading = document.createElement('div');
        scndHeading.textContent = 'Signature Dishes';

        const dish1 = document.createElement('div');
        const dish1H = document.createElement('h4');
        const dish1P = document.createElement('p');
        dish1H.textContent = 'Lahori Biryani'
        dish1P.textContent = 'Aromatic basmati rice layered with tender spiced chicken, caramelized onions, and saffron. Slow-cooked to perfection in a sealed pot, served with cooling raita and tangy pickles.';
        dish1.append(dish1H, dish1P);

        const dish2 = document.createElement('div');
        const dish2H = document.createElement('h4');
        const dish2P = document.createElement('p');
        dish2H.textContent = 'Karachi Nihari';
        dish2P.textContent = 'Slow-simmered beef shank in a rich, spiced curry with bone marrow. Garnished with fresh ginger, green chilies, and cilantro. Best enjoyed with fluffy naan bread.';
        dish2.append(dish2H, dish2P);

        const dish3 = document.createElement('div');
        const dish3H = document.createElement('h4');
        const dish3P = document.createElement('p');
        dish3H.textContent = 'Shahi Kheer';
        dish3P.textContent = 'Creamy rice pudding infused with cardamom, saffron, and rose water. Topped with pistachios, almonds, and edible silver leaf. A royal dessert fit for celebration.';
        dish3.append(dish3H, dish3P);

        const cards = document.createElement('div');
        cards.append(dish1, dish2, dish3);

        const midContent = document.createElement('div');
        midContent.className = 'midContent';
        midContent.append(scndHeading, cards)

        const footer = document.createElement('div');
        footer.textContent = 'ZAIQA TRADEMARK @ 2025'

        // Append to DOM
        content.appendChild(topContent);
        content.appendChild(midContent);
        content.appendChild(footer);
}

/* Key methods:
  - document.createElement() - make new elements
  - .textContent - add text
  - .appendChild() - add to parent
  - .className / .classList.add() - add CSS classes

  That's the DOM manipulation practice TOP wants you to get! */