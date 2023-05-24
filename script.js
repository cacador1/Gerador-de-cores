
function gerar_cor(){
    let resultado = document.getElementById('resultado')
    let cod_cor = document.getElementById('cod_cor')
    let caixa_de_cor = document.getElementById('cor')
    
    codigo_1 = Math.floor(Math.random()*255)
    codigo_2 = Math.floor(Math.random()*255)
    codigo_3 = Math.floor(Math.random()*255)
    

    rgb = "rgb(" + codigo_1 + "," + codigo_2  + "," + codigo_3 + ")";


    cod_cor.innerHTML = 
    `<strong>
        <h3>Código da cor: ${codigo_1}, ${codigo_2}, ${codigo_3}</h3>
    </strong>`

    cor_copiada = codigo_1 + ", " + codigo_2  + ", "  + codigo_3 

    caixa_de_cor.style.background = rgb

    

}

function colorir_fundo(){
    window.document.body.style.background = rgb

}

function limpar_fundo(){
    let cor_de_fundo = "rgb(" + 227 + "," + 240  + "," + 116 + ")";
    window.document.body.style.background = cor_de_fundo
}

function copiartexto(){


    navigator.clipboard.writeText(cor_copiada)


}