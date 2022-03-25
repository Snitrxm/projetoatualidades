var bnt = document.getElementById("button")
var input = document.getElementById("input")

bnt.addEventListener('click', () => {
    if(input.value == "Siria"){
        window.location.href = 'siria.html';
    }else if(input.value == "Palestina"){
        window.location.href = 'palestina.html'
    }else if(input.value == "Russia"){
        window.location.href = "russia.html"
    }else if(input.value == "Afeganistão"){
        window.location.href = 'afeganistao.html'
    }else if(input.value == "Egito"){
        window.location.href = "egito.html"
    }else if(input.value == "Israel"){
        window.location.href = "israel.html"
    }else if(input.value == "Ucrania"){
        window.location.href = 'ucrania.html'
    }
})