/* ======================================================
    SCRIPT DE INTERAÇÃO DOS PRODUTOS
    ======================================================
    Este código exibe informações detalhadas dos pratos
    quando o usuário clica neles, e limpa ao clicar em "Limpar".
====================================================== */

// Lista de produtos com descrição e preço
const produtos = [
    {
    nome: "Spaghetti alla Carbonara",
    descricao: "Massa italiana clássica com molho cremoso de ovos, queijo pecorino, pancetta e pimenta-preta moída na hora.",
    preco: "R$ 48,00"
    },
    {
    nome: "Lasagna alla Bolognese",
    descricao: "Camadas de massa fresca, molho bolonhesa artesanal e queijo gratinado no forno.",
    preco: "R$ 55,00"
    },
    {
    nome: "Risotto ai Funghi",
    descricao: "Arroz arbório preparado lentamente com cogumelos frescos e toque de vinho branco.",
    preco: "R$ 52,00"
    },
    {
    nome: "Ravioli di Ricotta e Spinaci",
    descricao: "Massa recheada com ricota fresca e espinafre, servida com molho de manteiga e sálvia.",
    preco: "R$ 50,00"
    },
    {
    nome: "Pizza Margherita",
    descricao: "Pizza tradicional com molho de tomate, muçarela de búfala, manjericão fresco e azeite de oliva.",
    preco: "R$ 45,00"
    },
    {
    nome: "Panna Cotta ai Frutti di Bosco",
    descricao: "Sobremesa italiana leve à base de creme de leite, servida com calda de frutas vermelhas.",
    preco: "R$ 28,00"
    }
];

/* ======================================================
    Função para mostrar as informações do prato clicado
====================================================== */
function mostrarInfo(indice) {
    const detalhes = document.getElementById("detalhes");
    const produto = produtos[indice];

  // Garante que o elemento existe antes de alterar
    if (detalhes && produto) {
    detalhes.innerHTML = `
        <h3>${produto.nome}</h3>
        <p><strong>Descrição:</strong> ${produto.descricao}</p>
        <p><strong>Preço:</strong> ${produto.preco}</p>
    `;
    }
}

/* ======================================================
    Função para limpar as informações exibidas
====================================================== */
function limparInfo() {
    const detalhes = document.getElementById("detalhes");

    if (detalhes) {
    detalhes.innerHTML = ""; // Remove o conteúdo HTML
    }
}
