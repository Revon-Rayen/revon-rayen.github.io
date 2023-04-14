
const getAllPokemon = async () => {
    try {
        console.log("Trying to get all pokemon....")
        const response = await fetch(`https://powerful-pear-fedora.cyclic.app/api/v1/pokemon/`)
        const pokemonList = await response.json()
        console.log(pokemonList)
 
 
        // dipslay all the pokemon
        let outputHtml = ""
        // loop through all the pokemon from the API
        // for each pokemon, display their name and description and photo
        for (let i = 0; i < pokemonList.length; i++) {
            outputHtml += `
                <p>Name: ${pokemonList[i].name}</p>
                <p>Description: ${pokemonList[i].desc}</p>
                <img class="img-thumbnail" src="https://powerful-pear-fedora.cyclic.app/images/${pokemonList[i].image}"/>
            `
            // build the html for a single pokemon
            // append the html to the outputHTML variable
        }
        // insert all the html in the #results-container div on the front -end
        document.querySelector("#results-container").innerHTML = outputHtml
 
 
        // TODO: Output data to the screen
        // document.querySelector("#results-container").innerHTML = "Something goes here"
 
 
    } catch (err) {
        console.log(err)
        console.log("ERROR")
    }
 }
 
 const getOnePokemon = async () => {
    // get name from UI
    const searchTerm = document.querySelector("input").value
    console.log(`Searching for: ${searchTerm}`)
 
 
    // get from server
    try {
        const response = await fetch(`https://powerful-pear-fedora.cyclic.app/api/v1/pokemon/${searchTerm}`)
        const pokemon = await response.json()
        console.log(pokemon)
 
 
        // output it to the screen
        let outputHTML = `
            <img src="https://powerful-pear-fedora.cyclic.app/images/${pokemon.image}">
            <h2 class="fs-4">${pokemon.name}</h2>
            <p class="text-secondary">${pokemon.desc}</h2>
        `
        document.querySelector("#results-container").innerHTML = outputHTML
    } catch (err) {
        console.log("ERROR")
    }
 }
 
document.querySelector("#btn-get-all").addEventListener("click", getAllPokemon)
document.querySelector("#btn-get-one").addEventListener("click", getOnePokemon)
document.querySelector("#btn-contribute").addEventListener("click", addPokemon)
