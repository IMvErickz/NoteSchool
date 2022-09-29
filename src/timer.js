window.onload = function(){
    let localName = document.getElementById("spanName")
    let recName = localStorage.getItem("Nome")

    localName.innerHTML = recName
}
    
const button = document.getElementById("start")
    .addEventListener("click", () => {
    let localTimer = document.getElementById("setTimer")
        let input = document.getElementById("timeValue").value 
        
        const time = setTimeout(timer, input * 1000)

        function timer() {

            for (let i = 0; i < input; i++){
                localTimer.innerHTML = input-input
                swal("Timer finalizado!", "Parabéns!", "success");
            }
            
            
            
        }

const stop = document.getElementById("stopButton")
    .addEventListener("click", () => {
        swal("Você encerrou o timer!", "Volte quando quiser", "info")
            .then(() => {
            localTimer.innerHTML = input
            clearTimeout(time)
        })
        
        
})
    })
