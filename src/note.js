window.onload = function(){
    let localName = document.getElementById("spanName")
    let recName = localStorage.getItem("Nome")

    localName.innerHTML = recName
}

let button = document.getElementById("button")
    .addEventListener("click", () => {
    swal({
  text: 'Digite o título da sua nota',
  content: "input",
  button: {
    text: "Confirmar",
  },
    }).then(() => {
    swal({
  text: 'Digite sue comentário',
  content: "input",
  button: {
    text: "Confirmar",
  },
})
})
})