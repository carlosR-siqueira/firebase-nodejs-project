


// Fazer a segunda requisição fetch para obter dados adicionais
const festaDB = 'https://teste-908b8-default-rtdb.firebaseio.com/produto/Artigos Para Festas.json';
fetch(festaDB, {
    method: 'GET',
    mode: 'cors', // Define o modo CORS
    headers: {
        'Content-Type': 'application/json;'
    }
})

    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao buscar dados adicionais');
        }
        return response.json();
    })
    .then((data) => {


        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const produto = data[key];

                prodCard = `<div class="card" data-category="${produto.categoria}"><div class="badge-container"><button class="badge badge-warning editarBtn" data-id="${key}">Editar</button><button class="badge badge-danger excluirBtn" data-id="${key}">Excluir</button></div><img src="${produto.imagemUrl}"><h2>${produto.nome}</h2><p>${produto.descricao}</p></div>`


                document.querySelector('.containerFest').insertAdjacentHTML('beforeend', prodCard);
            }

            
        }
    })
    .catch((err) => {
        console.error(err);
    });





// Fazer a segunda requisição fetch para obter dados adicionais
const domsticoDB = 'https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios Domésticos.json';
fetch(domsticoDB, {
    method: 'GET',
    mode: 'cors', // Define o modo CORS
    headers: {
        'Content-Type': 'application/json'
    }
})

    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao buscar dados adicionais');
        }
        return response.json();
    })
    .then((data) => {

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const produto = data[key];

                prodCard = `<div class="card" data-category="${produto.categoria}"><div class="badge-container"><button class="badge badge-warning editarBtn" data-id="${key}">Editar</button><button class="badge badge-danger excluirBtn" data-id="${key}">Excluir</button></div><img src="${produto.imagemUrl}"><h2>${produto.nome}</h2><p>${produto.descricao}</p></div>`


                document.querySelector('.containerDomest').insertAdjacentHTML('beforeend', prodCard);
            }
        }
    })
    .catch((err) => {
        console.error(err);
    });




// Fazer a segunda requisição fetch para obter dados adicionais
const limpezaDB = 'https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios de limpeza e higiene.json';
fetch(limpezaDB, {
    method: 'GET',
    mode: 'cors', // Define o modo CORS
    headers: {
        'Content-Type': 'application/json'
    }
})

    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao buscar dados adicionais');
        }
        return response.json();
    })
    .then((data) => {




        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const produto = data[key];

                prodCard = `<div class="card" data-category="${produto.categoria}"><div class="badge-container"><button class="badge badge-warning editarBtn" data-id="${key}">Editar</button><button class="badge badge-danger excluirBtn" data-id="${key}">Excluir</button></div><img src="${produto.imagemUrl}"><h2>${produto.nome}</h2><p>${produto.descricao}</p></div>`


                document.querySelector('.containerLimpeza').insertAdjacentHTML('beforeend', prodCard);
            }
        }
    })
    .catch((err) => {
        console.error(err);
    });




// Fazer a segunda requisição fetch para obter dados adicionais
const descartaveisDB = 'https://teste-908b8-default-rtdb.firebaseio.com/produto/Descartáveis.json';
fetch(descartaveisDB, {
    method: 'GET',
    mode: 'cors', // Define o modo CORS
    headers: {
        'Content-Type': 'application/json'
    }
})

    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao buscar dados adicionais');
        }
        return response.json();
    })
    .then((data) => {




        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const produto = data[key];

                prodCard = `<div class="card" category="${produto.categoria}"><div name="button" class="badge-container"><button class="badge badge-warning editarBtn" data-id="${key}">Editar</button><button class="badge badge-danger excluirBtn" data-id="${key}">Excluir</button></div><img src="${produto.imagemUrl}"><h2>${produto.nome}</h2><p>${produto.descricao}</p></div>`


                document.querySelector('.containerDesc').insertAdjacentHTML('beforeend', prodCard);
            }
        }
    })
    .catch((err) => {
        console.error(err);
    });



