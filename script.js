/* ------------------------------
   GET ELEMENTS
-------------------------------- */

const gardenItems =
    document.querySelectorAll(".garden-item");

const quoteCard =
    document.getElementById("quoteCard");

const quoteText =
    document.getElementById("quoteText");

const closeButton =
    document.getElementById("closeButton");

const frog =
    document.getElementById("frog");


/* ------------------------------
   NORMAL GARDEN ITEMS
-------------------------------- */

gardenItems.forEach(item => {

    item.addEventListener("click", () => {

        /* frog has its own behaviour */

        if (item.id === "frog") {
            return;
        }

        const message =
            item.getAttribute("data-message");

        showQuote(message);

    });

});


/* ------------------------------
   SHOW QUOTE
-------------------------------- */

function showQuote(message) {

    quoteText.textContent = message;

    quoteCard.classList.add("show");

}


/* ------------------------------
   CLOSE QUOTE
-------------------------------- */

closeButton.addEventListener("click", () => {

    quoteCard.classList.remove("show");

});


/* ------------------------------
   ESCAPE KEY CLOSES QUOTE
-------------------------------- */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        quoteCard.classList.remove("show");

    }

});


/* ------------------------------
   SECRET FROG
-------------------------------- */

let frogClicks = 0;


const frogMessages = [

    "oh. you found me.",

    "hello 🐸",

    "why are you still clicking me",

    "there are literally flowers everywhere",

    "please go look at the flowers 😭",

    "seriously.",

    "fine. i like you too."

];


frog.addEventListener("click", () => {

    const message =
        frogMessages[
            Math.min(
                frogClicks,
                frogMessages.length - 1
            )
        ];

    showQuote(message);

    frogClicks++;

});