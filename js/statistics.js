function updateStatistics() {
    const availableItemsContainer = document.querySelector('.available_items');
    const acquiredItemsContainer = document.querySelector('.acquired_item');

    availableItemsContainer.innerHTML = '';
    acquiredItemsContainer.innerHTML = '';

    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const name = item.querySelector('.item_name p')?.textContent.trim();
        const count = parseInt(item.querySelector('.count_value')?.textContent.trim());
        const isBought = item.querySelector('.bought').textContent.trim() === "Не куплено";

        const span = document.createElement('span');
        span.className = 'display_item';
        span.innerHTML = `
            ${name}
            <span class="amount">${count}</span>
        `;

        if (isBought) {
            acquiredItemsContainer.appendChild(span);
        } else {
            availableItemsContainer.appendChild(span);
        }
    });
}
