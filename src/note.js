window.onload = function(){
    let localName = document.getElementById("spanName")
    let recName = localStorage.getItem("Nome")

  localName.innerHTML = recName
  
  getLocal()
}

let button = document.getElementById("button")
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
  })

let excluid = document.getElementById("exclude")
  .addEventListener("click", () => {
     document.getElementById("buttonCard").style.display = "none"
     document.getElementById("descrition").style.display = "none"
     localStorage.removeItem("save")
     location.reload()
    
    
  })

function getLocal() {
  const recTittle = document.getElementById("buttonCard")
  const recDesc = document.getElementById("descrition")
  let recLocal = JSON.parse(localStorage.getItem("save"))

  recTittle.innerHTML = recLocal.Titulo
  recDesc.innerHTML = recLocal.Comentario
  }