const produtosDB = 'https://teste-908b8-default-rtdb.firebaseio.com/produto.json';

fetch(produtosDB, {

    method: 'GET',
    mode: 'cors', // Define o modo CORS
    headers: {
        'Content-Type': 'application/json'
    }

})

    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao buscar dados do Firebase');
        }
        return response.json();
    })
    .then((data) => {

        for (const categoria in data) {
            itens = ` <div class="card"><h2 class = "cardTitle">${categoria}</h2><a class ="link btn btn-primary">Ver Tudo</a></div>`
            document.querySelector('.container').insertAdjacentHTML('beforeend', itens);
        }

    })

    .catch((err) => {
        console.error(err); // Trate o erro corretamente aqui
    });
document.querySelector('.container').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        const card = event.target.closest('.card'); // Encontrar o card pai do botão clicado
        const cardTitle = card.querySelector('.cardTitle').textContent; // Obter o texto do título do card

        if (cardTitle === 'Artigos Para Festas') {
            const link = card.querySelector('.link'); // Encontrar o link dentro do card específico
            link.href = 'categoria_festas.html';
            // Redirecionar para a nova página
            window.location.href = link.href;
        } else if (cardTitle === 'Descartáveis') {
            const link = card.querySelector('.link'); // Encontrar o link dentro do card específico
            link.href = 'categoria_descartaveis.html';
            // Redirecionar para a nova página
            window.location.href = link.href;
        } else if (cardTitle === 'Utensílios Domésticos') {
            const link = card.querySelector('.link'); // Encontrar o link dentro do card específico
            link.href = 'categoria_domesticos.html';
            // Redirecionar para a nova página
            window.location.href = link.href;
        } else if (cardTitle === 'Utensílios de limpeza e higiene') {
            const link = card.querySelector('.link'); // Encontrar o link dentro do card específico
            link.href = 'categoria_limpeza.html';
            // Redirecionar para a nova página
            window.location.href = link.href;
        }

    }
});



