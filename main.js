function getProjects() {
    const urlGitHub = 'https://api.github.com/users/ojosegarcia/repos';
    var loadingElement = document.getElementById('loading');

    fetch(urlGitHub, {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            showProjects(response);
            loadingElement.style.display = 'none';
        })
        .catch((e) => {
            console.log(`Error -> ${e}`);
        });
}

function showProjects(data) {
    var listElement = document.getElementById('my-projects-list');
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        let a = document.createElement("a");
        a.href = data[i]['clone_url'];
        a.target = '_blank';
        a.title = data[i]['description'];
        let linkText = document.createTextNode(data[i]['name']);
        a.appendChild(linkText);
        div.appendChild(a);
        listElement.appendChild(div);
    }
}

function copyEmail() {
    // E-mail a ser copiado
    const email = 'josecarlosgarciajunior2003@gmail.com';
    
    // Copia o e-mail para a área de transferência
    navigator.clipboard.writeText(email)
        .then(() => {
            // Altera o texto do botão para "E-mail copiado!" e depois volta ao texto original
            const emailButton = document.getElementById('copy-email');
            emailButton.innerText = 'E-mail copiado!';
            setTimeout(() => {
                emailButton.innerText = 'Copiar E-mail';
            }, 2000); // Tempo de espera em milissegundos
        })
        .catch(err => {
            console.error('Falha ao copiar o e-mail: ', err); 
        });
}

// Adiciona o event listener ao botão "Copiar E-mail"
document.getElementById('copy-email').addEventListener('click', copyEmail);

getProjects();
