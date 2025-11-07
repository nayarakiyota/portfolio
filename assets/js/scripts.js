// Selecionar a Seção About
const about = document.querySelector('#about');

// Selecionar o Formulário
const formulario = document.querySelector('#formulario');

// Expressão Regular para validação de e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Função para buscar os dados no GitHub
async function getApiGithub(){

    try{

        // PASSO 01: Fazer uma requisição GET para a API do GitHub
        const dadosPerfil = await fetch('https://api.github.com/users/nayarakiyota')

        // PASSO 02: Converter a resposta da API para JSON
        const perfilJson = await dadosPerfil.json();

        // PASSO 03: Criar o HTML/CSS com os dados do perfil

        let conteudo = `
        
             <!-- Foto do perfil -->
             <figure class = "about_image">
                <img 
                    src = "${perfilJson.avatar_url}"
                    alt = "Foto do perfil do GitHub - ${perfilJson.name}"
                >
             </figure>

            <!-- Conteúdo do perfil -->
            <article class = "about_content">

                <h2>Sobre mim</h2>
                <p>Sou formada em Análise e Desenvolvimento de Sistemas e atualmente estou me especializando em Desenvolvimento Full Stack com foco em Java pela Generation Brasil.</p>
                <p>Minha primeira experiência profissional foi em vendas, onde desenvolvi habilidades essenciais de comunicação, escuta ativa e empatia, que hoje aplico na tecnologia, entendendo as reais necessidades e buscando entregar soluções úteis e seguras.</p>
                <p>No Bootcamp tenho estudado tecnologias como Java, Spring Boot, HTML, CSS, JavaScript e bancos de dados relacionais, com o objetivo de construir sistemas sólidos, escaláveis e que realmente façam diferença.</p>
                <p>Meu objetivo é atuar como desenvolvedora Full Stack, contribuindo com soluções inteligentes, código de qualidade e uma atitude colaborativa.</p>

                <div class = "about_stats">
                    <a href = "${perfilJson.html_url}" target = "_blank" class = "botao">Ver GitHub</a>

                <div class="stats-wrapper">
                    <div class = "stat-item">
                        <p class = "stat-number">${perfilJson.followers}</p>
                        <p class = "stat-label">Seguidores</p>
                    </div>
                    <div class = "stat-item">
                        <p class = "stat-number">${perfilJson.public_repos}</p>
                        <p class = "stat-label">Repositórios</p>
                    </div>
                </div>

                </div>
            </article>

        `

        // PASSO 04: Adicionar o HTML dentro da Seção About

        about.innerHTML += conteudo;

    }catch(error){
        console.error(error);
    }
}

// Função de envio e validação do formulário
formulario.addEventListener('submit', function(event) {

    // Impedir o envio automático do formulário
    event.preventDefault();

    // Validação do campo nome
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');

    // Nome precisa ter no mínimo 3 caracteres
    if(campoNome.value.length < 3){
        txtNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres.'
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = '';
    }

    // Validação do campo e-mail
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    // Verifica se o email é válido
    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = 'Digite um email válido.'
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = '';
    }

    // Validação do campo assunto
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');

    // Assunto precisa ter no mínimo 5 caracteres
    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres.'
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = '';
    }

    // Se passou por todas as  validações, envia o formulário
    formulario.submit();
}) 

// Chamar a função getAPIGithub()

getApiGithub();