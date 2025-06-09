

function updateItemBoughtState(itemElement, isBought) {
    const nameBlock = itemElement.querySelector('.item_name');
    const boughtBtn = itemElement.querySelector('.bought');
    const plusBtn = itemElement.querySelector('.plus');
    const minusBtn = itemElement.querySelector('.minus');
    const cancelBtn = itemElement.querySelector('.cancel');

    if (isBought) {
        nameBlock.classList.remove("noneditable");
        boughtBtn.textContent = "Куплено";

        plusBtn.style.visibility = "visible";
        minusBtn.style.visibility = "visible";
        cancelBtn.style.visibility = "visible";

        minusBtn.disabled = false;
        minusBtn.style.opacity = "1";
    } else {
        nameBlock.classList.add("noneditable");
        boughtBtn.textContent = "Не куплено";

        plusBtn.style.visibility = "hidden";
        minusBtn.style.visibility = "hidden";
        cancelBtn.style.visibility = "hidden";

        minusBtn.disabled = true;
        minusBtn.style.opacity = "0.5";
    }

    updateMinusButtonStateLogic(itemElement, isBought);
}

function updateMinusButtonStateLogic(itemElement, isBought) {
    const minusBtn = itemElement.querySelector('.minus');
    const countValue = itemElement.querySelector('.count_value');
    const currentCount = parseInt(countValue.textContent);

    if (isBought) {
        if (currentCount === 1) {
            minusBtn.disabled = true;
            minusBtn.style.opacity = "0.5";
        } else {
            minusBtn.disabled = false;
            minusBtn.style.opacity = "1";
        }
    } else {
        minusBtn.disabled = true;
        minusBtn.style.opacity = "0.5";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const itemContainer = document.querySelector('.item_container');

    itemContainer.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('plus') || target.classList.contains('minus')) {
            const item = target.closest('.item');
            const nameBlock = item.querySelector('.item_name');
            const isBought = !nameBlock.classList.contains("noneditable");

            if (!isBought) return;

            const countValue = item.querySelector('.count_value');
            let count = parseInt(countValue.textContent);

            if (target.classList.contains('plus')) {
                count++;
            } else if (target.classList.contains('minus') && count > 1) {
                count--;
            }

            countValue.textContent = count;

            updateMinusButtonStateLogic(item, isBought);
            updateStatistics();
            saveState();
            return;
        }

        if (target.classList.contains('bought')) {
            const button = target;
            const itemSection = button.closest('.item')
            const nameBlock = itemSection.querySelector('.item_name');

            const isCurrentlyBought = !nameBlock.classList.contains("noneditable");
            updateItemBoughtState(itemSection, !isCurrentlyBought);

            updateStatistics();
            saveState();
            return;
        }
    });
});
