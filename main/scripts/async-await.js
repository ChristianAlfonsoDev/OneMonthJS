
let userInput = document.querySelector("#input");
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");

btn.addEventListener("click", () => {

    let userInputValue = userInput.value;

    if (userInputValue === "") {
        alert("Please enter a value");
        return;
    }

    function getData() {

        return new Promise((resolve, reject) => {

            display.innerHTML = "Please wait while we check your data...";

            setTimeout(() => {

                if (userInputValue.toLowerCase() === "lyca") {
                    resolve("Hello Mahal ko!! ❤️");
                } else {
                    reject("You are not my mahal ko!! 😭");
                }

            }, 2000);
        });
    }

    async function getUserData() {

        try {

            let result = await getData();
            display.innerHTML = result;

        } catch (error) {

            display.innerHTML = error;

        }
    }

    getUserData();
});
