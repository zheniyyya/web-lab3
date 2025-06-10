
function initializeItemButtons(item) {
    const nameBlock = item.querySelector('.item_name');
    const boughtBtn = item.querySelector('.bought');
    const plusBtn = item.querySelector('.plus');
    const minusBtn = item.querySelector('.minus');
    const cancelBtn = item.querySelector('.cancel');

    const isBought = nameBlock.classList.contains("noneditable");

    if (isBought) {
        plusBtn.style.visibility = "hidden";
        minusBtn.style.visibility = "hidden";
        cancelBtn.style.visibility = "hidden";
        boughtBtn.textContent = "Не куплено";
    } else {
        plusBtn.style.visibility = "visible";
        minusBtn.style.visibility = "visible";
        cancelBtn.style.visibility = "visible";
        boughtBtn.textContent = "Куплено";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const itemContainer = document.querySelector('.item_container');


    const allItems = itemContainer.querySelectorAll('.item');
    allItems.forEach(initializeItemButtons);

    itemContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('bought')) {
            const button = e.target;
            const itemSection = button.closest('.item');
            const nameBlock = itemSection.querySelector('.item_name');

            const plusBtn = itemSection.querySelector('.plus');
            const minusBtn = itemSection.querySelector('.minus');
            const cancelBtn = itemSection.querySelector('.cancel');

            const isCurrentlyBought = nameBlock.classList.contains("noneditable");

            if (!isCurrentlyBought) {
                nameBlock.classList.add("noneditable");
                plusBtn.style.visibility = "hidden";
                minusBtn.style.visibility = "hidden";
                cancelBtn.style.visibility = "hidden";
                button.textContent = "Не куплено";
            } else {
                nameBlock.classList.remove("noneditable");
                plusBtn.style.visibility = "visible";
                minusBtn.style.visibility = "visible";
                cancelBtn.style.visibility = "visible";
                button.textContent = "Куплено";
            }
            updateStatistics();
        }
    });
});