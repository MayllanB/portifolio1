/*
    OBJETIVO - quando clicarmos na aba temos que mostrar o conteudo da aba que foi clacada pelo usário e esconder o contéudo da anterior














*/

// PASSO 1
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
// PASSO 2
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba){
    // PASSO 3
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado")

    // PASSO 4
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
    // PASSO 5
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // PASSO 6
    const idDoElementoDeInformacoesDasAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDasAba)
    informacaoASerMostrada.classList.add("selecionado")
}