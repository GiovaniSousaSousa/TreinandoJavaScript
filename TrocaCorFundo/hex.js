cores = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
btn = document.querySelector('#trocaCor')
btn.addEventListener('click',muda)
legCor = document.querySelector('#legCor')

function muda(){
    n = '#'
    for(i = 0;i < 6;i ++){
        rand = Math.floor(Math.random()*15) 
        n += cores[rand]
    }
    document.body.style.backgroundColor = n
    legCor.innerHTML = n
}