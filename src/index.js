let button = document.getElementById("button")
    .addEventListener("click", () => {
        let name = document.getElementById("name").value
        swal("Sucesso", "Seu nome está salvo", "success")
            .then(() => {
            localStorage.setItem("Nome", name)
            })
})