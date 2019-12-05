import { useConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

export const ConvictionSelect = () => {

    eventHub.addEventListener("change", (evt) => {
        if(evt.target.id === "crimeSelect"){
            eventHub.dispatchEvent(new CustomEvent("crimeFilter", {
                detail: {
                    selection: document.getElementById("crimeSelect").value.split("-").join(" ")
                }
            })
            )
        }
    }
    )

    const convictions = useConvictions()

    const render = () => {
        let crimeOptions = convictions.map(crimeType => `<option value='${crimeType.split(" ").join("-")}'>${crimeType}</option>`).join(" ")

        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${crimeOptions}
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect