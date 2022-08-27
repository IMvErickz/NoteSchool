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

