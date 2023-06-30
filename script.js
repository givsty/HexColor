const switch__color = document.querySelector('.switch__color')
const colorArr = ["#CD5C5C", "#FFC0CB", "#FFA07A", "#FFD700", "#E6E6FA", "#FFF8DC", "#ADFF2F", "#00FFFF", "#A9A9A9"];
const colorValue = document.querySelector('.color')
const box = document.querySelector('.box')

switch__color.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * colorArr.length)

    document.body.style.background = colorArr[random]
    colorValue.textContent = colorArr[random]
})