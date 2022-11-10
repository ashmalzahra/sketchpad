const container = document.querySelector('#container')
const resetButton = document.querySelector('#reset-button')

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let i = 0; i< amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++){
            const widthAndHeight = 960 / amtOfGrids
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height= `${widthAndHeight}px`
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = "black"
            })
            row.appendChild(gridBox)
        }

        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
};


    resetButton.addEventListener('click', () => {
    let userChoice = Number(prompt('Entre a number to make your grid'))

    while(userChoice > 100){
        userChoice = Number(prompt('Select a number less than 100'))
    }

    const wrapper = document.querySelector('.wrapper')
    if(!wrapper){
        createGrid(userChoice)
    }
    else{
        wrapper.remove()
        createGrid(userChoice)
    }
})
