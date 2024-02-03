document.addEventListener('click', function (event) {
    if (event.target.classList.contains('editarBtn')) {
        const produtoId = event.target.getAttribute('data-id');
        console.log(produtoId);
        const produtoImgUrl = document.querySelector('.produtoImgUrlEdt');
        const excluirImagemBtn = document.querySelector('.excluir-imagem');
    
    



        const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Descartáveis/${produtoId}.json`;

        const modal = document.querySelector('.modal-edit');
        modal.classList.add('active'); // Mostra a janela modal

        const closeModalBtn = document.querySelector('.close-modal-btn');
        const confirmBtn = document.querySelector('.update-desc-btn');
        const cancelBtn = document.querySelector('.cancel-btn');

        closeModalBtn.onclick = function () {
            modal.classList.remove('active');
        };
        confirmBtn.addEventListener('click', function () {
            // Obtém os elementos do DOM dentro do event listener
            var produtoName = document.querySelector('.produtoName');
            var produtoDescription = document.querySelector('.produtoDescription');
            var produtoPrice = document.querySelector('.produtoPrice');
            var produtoImgUrl = document.querySelector('.produtoImgUrlEdt');
            var produtoCategory = document.querySelector('.selectCategory');

            const produtoCategoryValue = produtoCategory.options[produtoCategory.selectedIndex].value;



            // Busca os dados atuais do banco
            fetch(url)
                .then(response => response.json())
                .then(data => {

                    // Cria um objeto com os campos que foram modificados
                    const updatedData = {
                        nome: produtoName.value || data.nome,
                        descricao: produtoDescription.value || data.descricao,
                        preco: produtoPrice.value || data.preco,
                        imagemUrl: produtoImgUrl.value || data.imagemUrl,
                        categoria: produtoCategoryValue || data.categoria
                    };

                    // Envia a solicitação PUT apenas se houver dados para atualizar
                    fetch(url, {
                        method: 'PUT',
                        body: JSON.stringify(updatedData),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(data => {

                            console.log('Dados salvos com sucesso:', data);
                            alert('Produto salvo com sucesso!');
                            modal.classList.remove('active');
                            location.reload()
                        })
                        .catch(error => {
                            console.error('Erro ao salvar os dados:', error);
                        });
                })
                .catch(error => {
                    console.error('Erro ao buscar os dados:', error);
                });
        });

        cancelBtn.addEventListener('click', function () {
            modal.classList.remove('active'); // Esconde a janela modal
        });
    }
});


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('editarBtn')) {
        const produtoId = event.target.getAttribute('data-id');
        console.log(produtoId);

        const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Artigos Para Festas/${produtoId}.json`;

        const modal = document.querySelector('.modal-edit');
        modal.classList.add('active'); // Mostra a janela modal

        const closeModalBtn = document.querySelector('.close-modal-btn');
        const confirmBtn = document.querySelector('.update-fest-btn');
        const cancelBtn = document.querySelector('.cancel-btn');

        closeModalBtn.onclick = function () {
            modal.classList.remove('active');
        };
        confirmBtn.addEventListener('click', function () {
            // Obtém os elementos do DOM dentro do event listener
            var produtoName = document.querySelector('.produtoName');
            var produtoDescription = document.querySelector('.produtoDescription');
            var produtoPrice = document.querySelector('.produtoPrice');
            var produtoImgUrl = document.querySelector('.produtoImgUrlEdt');
            var produtoCategory = document.querySelector('.selectCategory');

            const produtoCategoryValue = produtoCategory.options[produtoCategory.selectedIndex].value;

            // Busca os dados atuais do banco
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Cria um objeto com os campos que foram modificados
                    const updatedData = {
                        nome: produtoName.value || data.nome,
                        descricao: produtoDescription.value || data.descricao,
                        preco: produtoPrice.value || data.preco,
                        imagemUrl: produtoImgUrl.value || data.imagemUrl,
                        categoria: produtoCategoryValue || data.categoria
                    };

                    // Envia a solicitação PUT apenas se houver dados para atualizar
                    fetch(url, {
                        method: 'PUT',
                        body: JSON.stringify(updatedData),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Dados salvos com sucesso:', data);
                            alert('Produto salvo com sucesso!');
                            modal.classList.remove('active');
                            location.reload()
                        })
                        .catch(error => {
                            console.error('Erro ao salvar os dados:', error);
                        });
                })
                .catch(error => {
                    console.error('Erro ao buscar os dados:', error);
                });
        });

        cancelBtn.addEventListener('click', function () {
            modal.classList.remove('active'); // Esconde a janela modal
        });
    }
});


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('editarBtn')) {
        const produtoId = event.target.getAttribute('data-id');
        console.log(produtoId);



        const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios Domésticos/${produtoId}.json`;


        const modal = document.querySelector('.modal-edit');
        modal.classList.add('active'); // Mostra a janela modal

        const closeModalBtn = document.querySelector('.close-modal-btn');
        const confirmBtn = document.querySelector('.update-domest-btn');
        const cancelBtn = document.querySelector('.cancel-btn');

        closeModalBtn.onclick = function () {
            modal.classList.remove('active');
        };
        confirmBtn.addEventListener('click', function () {
            // Obtém os elementos do DOM dentro do event listener
            var produtoName = document.querySelector('.produtoName');
            var produtoDescription = document.querySelector('.produtoDescription');
            var produtoPrice = document.querySelector('.produtoPrice');
            var produtoImgUrl = document.querySelector('.produtoImgUrlEdt');
            var produtoCategory = document.querySelector('.selectCategory');

            const produtoCategoryValue = produtoCategory.options[produtoCategory.selectedIndex].value;

            // Busca os dados atuais do banco
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Cria um objeto com os campos que foram modificados
                    const updatedData = {
                        nome: produtoName.value || data.nome,
                        descricao: produtoDescription.value || data.descricao,
                        preco: produtoPrice.value || data.preco,
                        imagemUrl: produtoImgUrl.value || data.imagemUrl,
                        categoria: produtoCategoryValue || data.categoria
                    };

                    // Envia a solicitação PUT apenas se houver dados para atualizar
                    fetch(url, {
                        method: 'PUT',
                        body: JSON.stringify(updatedData),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Dados salvos com sucesso:', data);
                            alert('Produto salvo com sucesso!');
                            modal.classList.remove('active');
                            location.reload()
                        })
                        .catch(error => {
                            console.error('Erro ao salvar os dados:', error);
                        });
                })
                .catch(error => {
                    console.error('Erro ao buscar os dados:', error);
                });
        });

        cancelBtn.addEventListener('click', function () {
            modal.classList.remove('active'); // Esconde a janela modal
        });
    }
});


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('editarBtn')) {
        const produtoId = event.target.getAttribute('data-id');
        console.log(produtoId);


        const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios de limpeza e higiene/${produtoId}.json`;



        const modal = document.querySelector('.modal-edit');
        modal.classList.add('active'); // Mostra a janela modal

        const closeModalBtn = document.querySelector('.close-modal-btn');
        const confirmBtn = document.querySelector('.update-limpeza-btn');
        const cancelBtn = document.querySelector('.cancel-btn');

        closeModalBtn.onclick = function () {
            modal.classList.remove('active');
        };
        confirmBtn.addEventListener('click', function () {
            // Obtém os elementos do DOM dentro do event listener
            var produtoName = document.querySelector('.produtoName');
            var produtoDescription = document.querySelector('.produtoDescription');
            var produtoPrice = document.querySelector('.produtoPrice');
            var produtoImgUrl = document.querySelector('.produtoImgUrlEdt');
            var produtoCategory = document.querySelector('.selectCategory');

            const produtoCategoryValue = produtoCategory.options[produtoCategory.selectedIndex].value;



            // Busca os dados atuais do banco
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Cria um objeto com os campos que foram modificados
                    const updatedData = {
                        nome: produtoName.value || data.nome,
                        descricao: produtoDescription.value || data.descricao,
                        preco: produtoPrice.value || data.preco,
                        imagemUrl: produtoImgUrl.value || data.imagemUrl,
                        categoria: produtoCategoryValue || data.categoria
                    };

                    // Envia a solicitação PUT apenas se houver dados para atualizar
                    fetch(url, {
                        method: 'PUT',
                        body: JSON.stringify(updatedData),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Dados salvos com sucesso:', data);
                            alert('Produto salvo com sucesso!');
                            modal.classList.remove('active');
                            location.reload()
                        })
                        .catch(error => {
                            console.error('Erro ao salvar os dados:', error);
                        });
                })
                .catch(error => {
                    console.error('Erro ao buscar os dados:', error);
                });
        });

        cancelBtn.addEventListener('click', function () {
            modal.classList.remove('active'); // Esconde a janela modal
        });
    }
});

