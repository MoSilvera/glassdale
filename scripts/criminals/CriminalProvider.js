let criminals = []

export const useCriminals = () => {
    return criminals
}

export const getCriminals = () => {
    return fetch("http://criminals.glassdale.us/criminals")
    .then(res => res.json())
    .then(parsedCriminals => criminals = parsedCriminals.slice())
}

export const getCriminalsByCrime = (crime) => {
    return fetch(`http://criminals.glassdale.us/criminals?conviction=${crime}`)
    .then(res => res.json())
}