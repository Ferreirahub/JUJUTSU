// 1. Função para abrir e fechar o trailer
function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    
    if (trailer && video) {
        trailer.classList.toggle('active');
        if (!trailer.classList.contains('active')) {
            video.pause();
        }
    }
}

// 2. Banco de dados com caminhos separados para PC (deitada) e Celular (vertical/centralizada)
const dadosCapas = [
    {
        background: "./images/Yuta capa.jpg",         // Imagem horizontal para PC
        backgroundMobile: "./images/yuta-mobile.webp", // Imagem vertical para Celular
        ano: "2020",
        idade: "+16",
        tipo: "Standalone",
        genero: "Drama"
    },
    {
        background: "./images/yuji capa.jpg",
        backgroundMobile: "./images/itadori-mobile.webp",
        ano: "2018",
        idade: "+14",
        tipo: "271 Capítulos",
        genero: "Drama"
    },
    {
        background: "./images/megumi capa.jpg",
        backgroundMobile: "./images/megumi-mobile.webp",
        ano: "2019",
        idade: "+14",
        tipo: "30 Capítulos",
        genero: "Drama"
    },
    {
        background: "./images/nobara capa.jpg",
        backgroundMobile: "./images/nobara-mobile.webp",
        ano: "2019",
        idade: "+16",
        tipo: "45 Capítulos",
        genero: "Drama"
    },
    {
        background: "./images/satoru capa.jpg",
        backgroundMobile: "./images/satoru-mobile.webp",
        ano: "2020",
        idade: "+18",
        tipo: "12 Capítulos",
        genero: "Drama"
    },
    {
        background: "./images/sukuna capa.jpg",
        backgroundMobile: "./images/sukuna-mobile.webp",
        ano: "2021",
        idade: "+18",
        tipo: "85 Capítulos",
        genero: "Drama"
    }
];

// 3. Inicialização do Carrossel com detecção dinâmica de tela
$(document).ready(function(){
    $('.carousel').carousel({
        onCycleTo: function(ele) {
            // Descobre o índice do slide ativo
            let indice = $(ele).index();
            let dadosAtuais = dadosCapas[indice];

            if (dadosAtuais) {
                // Se a largura da tela for menor que 992px, carrega a imagem mobile
                let imagemFundo = ($(window).width() < 992) ? dadosAtuais.backgroundMobile : dadosAtuais.background;

                // Altera o background do banner
                $('#banner').css('background-image', `url('${imagemFundo}')`);

                // Atualiza os metadados dinamicamente
                $('#info-ano').text(dadosAtuais.ano);
                $('#info-idade').text(dadosAtuais.idade);
                $('#info-tipo').text(dadosAtuais.tipo);
                $('#info-genero').text(dadosAtuais.genero);
            }
        }
    });
});