const cards = document.querySelectorAll(".menu-completo");

// Função para limpar todos os cards ativos
function limparAtivos() {
  cards.forEach(card => {
    card.classList.remove("ativo");
    const descricaoExtra = card.querySelector(".descricao-extra");
    const precoExtra = card.querySelector(".preco-extra");
    const btn = card.querySelector(".btn-vermais");

    if (descricaoExtra) descricaoExtra.remove();
    if (precoExtra) precoExtra.remove();

    // Volta o texto do botão p
    if (btn) btn.textContent = "Ver mais";
  });
}

// ao clicar no btn ver ais
cards.forEach(card => {
  const botao = card.querySelector(".btn-vermais");

  botao.addEventListener("click", (e) => {
    e.stopPropagation(); 

    const estaAtivo = card.classList.contains("ativo");
    limparAtivos();

    if (!estaAtivo) {
      card.classList.add("ativo");

      const descricaoExtra = document.createElement("p");
      descricaoExtra.textContent = card.dataset.descricao;
      descricaoExtra.classList.add("descricao-extra");

      const precoExtra = document.createElement("span");
      precoExtra.textContent = card.dataset.preco;
      precoExtra.classList.add("preco-extra");

      card.appendChild(descricaoExtra);
      card.appendChild(precoExtra);

      // Mudar texto do botão
      botao.textContent = "Fechar";
    }
  });
});
