let convictions = []

export const useConvictions = () => {
    return convictions
}


export const getConvictions = () => {
   return fetch(`http://criminals.glassdale.us/crimes`)
   .then(res => res.json())
   .then(parsedConvictions => convictions = parsedConvictions.slice())
}