// edit domest img
(() => {

    let fetchUrl = ''; // Declarando a variável fetchUrl fora do escopo das funções
    function selectCategory() {
        // Obtenha o valor da categoria selecionada
        var produtoCategory = document.querySelector('.selectCategory')
        const categoriaSelecionada = produtoCategory.options[produtoCategory.selectedIndex].value;


        // Defina a nova URL com base na categoria selecionada
        if (categoriaSelecionada === 'Descartáveis') {
            fetchUrl = 'http://localhost:3000/uploadDesc';
        } else if (categoriaSelecionada === 'Utensílios de limpeza e higiene') {
            fetchUrl = 'http://localhost:3000/uploadlimpeza';
        } else if (categoriaSelecionada === 'Utensílios Domésticos') {
            fetchUrl = 'http://localhost:3000/uploadDomest';
        } else {
            fetchUrl = 'http://localhost:3000/uploadFest';
        }

        // Faz algo com fetchUrl, por exemplo, imprime no console
        console.log(fetchUrl);
    }


    document.getElementById("uploadFormEdt").addEventListener("submit", async function (event) {
        event.preventDefault();

        const file = document.getElementById("imageFileEdt").files[0];

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
                document.querySelector('.produtoImgUrlEdt').value = imageUrl;
                

                console.log("Upload e obtenção de URL concluídos com sucesso.");
            } else {
                

                console.error("Erro durante o upload ou obtenção de URL.");
            }
        } catch (error) {
            console.error("Erro durante o upload ou obtenção de URL:", error);
        }
    })
    selectCategory()
})();







