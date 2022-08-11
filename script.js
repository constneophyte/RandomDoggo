const dogImageDiv = document.getElementById('dogImage')
   const getnewDog = document.getElementById('getnewDog')
   
   const getNewdog = () => {
   fetch('https://dog.ceo/api/breeds/image/random') 
   .then(response => response.json())
   .then(json => {
    
     dogImageDiv.innerHTML = `<img src ="${json.message}" id = "apiDog" />`
     })
   }
   
   getnewDog.onclick = () => getNewdog()