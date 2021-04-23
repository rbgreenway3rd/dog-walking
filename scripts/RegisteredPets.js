import { getPets, getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [, id] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(id)) {
                    let walkerPetName = ""
                    for (const pet of pets) {
                        if (pet.walkerId === walker.id) {
                            walkerPetName = pet
                        }

                    }
                    
                    // const walkerPetName = pets.filter(pet => {
                        // if (pet.walkerId === walker.id) {
                            // return true
                        // }
                        
                    // }
                    
                    window.alert(`${walkerPetName.name} is being walked by ${walker.name}`)

                }
            }
        }
    }
)

const walkers = getWalkers()

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

