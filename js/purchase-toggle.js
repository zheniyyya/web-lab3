

document.addEventListener("DOMContentLoaded", () => {
    const itemContainer = document.querySelector('.item_container');

    itemContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('bought')) {
            const button = e.target;
            const itemSection = button.closest('.item');
            const nameBlock = itemSection.querySelector('.item_name');

            const plusBtn = itemSection.querySelector('.plus');
            const minusBtn = itemSection.querySelector('.minus');
            const cancelBtn = itemSection.querySelector('.cancel');

            const isBought = nameBlock.getAttribute("contenteditable") === "false";


            if (!isBought) {
                nameBlock.setAttribute("contenteditable", "false");
                plusBtn.style.visibility = "hidden";
                minusBtn.style.visibility = "hidden";
                cancelBtn.style.visibility = "hidden";
                button.textContent = "Не куплено";


            } else {
                nameBlock.setAttribute("contenteditable", "true");
                plusBtn.style.visibility = "visible";
                minusBtn.style.visibility = "visible";
                cancelBtn.style.visibility = "visible";
                button.textContent = "Куплено";
            }
        }
    });


});
