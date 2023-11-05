//функция для отображения деталей выбранной майки
function displayDetails() {
    const detailsContainer = document.getElementById("details-container");

    //получаем выбранный индекс из localStorage
    const selectedShirtIndex = localStorage.getItem("selectedShirtIndex");

    //получаем данные о выбранной майке из массива shirts
    const selectedShirt = shirts[selectedShirtIndex];
    const shirtDiv = document.createElement("div");
    shirtDiv.className = "tshirt";

    //добавляем название майки
    const h2 = document.createElement("h2");
    h2.textContent = selectedShirt.name;
    shirtDiv.appendChild(h2);

    //добавляем изображение для переднего вида 
    const frontImage = selectedShirt.colors.white.front;
    const frontImageElement = document.createElement("img");
    frontImageElement.src = frontImage;
    frontImageElement.alt = "Front - White";
    shirtDiv.appendChild(frontImageElement);

    //добавляем стоимость майки
    const pPrice = document.createElement("p");
    pPrice.textContent = `Price: ${selectedShirt.price}`;
    pPrice.id = "price";
    shirtDiv.appendChild(pPrice);

    //добавляем описание майки
    const pDescription = document.createElement("p");
    pDescription.textContent = selectedShirt.description;
    shirtDiv.appendChild(pDescription);
    shirtDiv.appendChild(document.createElement("br"));

    //создаем контейнер для кнопок выбора цвета
    const controlButtonsContainer = document.getElementById("buttonsContainer");
    const colorLabel = document.createTextNode("Color:  ");
    controlButtonsContainer.appendChild(colorLabel);

    let selectedColor = "white";

    //добавляем кнопки для каждого доступного цвета майки
    for (const color in selectedShirt.colors) {
        const colorButton = document.createElement("button");
        colorButton.innerText = color;
        colorButton.style.backgroundColor = color; //установка фонового цвета кнопки
        colorButton.addEventListener("click", () => {
            //при нажатии на кнопку меняем отображаемый цвет майки
            selectedColor = color;
            frontImageElement.src = selectedShirt.colors[color].front;
            frontImageElement.alt = `Front - ${color}`;
        });
        controlButtonsContainer.appendChild(colorButton);
    }
    controlButtonsContainer.appendChild(document.createElement("br"));

    //добавляем кнопки для переключения между видами
    const frontButton = document.createElement("button");
    frontButton.innerText = "Front";

    frontButton.style.backgroundColor = selectedColor; //установка фонового цвета кнопки
    frontButton.addEventListener("click", () => {
        frontImageElement.src = selectedShirt.colors[selectedColor].front;
        frontImageElement.alt = `Front - ${selectedColor}`;
    });
    controlButtonsContainer.appendChild(document.createElement("br"));
    const sideLabel = document.createTextNode("Side:   ");
    controlButtonsContainer.appendChild(sideLabel);
    controlButtonsContainer.appendChild(frontButton);

    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.style.backgroundColor = selectedColor; //установка фонового цвета кнопки
    backButton.addEventListener("click", () => {
        frontImageElement.src = selectedShirt.colors[selectedColor].back;
        frontImageElement.alt = `Back - ${selectedColor}`;
    });
    controlButtonsContainer.appendChild(backButton);

    //добавляем контейнер с майками
    shirtDiv.appendChild(controlButtonsContainer);

    //добавляем контейнер с деталями майки
    detailsContainer.appendChild(shirtDiv);
}

//ожидание загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    displayDetails();
});