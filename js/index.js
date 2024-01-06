const conteudos = [
    {
        imagem: "img/copilot.jpeg",
        titulo: "Microsoft Copilot prepara integração com Explorador de Arquivos",
        descricao: "O Microsoft Copilot pode ganhar em breve uma integração com o Explorador de Arquivos que deverá introduzir novas ações com IA através do menu de contexto. A novidade foi compartilhada pelo usuário PhantomOcean3 na rede social X (antigo Twitter) a partir de uma descoberta na nova build do Windows 11 nos canais Dev e Canary."
    },

    {
        imagem: "img/google.jpeg",
        titulo: "Veja como usar a pesquisa por imagem do Google",
        descricao: "A busca por imagem do Google ajuda a encontrar resultados quando você não sabe o que escrever na barra de pesquisa. É possível descobrir a origem de uma foto, encontrar ofertas de um produto específico e usar a própria câmera para navegar pelo buscador."
    },

    {
        imagem: "img/ps5.jpeg",
        titulo: "Novo SSD oficial do PS5 chega ao Brasil",
        descricao: "A Western Digital confirmou o lançamento oficial do WD_Black SN850P, um SSD NVMe super-rápido e licenciado oficialmente para o PlayStation 5. O modelo já havia sido lançado mundialmente em junho de 2023, mas só agora chegou de forma oficial ao Brasil, trazendo capacidades elevadas e melhorias na dissipação de calor. "
    }
];



const content = document.querySelector(".materias");


function criarConteudo(conteudo) {
    // const div = document.createElement("div");
    // div.classList.add("carrosel");

    // // Conteudo do Carrosel
    // const tituloCarrossel = document.createElement("h3");
    // tituloCarrossel.classList.add("carrossel__titulo");

    // const imgCarrossel = document.createElement("img");
    // imgCarrossel.classList.add("carrossel__img")

    // const descricaoCarrossel = document.createElement("h3");
    // descricaoCarrossel.classList.add("carrossel__descricao");


    // Conteudo das materias 
    const materia = document.createElement("div");
    materia.classList.add("materia");

    const conteudoImg = document.createElement("div");
    conteudoImg.classList.add("materia__conteudo__img")

    const img = document.createElement("img");
    img.classList.add("materia__img");
    img.src = conteudo.imagem;

    const conteudoMateria = document.createElement("div");
    conteudoMateria.classList.add("materia__conteudo")

    const titulo = document.createElement("h3");
    titulo.classList.add("materia__titulo");
    titulo.textContent = conteudo.titulo;

    const descricao = document.createElement("p");
    descricao.classList.add("materia__descricao");
    descricao.textContent = conteudo.descricao;

    // div.appendChild(tituloCarrossel);
    // div.appendChild(imgCarrossel);
    // div.appendChild(descricaoCarrossel);

    materia.appendChild(conteudoMateria);
    conteudoMateria.appendChild(conteudoImg);
    conteudoImg.appendChild(img);
    conteudoMateria.appendChild(titulo);
    conteudoMateria.appendChild(descricao);





    return materia;

};


// Adicionando conteúdo criado ao conteudo principal 
for (let conteudo of conteudos) {
    content.appendChild(criarConteudo(conteudo));
}
