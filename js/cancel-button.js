
document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.querySelector('.item_container');

    if (itemsContainer) {
        itemsContainer.addEventListener('click', (event) => {

            if (event.target.classList.contains('cancel')) {
                const itemToRemove = event.target.closest('.item');
                if (itemToRemove) {
                    itemToRemove.remove();
                    updateStatistics();
                    saveState();

                }
            }
        });
    }
});