import { useCriminals, getCriminalsByCrime } from './CriminalProvider.js'
import { criminalHTML } from './Criminal.js'


const eventHub = document.querySelector(".container")
export const CriminalList = () => {
    const contentArea = document.querySelector(".criminalsContainer")
    const currentCriminals = useCriminals()

    const render = () => {

        currentCriminals.forEach(criminal => contentArea.innerHTML += criminalHTML(criminal))
    }


    eventHub.addEventListener("crimeFilter", (evt) => {
        if (evt.detail.selection) {
            getCriminalsByCrime(evt.detail.selection)
            .then(res => {
                contentArea.innerHTML = ""
                res.forEach(criminal => contentArea.innerHTML += criminalHTML(criminal))}
            )
        }
    })
}