function pesquisar() {
    let pesquisaInput = document.getElementById('pesquisaInput').value.trim().toLowerCase();


    let personagemEncontrado = personagens.find(personagem =>
        personagem.titulo.toLowerCase() === pesquisaInput
    );

    let resultadoDiv = document.getElementById('resultado');

    if (personagemEncontrado) {
        resultadoDiv.innerHTML = `
            <img src="imagens/${personagemEncontrado.imagem}" alt="${personagemEncontrado.titulo}" style="max-width:200px;">
            <h3>${personagemEncontrado.titulo}</h3>
            <p>${personagemEncontrado.descricao}</p>
            <a href="${personagemEncontrado.link}" target="_blank">Mais sobre ${personagemEncontrado.titulo}</a><br>
            
        `;
    } else {
        resultadoDiv.innerHTML = "<p>Personagem não encontrado.</p>";
    }
}
