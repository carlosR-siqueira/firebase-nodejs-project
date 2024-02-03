
async function uploadDesc(event) {
    event.preventDefault();

    const file = document.getElementById("imageFileDesc").files[0];

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:3000/uploadDesc', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.imageUrl;

            // Atualize o campo de input com o URL da imagem
            document.querySelector('.produtoImgUrl').value = imageUrl;

            console.log("Upload e obtenção de URL concluídos com sucesso.");
        } else {
            alert(' ERRO! - Nenhum arquivo de imagem escolhido! Insira um arquivo de imagem antes de Enviar.')
            console.error("Erro durante o upload ou obtenção de URL.");
        }
    } catch (error) {
        console.error("Erro durante o upload ou obtenção de URL:", error);
    }

}


async function uploadDomest(event) {
   
    event.preventDefault();
    const file = document.getElementById("imageFile").files[0];

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:3000/uploadDomest', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.imageUrl;

            // Atualize o campo de input com o URL da imagem
            document.querySelector('.produtoImgUrl').value = imageUrl;

            console.log("Upload e obtenção de URL concluídos com sucesso.");
        } else {
            alert(' ERRO! - Nenhum arquivo de imagem escolhido! Insira um arquivo de imagem antes de Enviar.')
            console.error("Erro durante o upload ou obtenção de URL.");
        }
    } catch (error) {
        console.error("Erro durante o upload ou obtenção de URL:", error);
    }

}



async function uploadFest(event) {
    event.preventDefault();

    const file = document.getElementById("imageFileFest").files[0];

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:3000/uploadFest', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.imageUrl;

            // Atualize o campo de input com o URL da imagem
            const imgUrlInput = document.querySelector('.produtoImgUrl')
            imgUrlInput.value = imageUrl;

            console.log("Upload e obtenção de URL concluídos com sucesso.");
        } else {
            alert(' ERRO! - Nenhum arquivo de imagem escolhido! Insira um arquivo de imagem antes de Enviar.')
            console.error("Erro durante o upload ou obtenção de URL.");
        }
    } catch (error) {

        console.error("Erro durante o upload ou obtenção de URL:", error);
    }

}

// const uploadImgLimpeza = document.querySelector("#uploadFormLimpeza").addEventListener("submit", uploadLimpeza)
async function uploadLimpeza(event) {
    event.preventDefault();

    const file = document.getElementById("imageFileLimpeza").files[0];

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:3000/uploadLimpeza', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.imageUrl;

            // Atualize o campo de input com o URL da imagem
            document.querySelector('.produtoImgUrl').value = imageUrl;

            console.log("Upload e obtenção de URL concluídos com sucesso.");
        } else {
            alert(' ERRO! - Nenhum arquivo de imagem escolhido! Insira um arquivo de imagem antes de Enviar.')
            console.error("Erro durante o upload ou obtenção de URL.");
        }
    } catch (error) {
        console.error("Erro durante o upload ou obtenção de URL:", error);
    }

}
