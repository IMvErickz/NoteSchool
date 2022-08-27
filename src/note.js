window.onload = function(){
    let localName = document.getElementById("spanName")
    let recName = localStorage.getItem("Nome")

    localName.innerHTML = recName
}

let button = document.getElementById("button")
  .addEventListener("click", () => {
  const switchModal = () => {
const modal = document.querySelector('.modal')
const actualStyle = modal.style.display
if(actualStyle == 'block'){
  modal.style.display = 'none'
}else{
  modal.style.display = 'block'

}
}

const btn = document.querySelector('.buttonCard')
.addEventListener("click", switchModal)

window.onclick = function(event){
  const modal = document.querySelector('.modal')
  if(event.target == modal){
    switchModal()
  }
}
  })

let saved = document.getElementById("butModal")
  .addEventListener("click", () => {
    let note = {
      Titulo:  document.getElementById("tittle").value,
      Comentario:  document.getElementById("coment").value
    }

    localStorage.setItem("save", JSON.stringify(note))

    let tittle = document.getElementById("buttonCard")
    let coment = document.getElementById("descrition")
    let recSave = JSON.parse(localStorage.getItem("save"))
    
    tittle.innerHTML = recSave.Titulo
    coment.innerHTML = recSave.Comentario

document.getElementByClassName
  })

let excluid = document.getElementById("exclude")
  .addEventListener("click", () => {
    let excluTittle = document.getElementById("buttonCard").style.display = "none"
     let excluComent = document.getElementById("descrition").style.display = "none"
    
    
  })

