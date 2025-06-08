function saveState() {
    const items = Array.from(document.querySelectorAll('.item')).map(item => ({
        name: item.querySelector('.item_name p')?.textContent.trim(),
        count: parseInt(item.querySelector('.count_value')?.textContent),
        bought: item.querySelector('.item_name').classList.contains('noneditable')
    }));
    localStorage.setItem('cartItems', JSON.stringify(items));
}

function loadState() {
    const itemsContainer = document.querySelector('.item_container');
    const saved = JSON.parse(localStorage.getItem('cartItems'));
    if (!saved) return;

    // Remove all current items
    document.querySelectorAll('.item').forEach(el => el.remove());

    // Re-create items from saved data
    saved.forEach(({ name, count, bought }) => {
        const itemHTML = `
        <section class="item">
            <div class="item_name${bought ? ' noneditable' : ''}">
                <p>${name}</p>
            </div>
            <div class="amount_control">
                <button class="minus" data-tooltip="Зменшити"${count === 1 ? ' disabled style="opacity: 0.5;"' : ''}>-</button>
                <button class="count_value">${count}</button>
                <button class="plus" data-tooltip="Збільшити">+</button>
            </div>
            <div class="state_indicator">
                <button class="bought">${bought ? 'Не куплено' : 'Куплено'}</button>
                <button class="cancel" data-tooltip="Видалити">x</button>
            </div>
        </section>`;
        itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
    });

    updateStatistics();
}

document.addEventListener('DOMContentLoaded', loadState);
