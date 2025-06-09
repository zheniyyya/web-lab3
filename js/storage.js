function saveState() {
    const items = Array.from(document.querySelectorAll('.item')).map(item => ({
        name: item.querySelector('.item_name p')?.textContent.trim(),
        count: parseInt(item.querySelector('.count_value')?.textContent),
        bought: !item.querySelector('.item_name').classList.contains('noneditable')
    }));
    localStorage.setItem('cartItems', JSON.stringify(items));
}

function loadState() {
    const itemsContainer = document.querySelector('.item_container');
    const saved = JSON.parse(localStorage.getItem('cartItems'));

    if (!saved || saved.length === 0) {
        return false;
    }

    document.querySelectorAll('.item').forEach(el => el.remove());

    saved.forEach(({ name, count, bought }) => {
        const itemHTML = `
        <section class="item">
            <div class="item_name${bought ? '' : ' noneditable'}">
                <p>${name}</p>
            </div>
            <div class="amount_control">
                <button class="minus" data-tooltip="Зменшити">-</button>
                <button class="count_value">${count}</button>
                <button class="plus" data-tooltip="Збільшити">+</button>
            </div>
            <div class="state_indicator">
                <button class="bought">${bought ? 'Куплено' : 'Не куплено'}</button>
                <button class="cancel" data-tooltip="Видалити">x</button>
            </div>
        </section>`;
        itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
    });

    updateStatistics();

    document.querySelectorAll('.item').forEach(item => {
        const nameBlock = item.querySelector('.item_name');
        const isItemBought = !nameBlock.classList.contains('noneditable');
        updateItemBoughtState(item, isItemBought);
        updateMinusButtonStateLogic(item, isItemBought);
    });

    return true;
}

function initializeDefaultItems() {
    const itemsContainer = document.querySelector('.item_container');

    const defaultItems = [
        { name: 'Помідори', count: 2, bought: false },
        { name: 'Печиво', count: 2, bought: true },
        { name: 'Сир', count: 1, bought: true }
    ];

    defaultItems.forEach(({ name, count, bought }) => {
        const itemHTML = `
        <section class="item">
            <div class="item_name${bought ? '' : ' noneditable'}">
                <p>${name}</p>
            </div>
            <div class="amount_control">
                <button class="minus" data-tooltip="Зменшити">-</button>
                <button class="count_value">${count}</button>
                <button class="plus" data-tooltip="Збільшити">+</button>
            </div>
            <div class="state_indicator">
                <button class="bought">${bought ? 'Куплено' : 'Не куплено'}</button>
                <button class="cancel" data-tooltip="Видалити">x</button>
            </div>
        </section>`;
        itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
    });

    updateStatistics();

    document.querySelectorAll('.item').forEach(item => {
        const nameBlock = item.querySelector('.item_name');
        const isItemBought = !nameBlock.classList.contains('noneditable');
        updateItemBoughtState(item, isItemBought);
        updateMinusButtonStateLogic(item, isItemBought);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const hasLoadedState = loadState();
    if (!hasLoadedState) {
        initializeDefaultItems();
    }
});