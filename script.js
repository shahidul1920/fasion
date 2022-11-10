let icon = document.querySelector('.icon');
let mainMenu = document.querySelector('.mainMenu')

icon.addEventListener('click', function(){
    icon.classList.toggle('iconAct')
    mainMenu.classList.toggle('menuAct')
})