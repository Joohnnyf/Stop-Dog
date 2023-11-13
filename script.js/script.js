document.getElementById("search-box").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log("click")
        event.preventDefault();
        // Aqui você pode adicionar a lógica para executar a pesquisa
        let searchTerm = this.value;
        // Exemplo de ação: redirecionar para uma página de resultados
        window.location.href = "/search?query=" + searchTerm;
    }
});

var radio = document.querySelector('.manaul-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
},5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}