const conteudos = [
    {
        imagem: "img/",
        titulo: "Titulo",
        descricao: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima dolore aliquid tenetur autem eligendi at officia suscipit. Corporis accusantium dolorum tenetur aliquam officiis quisquam perspiciatis id expedita totam mollitia?"
    },

    {
        imagem: "img/",
        titulo: "Titulo",
        descricao: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima dolore aliquid tenetur autem eligendi at officia suscipit. Corporis accusantium dolorum tenetur aliquam officiis quisquam perspiciatis id expedita totam mollitia?"
    },

    {
        imagem: "img/",
        titulo: "Titulo",
        descricao: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima dolore aliquid tenetur autem eligendi at officia suscipit. Corporis accusantium dolorum tenetur aliquam officiis quisquam perspiciatis id expedita totam mollitia?"
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

    materia.appendChild(img);
    materia.appendChild(conteudoMateria);
    conteudoMateria.appendChild(titulo);
    conteudoMateria.appendChild(descricao);


    return materia;

};


// Adicionando conteúdo criado ao conteudo principal 
for (let conteudo of conteudos) {
    content.appendChild(criarConteudo(conteudo));
}
