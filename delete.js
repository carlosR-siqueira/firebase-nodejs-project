

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('excluirBtn')) {
        const produtoId = event.target.getAttribute('data-id');
        const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/${produtoId}.json`;
        const modal = document.querySelector('.modal');
        modal.classList.add('active'); // Mostra a janela modal

        const confirmBtn = document.getElementById('confirmBtn');
        const cancelBtn = document.getElementById('cancelBtn');

        confirmBtn.addEventListener('click', function () {

            fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erro ao excluir o produto');
                    }
                    // alert('Produto Excuído Com Sucesso!')
                    event.target.closest('.card').remove();


                })
                .catch((err) => {
                    console.error(err);
                });


            modal.classList.remove('active'); // Esconde a janela modal
        });

        cancelBtn.addEventListener('click', function () {
            modal.classList.remove('active'); // Esconde a janela modal
        });
    }
});

// document.addEventListener('click', function (event) {
//     if (event.target.classList.contains('excluirBtn')) {
//         const produtoId = event.target.getAttribute('data-id');
//         const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Artigos Para Festas/${produtoId}.json`;
//         const modal = document.querySelector('.modal');
//         modal.classList.add('active'); // Mostra a janela modal

//         const confirmBtn = document.getElementById('confirmBtn');
//         const cancelBtn = document.getElementById('cancelBtn');

//         confirmBtn.addEventListener('click', function () {

//             fetch(url, {
//                 method: 'DELETE',
//                 mode: 'cors',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error('Erro ao excluir o produto');
//                     }
//                     event.target.closest('.card').remove();

//                 })
//                 .catch((err) => {
//                     console.error(err);
//                 });


//             modal.classList.remove('active'); // Esconde a janela modal
//         });

//         cancelBtn.addEventListener('click', function () {
//             modal.classList.remove('active'); // Esconde a janela modal
//         });
//     }
// });


// document.addEventListener('click', function (event) {
//     if (event.target.classList.contains('excluirBtn')) {
//         const produtoId = event.target.getAttribute('data-id');
//         const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios Domésticos/${produtoId}.json`;

//         const modal = document.querySelector('.modal');
//         modal.classList.add('active'); // Mostra a janela modal

//         const confirmBtn = document.getElementById('confirmBtn');
//         const cancelBtn = document.getElementById('cancelBtn');

//         confirmBtn.addEventListener('click', function () {

//             fetch(url, {
//                 method: 'DELETE',
//                 mode: 'cors',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error('Erro ao excluir o produto');
//                     }
//                     event.target.closest('.card').remove();

//                 })
//                 .catch((err) => {
//                     console.error(err);
//                 });


//             modal.classList.remove('active'); // Esconde a janela modal
//         });

//         cancelBtn.addEventListener('click', function () {
//             modal.classList.remove('active'); // Esconde a janela modal
//         });
//     }
// });


// document.addEventListener('click', function (event) {
//     if (event.target.classList.contains('excluirBtn')) {
//         const produtoId = event.target.getAttribute('data-id');
//         const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios de limpeza e higiene/${produtoId}.json`;


//         const modal = document.querySelector('.modal');
//         modal.classList.add('active'); // Mostra a janela modal

//         const confirmBtn = document.getElementById('confirmBtn');
//         const cancelBtn = document.getElementById('cancelBtn');

//         confirmBtn.addEventListener('click', function () {

//             fetch(url, {
//                 method: 'DELETE',
//                 mode: 'cors',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error('Erro ao excluir o produto');
//                     }
//                     event.target.closest('.card').remove();

//                 })
//                 .catch((err) => {
//                     console.error(err);
//                 });


//             modal.classList.remove('active'); // Esconde a janela modal
//         });

//         cancelBtn.addEventListener('click', function () {
//             modal.classList.remove('active'); // Esconde a janela modal
//         });
//     }
// });





// Excluir arquivo ao clicar no botão "Excluir Imagem"

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('excluirBtn')) {
        const produtoId = event.target.getAttribute('data-id');
        const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Descartáveis/${produtoId}.json`;
        const modal = document.querySelector('.modal');
        modal.classList.add('active'); // Mostra a janela modal

        const confirmBtn = document.getElementById('confirmBtn');
        const cancelBtn = document.getElementById('cancelBtn');

        confirmBtn.addEventListener('click', function () {

            fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erro ao excluir o produto');
                    }
                    // alert('Produto Excuído Com Sucesso!')
                    event.target.closest('.card').remove();


                })
                .catch((err) => {
                    console.error(err);
                });


            modal.classList.remove('active'); // Esconde a janela modal
        });

        cancelBtn.addEventListener('click', function () {
            modal.classList.remove('active'); // Esconde a janela modal
        });
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('excluirBtn')) {
        const produtoId = event.target.getAttribute('data-id');
        const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Artigos Para Festas/${produtoId}.json`;
        const modal = document.querySelector('.modal');
        modal.classList.add('active'); // Mostra a janela modal

        const confirmBtn = document.getElementById('confirmBtn');
        const cancelBtn = document.getElementById('cancelBtn');

        confirmBtn.addEventListener('click', function () {

            fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erro ao excluir o produto');
                    }
                    event.target.closest('.card').remove();

                })
                .catch((err) => {
                    console.error(err);
                });


            modal.classList.remove('active'); // Esconde a janela modal
        });

        cancelBtn.addEventListener('click', function () {
            modal.classList.remove('active'); // Esconde a janela modal
        });
    }
});


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('excluirBtn')) {
        const produtoId = event.target.getAttribute('data-id');
        const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios Domésticos/${produtoId}.json`;

        const modal = document.querySelector('.modal');
        modal.classList.add('active'); // Mostra a janela modal

        const confirmBtn = document.getElementById('confirmBtn');
        const cancelBtn = document.getElementById('cancelBtn');

        confirmBtn.addEventListener('click', function () {

            fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erro ao excluir o produto');
                    }
                    event.target.closest('.card').remove();

                })
                .catch((err) => {
                    console.error(err);
                });


            modal.classList.remove('active'); // Esconde a janela modal
        });

        cancelBtn.addEventListener('click', function () {
            modal.classList.remove('active'); // Esconde a janela modal
        });
    }
});


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('excluirBtn')) {
        const produtoId = event.target.getAttribute('data-id');
        const url = `https://teste-908b8-default-rtdb.firebaseio.com/produto/Utensílios de limpeza e higiene/${produtoId}.json`;


        const modal = document.querySelector('.modal');
        modal.classList.add('active'); // Mostra a janela modal

        const confirmBtn = document.getElementById('confirmBtn');
        const cancelBtn = document.getElementById('cancelBtn');

        confirmBtn.addEventListener('click', function () {

            fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erro ao excluir o produto');
                    }
                    event.target.closest('.card').remove();

                })
                .catch((err) => {
                    console.error(err);
                });


            modal.classList.remove('active'); // Esconde a janela modal
        });

        cancelBtn.addEventListener('click', function () {
            modal.classList.remove('active'); // Esconde a janela modal
        });
    }
});





