const addItemForm = document.querySelector('.add_item_form');
const itemInput = document.querySelector('.add_item_form .input');
const itemsContainer = document.querySelector('.item_container');

addItemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = itemInput.value.trim();

    if (itemName === '') {
        return;
    }

    const newItemHTML = `
        <section class="item">
            <div class="item_name" contenteditable="true">
                <p>${itemName}</p>
            </div>
            <div class="amount_control">
                <button class="minus" data-tooltip="Зменшити" disabled style="opacity: 0.5;">-</button>
                <button class="count_value">1</button>
                <button class="plus" data-tooltip="Збільшити">+</button>
            </div>
            <div class="state_indicator">
                <button class="bought">Не куплено</button>
                <button class="cancel" data-tooltip="Видалити">x</button>
            </div>
        </section>
    `;

    itemsContainer.insertAdjacentHTML('beforeend', newItemHTML);
    itemInput.value = '';
    itemInput.focus();

    updateStatistics();
    saveState();

});
