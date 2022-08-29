window.onload = function(){
    let localName = document.getElementById("spanName")
    let recName = localStorage.getItem("Nome")

    localName.innerHTML = recName
}


let button = document.getElementById('button')
    .addEventListener("click", () => {
        let coment = document.getElementById("description").value
        let saveLocal = []
        saveLocal.push(coment)
        console.log(saveLocal)
        localStorage.setItem("Check", saveLocal)

        let span = document.getElementById("span")
        let recComent = localStorage.getItem("Check")

        span.innerHTML = recComent

        let coment2 = document.getElementById("description").value = ""
    })

function toList(idList) {
    let list = document.getElementById(idList)
    if (list.checked) {
        swal("Parabéns!", "Mais uma tarefa concluída", "success")
            .then(() => {
            let span = document.getElementById("span")
                span.style.textDecoration = 'line-through'
                span.style.color = '#696969'
        })
    } else {
        let span = document.getElementById("span")
        span.style.textDecoration = 'none'
        span.style.color = 'white'
        let remove = localStorage.removeItem("Check")
    }
}

document.addEventListener('keypress', function(e){
  if(e.which == 13){
    enviaForm()
  }
}, false)

function enviaForm() {
    let coment = document.getElementById("description").value
localStorage.setItem("Check", coment)
   let span = document.getElementById("span")
 let recComent = localStorage.getItem("Check")
    span.innerHTML = recComent
    
    let coment2 = document.getElementById("description").value = ""
}