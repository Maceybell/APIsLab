let getResBtn = document.querySelector(".residents")


let clickedGetRes = (path) => {
    console.log("button clicked!")
    axios.get("https://swapi.dev/api/planets/?search=alderaan").then(
        (response) => {
        const {residents} = response.data.results[0];
        console.log(residents);
       residents.forEach(residentURL=>{
            axios.get(residentURL).then((response)=>{
            console.log(response.data.name)
          
            let newElement = document.createElement('h2')
            newElement.textContent=response.data.name
            let section = document.querySelector('section')
            section.appendChild(newElement)
            })
        
        })
})
}



getResBtn.addEventListener("click", clickedGetRes)