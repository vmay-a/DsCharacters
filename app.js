function pesquisar() {
    let section = document.getElementById("pesquisaInput")

    let campoPesquisa = document.getElementById(pesquisaInput)
console.log(pesquisaInput)
let resultados = ""

for (let dado of personagens) {

    resultados += `
      <div class="item-resultado">
      <img src="imagens/${personagens.imagem}" style="max-width:200px;">
        <h2>
            <a href="#" target="_blank">${personagens.titulo}</a>
        </h2>
        <p class="descricao-meta">${personagens.descricao}</p>
        <a href="${personagens.link}" target="_blank" >Mais Informações</a>
    </div>
    `
}

section.innerHTML = resultados
}
