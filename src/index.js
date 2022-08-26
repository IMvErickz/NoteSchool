let button = document.getElementById("button")
    .addEventListener("click", () => {
        let name = document.getElementById("name").value
        swal("Sucesso", "Seu nome está salvo", "success")
            .then(() => {
            localStorage.setItem("Nome", name)
            })
    })

    document.addEventListener('keypress', function(e){
  if(e.which == 13){
    enviaForm()
  }
}, false)

function enviaForm() {
    let name = document.getElementById("name").value
swal("Sucesso", "Seu nome está salvo", "success")
    .then(() => {
    localStorage.setItem("Nome", name)
    })
}