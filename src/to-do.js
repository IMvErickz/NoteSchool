window.onload = function(){
    let localName = document.getElementById("spanName")
    let recName = localStorage.getItem("Nome")

    localName.innerHTML = recName
    recLocal()
}


let saveLocal = []
let button = document.getElementById('button')
    .addEventListener("click", () => {
            let coment = document.getElementById("description").value
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
                window.location.reload = localStorage.removeItem("Check")
        })
    } else {
        let span = document.getElementById("span")
        span.style.textDecoration = 'none'
        span.style.color = 'white'
    }
}

document.addEventListener('keypress', function(e){
  if(e.which == 13){
    enviaForm()
  }
}, false)

function enviaForm() {
    let coment = document.getElementById("description").value
saveLocal.push(coment)
console.log(saveLocal)
localStorage.setItem("Check", saveLocal)
let span = document.getElementById("span")
let recComent = localStorage.getItem("Check")
span.innerHTML = recComent
let coment2 = document.getElementById("description").value = ""
}

function recLocal() {
    let spanRec = document.getElementById("span")
    let recSaved = localStorage.getItem("Check")

    spanRec.innerHTML = recSaved
}