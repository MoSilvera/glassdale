import { useCriminals, getCriminalsByCrime } from './CriminalProvider.js'
import { criminalHTML } from './Criminal.js'


const eventHub = document.querySelector(".container")
export const CriminalList = () => {
    const contentArea = document.querySelector(".criminalsContainer")
    let currentCriminalsState = useCriminals()


    const render = (criminalCollection) => {
        contentArea.innerHTML = ""
        criminalCollection.forEach(criminal => contentArea.innerHTML += criminalHTML(criminal))
    }

    render(currentCriminalsState)


    eventHub.addEventListener("crimeFilter", (evt) => {
        if (evt.detail.selection) {
           let filteredCriminals = currentCriminalsState.filter( criminal => criminal.conviction === evt.detail.selection)
           render(filteredCriminals)
        }
    })
}