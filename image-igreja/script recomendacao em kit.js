// Lista de combos pré-definidos e suas recomendações
var combos = [
    {
        itens: ["camisa", "calça", "sapato"],
        recomendacao: "Combo elegante: Camisa, Calça e Sapato"
    },
    {
        itens: ["camiseta", "bermuda", "tênis"],
        recomendacao: "Combo casual: Camiseta, Bermuda e Tênis"
    },
    {
        itens: ["vestido", "bolsa", "salto"],
        recomendacao: "Combo feminino: Vestido, Bolsa e Salto"
    }
];

// Função para verificar se alguns itens selecionados correspondem a algum combo
function recomendarCombo(itensSelecionados) {
    for (var i = 0; i < combos.length; i++) {
        var combo = combos[i];
        for (var j = 0; j < combo.itens.length; j++) {
            if (itensSelecionados.includes(combo.itens[j])) {
                return combo.recomendacao;
            }
        }
    }
    return "Não encontramos um combo correspondente aos itens selecionados.";
}

// Exemplo de utilização
var itensSelecionados = ["camisa", "meia", "sapato"];
var recomendacaoCombo = recomendarCombo(itensSelecionados);
console.log(recomendacaoCombo);
