export const criminalHTML = (criminalObj) => {
    return `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${criminalObj.name}</h3>
                <p>Age: ${criminalObj.age}</p>
                <p>Conviction: ${criminalObj.conviction}</p>
                <p>Dates of incarceration ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} - ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
           </div>
        </div>
    `
}