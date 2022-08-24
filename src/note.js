window.onload = function(){
    let localName = document.getElementById("spanName")
    let recName = localStorage.getItem("Nome")

    localName.innerHTML = recName
}