// Excluir imagem ao clicar no botão "Excluir Imagem"


document.querySelector('.container-content').addEventListener('click', async function (event) {
    if (event.target.classList.contains('editarBtn')) {
        const card = event.target.closest('.card');
        const image = card.querySelector('img');
        const imgUrl = image.getAttribute('src');
        const partesDoUrl = imgUrl.split('/');
        const imgName = partesDoUrl[partesDoUrl.length - 1].split('?')[0];
        const urlInput = document.querySelector('.produtoImgUrlEdt');
        urlInput.value = imgUrl;
        
        
        var produtoCategory = document.querySelector('.selectCategory')
        const categoriaSelect = produtoCategory.options[produtoCategory.selectedIndex].value;

        const produtoImgUrl = document.querySelector('.produtoImgUrlEdt');
        const excluirImagemBtn = document.querySelector('.excluir-imagem');
    
        excluirImagemBtn.addEventListener('mousemove', function () {
            if (produtoImgUrl.value.trim() === '') {
                excluirImagemBtn.classList.add('block-excluir-imagem')
                excluirImagemBtn.disabled = true;
            } else {
                excluirImagemBtn.classList.remove('block-excluir-imagem')

                excluirImagemBtn.disabled = false;
            }
        });


        let fetchUrl = '';

        if (categoriaSelect === 'Descartáveis') {
            fetchUrl = `http://localhost:3000/excluirImg/Descartáveis/${imgName}`;
        } else if (categoriaSelect === 'Utensílios de limpeza e higiene') {
            fetchUrl = `http://localhost:3000/excluirImg/Utensílios de limpeza e higiene/${imgName}`;
        } else if (categoriaSelect === 'Utensílios Domésticos') {
            fetchUrl = `http://localhost:3000/excluirImg/Utensílios Domésticos/${imgName}`;
        } else {
            fetchUrl = `http://localhost:3000/excluirImg/Artigos Para Festas/${imgName}`;
        }
        console.log(imgName);
        console.log(fetchUrl);

      

        document.querySelector('.excluir-imagem').addEventListener('click', async function (event) {

            try {
                const response = await fetch(fetchUrl, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    urlInput.value = ' ';
                    alert("Imagem excluída com sucesso.");
                } else {
                    throw new Error('Erro ao excluir imagem do storage');
                }
            } catch (err) {
                console.error(err);
            }
        }
        )
    }
})












