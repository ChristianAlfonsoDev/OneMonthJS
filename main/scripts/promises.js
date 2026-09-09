const isDawgWalked = () => {

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("you resolved it ")
    }, 2000)
  });
}

const isCatWalked = () => {

  return new Promise((resolve,reject)=> {
    setTimeout(()=>{

      const guessIt = false;
      
      if(guessIt) {
         resolve("yes its done ")
      } else {
         reject("ops")  
      }
    },2000)
  })
}


isDawgWalked().then(dog => {console.log(dog); return isCatWalked()})
              .then(cat => {console.log(cat)})
              .catch(error => {console.log(error)})