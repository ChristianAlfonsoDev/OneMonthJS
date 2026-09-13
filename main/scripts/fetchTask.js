// const getUser = async () => {
//     try {
//         const apiLink = await fetch("https://jsonplaceholder.typicode.com/users/1")
//         const data = await apiLink.json();

//         console.log(data.name);
//         console.log(data.email);
//         console.log(data.phone);

//     }
//     catch (error) {
//         console.error("Error fetching user data:", error);
//     }
// }

// getUser();



const getJoke = async () => {

    try {

       const apiLink = await fetch("https://official-joke-api.appspot.com/random_joke");
       const data = await apiLink.json();

        console.log(`Setup: ${data.setup}`);
        console.log(`Punchline: ${data.punchline}`);
    }
    catch (error) {

        console.error("Error fetching joke:", error);
    }

};

getJoke();