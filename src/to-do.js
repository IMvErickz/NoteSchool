window.onload = function(){
    let localName = document.getElementById("spanName")
    let recName = localStorage.getItem("Nome")

    localName.innerHTML = recName
}


let button = document.getElementById('button')
    .addEventListener("click", () => {
        let coment = document.getElementById("description").value
        localStorage.setItem("Check", coment)

        let span = document.getElementById("span")
        let recComent = localStorage.getItem("Check")

        span.innerHTML = recComent
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
    }
}
    
$("#description").keypress(function(event) {
            if (event.keyCode === 13) {
                $("#button").click();
                alert("lcik")
            }
        });