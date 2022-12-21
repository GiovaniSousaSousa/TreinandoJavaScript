cores = ["blue","red","yellow","pink"]
legCor = document.querySelector('#legCor')
btn = document.querySelector('#trocaCor')
btn.addEventListener('click',muda)

function muda(){
    rand = Math.floor(Math.random()*cores.length)
    document.body.style.backgroundColor = cores[rand]
    legCor.innerHTML = cores[rand]
}
