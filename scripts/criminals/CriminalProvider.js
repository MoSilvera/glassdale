let criminals = []

export const useCriminals = () => {
    return criminals
}

export const getCriminals = () => {
    return fetch("http://criminals.glassdale.us/criminals")
    .then(res => res.json())
    .then(parsedCriminals => criminals = parsedCriminals.slice())
}