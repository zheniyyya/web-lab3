document.addEventListener("DOMContentLoaded", () => {
    const itemContainer = document.querySelector('.item_container');

    itemContainer.addEventListener('click', (e) => {
        const target = e.target;

        if (!target.classList.contains('plus') && !target.classList.contains('minus')) return;

        const item = target.closest('.item');
        const nameBlock = item.querySelector('.item_name');
        const isBought = nameBlock.classList.contains("noneditable");

        if (isBought) return;

        const countValue = item.querySelector('.count_value');
        let count = parseInt(countValue.textContent);

        if (target.classList.contains('plus')) {
            count++;
        } else if (target.classList.contains('minus') && count > 1) {
            count--;
        }

        countValue.textContent = count;

        const minusBtn = item.querySelector('.minus');
        if (count === 1) {
            minusBtn.style.opacity = "0.5";
            minusBtn.disabled = true;
        } else {
            minusBtn.style.opacity = "1";
            minusBtn.disabled = false;
        }
    });

    // при завантаженні оновлюємо усі "-" кнопки
    const allItems = document.querySelectorAll('.item');
    allItems.forEach(item => {
        const countValue = item.querySelector('.count_value');
        const minusBtn = item.querySelector('.minus');
        const count = parseInt(countValue.textContent);

        if (count === 1) {
            minusBtn.style.opacity = "0.5";
            minusBtn.disabled = true;
        } else {
            minusBtn.style.opacity = "1";
            minusBtn.disabled = false;
        }
    });
});
