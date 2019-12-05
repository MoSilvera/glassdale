import { useCriminals } from './CriminalProvider.js'
import { criminalHTML } from './Criminal.js'

export const CriminalList = () => {
    const contentArea = document.querySelector(".criminalsContainer")
    const currentCriminals = useCriminals()

    currentCriminals.forEach(criminal => contentArea.innerHTML += criminalHTML(criminal))

}