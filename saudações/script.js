let ola = document.getElementById('ola')
let img = document.createElement('img')
let bemvindo = document.getElementById('bemvindo')

function saudação(){
    img.setAttribute('src', 'hello.jpg')
    ola.innerHTML = ''
    ola.appendChild(img)
    bemvindo.innerHTML = 'Sejam bem-vindos!'
}