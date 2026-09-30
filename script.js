document.addEventListener("DOMContentLoaded", function () {

    const gardenItems = document.querySelectorAll(".garden-item");
    const overlay = document.getElementById("overlay");
    const quoteText = document.getElementById("quoteText");
    const closeButton = document.getElementById("closeButton");

    console.log("Garden loaded!");
    console.log("Clickable items found:", gardenItems.length);


    // CLICK GARDEN ITEMS

    gardenItems.forEach(function (item) {

        item.addEventListener("click", function (event) {

            event.stopPropagation();

            const message = item.getAttribute("data-message");

            console.log("Clicked!", message);

            quoteText.textContent = message;

            overlay.classList.add("show");

        });

    });


    // CLOSE BUTTON

    closeButton.addEventListener("click", function () {

        overlay.classList.remove("show");

    });


    // CLICK OUTSIDE CARD

    overlay.addEventListener("click", function (event) {

        if (event.target === overlay) {

            overlay.classList.remove("show");

        }

    });


    // ESCAPE KEY

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            overlay.classList.remove("show");

        }

    });

});