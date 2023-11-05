//функция просмотра переднего вида 
function displayFrontImages(shirts) {
    const tshirtContainer = document.getElementById("tshirt-container");

    shirts.forEach((shirt, index) => {
        for (const color in shirt.colors) {
            const tshirtDiv = document.createElement("div");
            tshirtDiv.className = "tshirt";

            //добавляем элемент img 
            const frontImage = shirt.colors[color].front;
            const frontImageElement = document.createElement("img");
            frontImageElement.src = frontImage;
            frontImageElement.alt = `Front - ${color}`;
            tshirtDiv.appendChild(frontImageElement);

            //добавляем название майки
            const h2 = document.createElement("h2");
            h2.textContent = shirt.name;
            tshirtDiv.appendChild(h2);

            //добавляем описание майки
            const pDescription = document.createElement("p");
            pDescription.textContent = shirt.description;
            tshirtDiv.appendChild(pDescription);

            //добавляем стоимость майки
            const pPrice = document.createElement("p");
            pPrice.textContent = `Price: ${shirt.price}`;
            tshirtDiv.appendChild(pPrice);

            //добавляем список доступных цветов
            const colorsList = document.createElement("ul");
            colorsList.className = "colors-list";

            //добавляем элемент с текстом
            const availableColorsLabel = document.createElement("p");
            const colors = Object.keys(shirt.colors).join(", ");
            availableColorsLabel.textContent = "Available colors: " + colors;
            colorsList.appendChild(availableColorsLabel);
            tshirtDiv.appendChild(colorsList);

            //добавляем кнопку
            const seePageButton = document.createElement("button");
            seePageButton.innerText = "See Page";
            tshirtDiv.appendChild(seePageButton);

            //обработчик события для кнопки"
            seePageButton.addEventListener("click", () => {
                //сохраняем выбранный индекс майки в localStorage
                localStorage.setItem("selectedShirtIndex", index);

                //переходим на другую страницу
                window.location.href = "details.html";
            });

            //добавляем майку в контейнер
            tshirtContainer.appendChild(tshirtDiv);

            break; 
        }
    });
}

//ожидание загрузки страницы и данных из shirts.js
document.addEventListener("DOMContentLoaded", () => {
    displayFrontImages(shirts);
});