function salvarDados() {
    var produtoName = document.querySelector('.produtoName')
    var produtoDescription = document.querySelector('.produtoDescription')
    var produtoPrice = document.querySelector('.produtoPrice')
    var produtoImgUrl = document.querySelector('.produtoImgUrl')
    var produtoCategory = document.querySelector('.selectCategory')


    const produtoCategoryValue = produtoCategory.options[produtoCategory.selectedIndex].value;
    if (produtoName && produtoDescription && produtoPrice && produtoCategoryValue) {


        const urlDB = `https://teste-908b8-default-rtdb.firebaseio.com/produto/${produtoCategoryValue}.json`

        fetch(urlDB, {
            method: 'POST',
            body: JSON.stringify({
                nome: produtoName.value,
                categoria: produtoCategoryValue,
                descricao: produtoDescription.value,
                preco: produtoPrice.value,
                imagemUrl: produtoImgUrl.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dados salvos com sucesso:', data);
                alert('Produto salvo com sucesso!');
                location.reload()

                produtoName.value = ''; // Limpa o campo após salvar
                produtoDescription.value = '';
                produtoPrice.value = '';
                produtoImgUrl.value = '',
                    produtoCategoryValue = '';

            })
            .catch(error => {
                console.error('Erro ao salvar os dados:', error);
            });
    } else {
        alert('Por favor, preencha todos os campos do produto.');
    }
}


    




// modal de adicionar produtos


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function openDomest() {
    var modalDomest = document.getElementById("modalDomestAdd");
    modalDomest.style.display = 'flex'
}
function fecharModalDomest() {
    var modalDomest = document.getElementById("modalDomestAdd");
    modalDomest.style.display = 'none'
    
}

function salvarDadosDomest() {
    var produtoNameDomest = document.querySelector('.produtoNameDomest')
    var produtoDescriptionDomest = document.querySelector('.produtoDescriptionDomest')
    var produtoPriceDomest = document.querySelector('.produtoPriceDomest')
    var produtoImgUrlDomest = document.querySelector('.produtoImgUrl')
    var produtoCategory = document.querySelector('.selectCategory')


    const produtoCategoryValue = produtoCategory.options[produtoCategory.selectedIndex].value;
    if (produtoNameDomest && produtoDescriptionDomest && produtoPriceDomest && produtoCategoryValue) {

        const urlDB = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios Domésticos.json`


        fetch(urlDB, {
            method: 'POST',
            body: JSON.stringify({
                nome: produtoNameDomest.value,
                categoria: produtoCategoryValue,
                descricao: produtoDescriptionDomest.value,
                preco: produtoPriceDomest.value,
                imagemUrl: produtoImgUrlDomest.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dados salvos com sucesso:', data);
                alert('Produto salvo com sucesso!');
                location.reload()

                produtoNameDomest.value = ''; // Limpa o campo após salvar
                produtoDescriptionDomest.value = '';
                produtoPriceDomest.value = '';
                produtoImgUrlDomest.value = '',
                    produtoCategoryValue = '';

            })
            .catch(error => {
                console.error('Erro ao salvar os dados:', error);
            });
    } else {
        alert('Por favor, preencha todos os campos do produto.');
    }
}





function salvarDadosDesc() {
    var produtoNameDesc = document.querySelector('.produtoNameDesc')
    var produtoDescriptionDesc = document.querySelector('.produtoDescriptionDesc')
    var produtoPriceDesc = document.querySelector('.produtoPriceDesc')
    var produtoImgUrlDesc = document.querySelector('.produtoImgUrl')
    var produtoCategory = document.querySelector('.selectCategory')


    const produtoCategoryValue = produtoCategory.options[produtoCategory.selectedIndex].value;
    if (produtoNameDesc && produtoDescriptionDesc && produtoPriceDesc && produtoCategoryValue) {


        const urlDB = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Descartáveis.json`

        fetch(urlDB, {
            method: 'POST',
            body: JSON.stringify({
                nome: produtoNameDesc.value,
                categoria: produtoCategoryValue,
                descricao: produtoDescriptionDesc.value,
                preco: produtoPriceDesc.value,
                imagemUrl: produtoImgUrlDesc.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dados salvos com sucesso:', data);
                alert('Produto salvo com sucesso!');
                location.reload()

                produtoNameDesc.value = ''; // Limpa o campo após salvar
                produtoDescriptionDesc.value = '';
                produtoPriceDesc.value = '';
                produtoImgUrlDesc.value = '',
                    produtoCategoryValue = '';

            })
            .catch(error => {
                console.error('Erro ao salvar os dados:', error);
            });
    } else {
        alert('Por favor, preencha todos os campos do produto.');
    }
}



function openDesc() {
    var modaldesc = document.getElementById("modalDescAdd");
    modaldesc.style.display = 'flex'
}
function fecharModalDesc() {
    var modaldesc = document.getElementById("modalDescAdd");
    modaldesc.style.display = 'none'
    
}


function salvarDadosFesta() {
    var produtoNameFesta = document.querySelector('.produtoNameFesta')
    var produtoDescriptionFesta = document.querySelector('.produtoDescriptionFesta')
    var produtoPriceFesta = document.querySelector('.produtoPriceFesta')
    var produtoImgUrlFesta = document.querySelector('.produtoImgUrl')
    var produtoCategory = document.querySelector('.selectCategory')


    const produtoCategoryValue = produtoCategory.options[produtoCategory.selectedIndex].value;
    if (produtoNameFesta && produtoDescriptionFesta && produtoPriceFesta && produtoCategoryValue) {


        const urlDB = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Artigos Para Festas.json`

        fetch(urlDB, {
            method: 'POST',
            body: JSON.stringify({
                nome: produtoNameFesta.value,
                categoria: produtoCategoryValue,
                descricao: produtoDescriptionFesta.value,
                preco: produtoPriceFesta.value,
                imagemUrl: produtoImgUrlFesta.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dados salvos com sucesso:', data);
                alert('Produto salvo com sucesso!');
                location.reload()

                produtoNameFesta.value = ''; // Limpa o campo após salvar
                produtoDescriptionFesta.value = '';
                produtoPriceFest.value = '';
                produtoImgUrlFest.value = '',
                    produtoCategoryValue = '';

            })
            .catch(error => {
                console.error('Erro ao salvar os dados:', error);
            });
    } else {
        alert('Por favor, preencha todos os campos do produto.');
    }
}



function openFest() {
    var modaldesc = document.getElementById("modalFestAdd");
    modaldesc.style.display = 'flex'
}
function fecharModalFest() {
    var modaldesc = document.getElementById("modalFestAdd");
    modaldesc.style.display = 'none'
    
}



function salvarDadosLimpeza() {
    var produtoNameLimpeza = document.querySelector('.produtoNameLimpeza')
    var produtoDescriptionLimpeza = document.querySelector('.produtoDescriptionLimpeza')
    var produtoPriceLimpeza = document.querySelector('.produtoPriceLimpeza')
    var produtoImgUrlLimpeza = document.querySelector('.produtoImgUrl')
    var produtoCategory = document.querySelector('.selectCategory')


    const produtoCategoryValue = produtoCategory.options[produtoCategory.selectedIndex].value;
    if (produtoNameLimpeza && produtoDescriptionLimpeza && produtoPriceLimpeza && produtoCategoryValue) {


        const urlDB = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios de limpeza e higiene.json`

        fetch(urlDB, {
            method: 'POST',
            body: JSON.stringify({
                nome: produtoNameLimpeza.value,
                categoria: produtoCategoryValue,
                descricao: produtoDescriptionLimpeza.value,
                preco: produtoPriceLimpeza.value,
                imagemUrl: produtoImgUrlLimpeza.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dados salvos com sucesso:', data);
                alert('Produto salvo com sucesso!');
                location.reload()

                produtoNameLimpeza.value = ''; // Limpa o campo após salvar
                produtoDescriptionLimpeza.value = '';
                produtoPriceLimpeza.value = '';
                produtoImgUrlLimpeza.value = '',
                    produtoCategoryValue = '';

            })
            .catch(error => {
                console.error('Erro ao salvar os dados:', error);
            });
    } else {
        alert('Por favor, preencha todos os campos do produto.');
    }
}



function openLimpeza() {
    var modalLimpeza = document.getElementById("modalLimpezaAdd");
    modalLimpeza.style.display = 'flex'
}
function fecharModalLimpeza() {
    var modalLimpeza = document.getElementById("modalLimpezaAdd");
    modalLimpeza.style.display = 'none'
    
}


let fetchUrl = ''; // Declarando a variável fetchUrl fora do escopo das funções
const categoriaSelect = document.querySelector('.selectCategory').addEventListener("change", selectCategory)
function selectCategory() {
    // Obtenha o valor da categoria selecionada
    const categoriaSelecionada = this.value;

    // Defina a nova URL com base na categoria selecionada
    if(categoriaSelecionada === 'Descartáveis'){
        fetchUrl = 'http://localhost:3000/uploadDesc';
    } else if(categoriaSelecionada === 'Utensílios de limpeza e higiene'){
        fetchUrl = 'http://localhost:3000/uploadlimpeza';
    } else if(categoriaSelecionada === 'Utensílios Domésticos'){
        fetchUrl = 'http://localhost:3000/uploadDomest';
    } else {
        fetchUrl = 'http://localhost:3000/uploadFest';
    }
    console.log(fetchUrl);
};

document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const file = document.getElementById('imageFile').files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(fetchUrl, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.imageUrl;
            
            // Atualize o campo de input com o URL da imagem
            document.querySelector('.produtoImgUrl').value = imageUrl;
            
            console.log('Upload e obtenção de URL concluídos com sucesso.');
        } else {
            console.error('Erro durante o upload ou obtenção de URL.');
        }
    } catch (error) {
        console.error('Erro durante o upload ou obtenção de URL:', error);
    }
});





