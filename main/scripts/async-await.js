let userInput = document.querySelector("#input");
let btn = document.querySelector("#btn");


btn.addEventListener("click",()=> {
    // console.log("you clicked the button")
    let userInputValue = userInput.value;

    if(userInputValue === "") {
        console.log("Please enter a value");
        return;
    }

    function getData(){
        return new Promise((resolve,reject)=>{

            setTimeout(()=> {

                if(userInputValue === "Lyca") {
                    resolve("You are a lalabs user");
                } else {
                    reject("You are not a lalabs user");
                }
            },2000)

        })
    }


    async function getUserData(){
        try {
            let result = await getData();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    getUserData();
    



}) 

