fetchData();

async function fetchData() {

    const img = document.querySelector("#image");
    const statusMessage = document.querySelector("#name");


    try {



        let pokeSearch = document.querySelector("#input").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`);

        if(pokeSearch === ""){
            statusMessage.textContent = "Please enter a Pokemon name!";
            statusMessage.style.color = "red";
            return;
        }
   

        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const pokemonImage = data.sprites.front_default;

        statusMessage.textContent = `Loading ${pokeSearch}...`;


        setTimeout(() => {
            img.src = pokemonImage;
            img.style.display = "block";3
            statusMessage.textContent = "";

        },3000);

    }


    catch(error){
        console.log(error);

        if(statusMessage)

            setTimeout(() => {
                statusMessage.textContent = "Loading...";
                statusMessage.style.color = "black";
            }, 3000);

            setTimeout(() => {
                statusMessage.textContent = "Pokemon not found!";
                statusMessage.style.color = "red";
            }, 4000);
           
        }

    }



