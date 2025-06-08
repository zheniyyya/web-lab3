document.addEventListener("DOMContentLoaded", () => {
    // Додаємо CSS-стилі динамічно
    const style = document.createElement("style");
    style.textContent = `
        .edit_input {
            font-size: 16px;
            width: 100%;
            padding: 16px 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline: none;
            transition: border-color 0.2s, box-shadow 0.2s;
        }

        .edit_input:focus {
            border-color: #66afe9;
            box-shadow: 0 0 5px rgba(102, 175, 233, 0.6);
        }
    `;
    document.head.appendChild(style);

    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const nameContainer = item.querySelector(".item_name");
        const nameParagraph = nameContainer.querySelector("p");

        nameContainer.addEventListener("click", () => {
            if (nameContainer.getAttribute("contenteditable") === "false") return;

            const currentName = nameParagraph.textContent.trim();

            const input = document.createElement("input");
            input.type = "text";
            input.value = currentName;
            input.className = "edit_input";

            nameContainer.innerHTML = "";
            nameContainer.appendChild(input);
            input.focus();

            input.addEventListener("blur", () => {
                const newName = input.value.trim() || currentName;

                const newP = document.createElement("p");
                newP.textContent = newName;

                nameContainer.innerHTML = "";
                nameContainer.appendChild(newP);
            });

            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    input.blur();
                }
            });
        });
    });
});
