const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const app = express()
app.use(bodyParser.json());

const multer = require('multer'); // Middleware para lidar com o upload de arquivos
const cors = require('cors');

app.use(cors());



const serviceAccount = require('./chave.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://teste-908b8-default-rtdb.firebaseio.com",
    storageBucket: "teste-908b8.appspot.com"
});




//Ler toda base de dados : Produtos

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('Nenhum arquivo enviado.');
        }

        const bucket = admin.storage().bucket();
        const fileName = `${Date.now()}_${file.originalname}`;
        const fileUpload = bucket.file(fileName);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on('error', (error) => {
            res.status(500).send('Erro durante o upload do arquivo.');
        });

        blobStream.on('finish', async () => {
            // Obtendo o token de autenticação para acessar a imagem
            const [url] = await fileUpload.getSignedUrl({
                action: 'read',
                expires: '03-09-2491' // Defina uma data de expiração adequada para o URL
            });

            res.json({ imageUrl: url });
        });

        blobStream.end(file.buffer);
    } catch (error) {
        console.error('Erro durante o upload:', error);
        res.status(500).send('Erro durante o upload do arquivo.');
    }
});

app.post('/uploadDesc', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('Nenhum arquivo enviado.');
        }

        const bucket = admin.storage().bucket();
        const fileName = `Descartáveis/${Date.now()}_${file.originalname}`;
        const fileUpload = bucket.file(fileName);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on('error', (error) => {
            res.status(500).send('Erro durante o upload do arquivo.');
        });

        blobStream.on('finish', async () => {
            // Obtendo o token de autenticação para acessar a imagem
            const [url] = await fileUpload.getSignedUrl({
                action: 'read',
                expires: '03-09-2491' // Defina uma data de expiração adequada para o URL
            });

            res.json({ imageUrl: url });
        });

        blobStream.end(file.buffer);
    } catch (error) {
        console.error('Erro durante o upload:', error);
        res.status(500).send('Erro durante o upload do arquivo.');
    }
});

app.post('/uploadDomest', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('Nenhum arquivo enviado.');
        }

        const bucket = admin.storage().bucket();
        const fileName = `Utensílios Domésticos/${Date.now()}_${file.originalname}`;
        const fileUpload = bucket.file(fileName);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on('error', (error) => {
            res.status(500).send('Erro durante o upload do arquivo.');
        });

        blobStream.on('finish', async () => {
            // Obtendo o token de autenticação para acessar a imagem
            const [url] = await fileUpload.getSignedUrl({
                action: 'read',
                expires: '03-09-2491' // Defina uma data de expiração adequada para o URL
            });

            res.json({ imageUrl: url });
        });

        blobStream.end(file.buffer);
    } catch (error) {
        console.error('Erro durante o upload:', error);
        res.status(500).send('Erro durante o upload do arquivo.');
    }
});
app.post('/uploadFest', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {

            return res.status(400).send('Nenhum arquivo enviado.');
        }

        const bucket = admin.storage().bucket();
        const fileName = `Artigos Para Festas/${Date.now()}_${file.originalname}`;
        const fileUpload = bucket.file(fileName);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on('error', (error) => {
            res.status(500).send('Erro durante o upload do arquivo.');
        });

        blobStream.on('finish', async () => {
            // Obtendo o token de autenticação para acessar a imagem
            const [url] = await fileUpload.getSignedUrl({
                action: 'read',
                expires: '03-09-2491' // Defina uma data de expiração adequada para o URL
            });

            res.json({ imageUrl: url });
        });

        blobStream.end(file.buffer);
    } catch (error) {
        console.error('Erro durante o upload:', error);
        res.status(500).send('Erro durante o upload do arquivo.');
    }
});
app.post('/uploadlimpeza', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('Nenhum arquivo enviado.');
        }

        const bucket = admin.storage().bucket();
        const fileName = `Utensílios de limpeza e higiene/${Date.now()}_${file.originalname}`;
        const fileUpload = bucket.file(fileName);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on('error', (error) => {
            res.status(500).send('Erro durante o upload do arquivo.');
        });

        blobStream.on('finish', async () => {
            // Obtendo o token de autenticação para acessar a imagem
            const [url] = await fileUpload.getSignedUrl({
                action: 'read',
                expires: '03-09-2491' // Defina uma data de expiração adequada para o URL
            });

            res.json({ imageUrl: url });
        });

        blobStream.end(file.buffer);
    } catch (error) {
        console.error('Erro durante o upload:', error);
        res.status(500).send('Erro durante o upload do arquivo.');
    }
});


app.get("/listar-arquivos", async (req, res) => {
    try {
        const [files] = await admin.storage().bucket().getFiles();

        const nomesArquivos = await Promise.all(files.map(async file => {
            const [url] = await file.getSignedUrl({
                action: 'read',
                expires: '01-01-2100', // Data de expiração do token de download (pode ser ajustada conforme necessário)
            });

            return {
                nome: file.name,
                url: url,
            };
        }));

        res.json(nomesArquivos);
    } catch (error) {
        console.error("Erro ao listar arquivos:", error);
        res.status(500).send("Erro ao listar arquivos.");
    }
});


//excluir imagem do storage

app.delete("/excluirImg/:pasta/:nomeArquivo", async (req, res) => {
    const { pasta, nomeArquivo } = req.params;

    try {
        // Verificar se o nome do arquivo é seguro (por exemplo, evitar caminhos relativos)
        // Implemente sua lógica de validação aqui se necessário
        const caminhoArquivo = `${pasta}/${nomeArquivo}`
        const arquivo = admin.storage().bucket().file(caminhoArquivo);
        await arquivo.delete();
        console.log(`Arquivo ${nomeArquivo} excluído com sucesso.`);
        res.status(200).send("Imagem excluída com sucesso.");
    } catch (err) {
        console.error("Erro ao excluir imagem:", err);
        res.status(500).send("Erro ao excluir imagem.")
    }
});







app.get("/produtos", (req, res) => {
    const produtosRef = admin.database().ref("produto");

    produtosRef.once('value')
        .then((snapshot) => {
            const produtos = [];

            snapshot.forEach((childSnapshot) => {
                const produto = childSnapshot.val();
                produto.id = childSnapshot.key;
                produtos.push(produto);
            });



            res.json(produtos); // Enviar a resposta como JSON
            console.log(produtos);
        })
        .catch((erro) => {
            res.status(500).json({ error: erro.message }); // Enviar erro como JSON
        });
});

app.get("/produtos/festa", (req, res) => {
    const produtosRef = admin.database().ref("produto/Artigos Para Festas");

    produtosRef.once('value')
        .then((snapshot) => {
            const produtos = [];

            snapshot.forEach((childSnapshot) => {
                const produto = childSnapshot.val();
                produto.id = childSnapshot.key;
                produtos.push(produto);
            });



            res.json(produtos); // Enviar a resposta como JSON
            console.log(produtos);
        })
        .catch((erro) => {
            res.status(500).json({ error: erro.message }); // Enviar erro como JSON
        });
});

app.get("/produtos/descartaveis", (req, res) => {
    const produtosRef = admin.database().ref("produto/Descartáveis");

    produtosRef.once('value')
        .then((snapshot) => {
            const produtos = [];

            snapshot.forEach((childSnapshot) => {
                const produto = childSnapshot.val();
                produto.id = childSnapshot.key;
                produtos.push(produto);
            });



            res.json(produtos); // Enviar a resposta como JSON
            console.log(produtos);
        })
        .catch((erro) => {
            res.status(500).json({ error: erro.message }); // Enviar erro como JSON
        });
});

app.get("/produtos/descartaveis/:id", (req, res) => {
    const id = req.params.id

    admin.database().ref(`produto/Descartáveis/${id}`).once('value')
        .then((snapshot) => {
            const produto = snapshot.val()
            produto.id = snapshot.key;
            res.send(produto)
        })
        .catch((erro) => {
            res.status(400).send(erro);
        })


})

app.get("/produtos/domesticos", (req, res) => {
    const produtosRef = admin.database().ref("produto/Utensílios Domésticos");

    produtosRef.once('value')
        .then((snapshot) => {
            const produtos = [];

            snapshot.forEach((childSnapshot) => {
                const produto = childSnapshot.val();
                produto.id = childSnapshot.key;
                produtos.push(produto);
            });



            res.json(produtos); // Enviar a resposta como JSON
            console.log(produtos);
        })
        .catch((erro) => {
            res.status(500).json({ error: erro.message }); // Enviar erro como JSON
        });
});

app.get("/produtos/limpeza", (req, res) => {
    const produtosRef = admin.database().ref("produto/Utensílios de limpeza e higiene");

    produtosRef.once('value')
        .then((snapshot) => {
            const produtos = [];

            snapshot.forEach((childSnapshot) => {
                const produto = childSnapshot.val();
                produto.id = childSnapshot.key;
                produtos.push(produto);
            });



            res.json(produtos); // Enviar a resposta como JSON
            console.log(produtos);
        })
        .catch((erro) => {
            res.status(500).json({ error: erro.message }); // Enviar erro como JSON
        });
});

app.get("/produtos/limpeza", (req, res) => {
    const produtosRef = admin.database().ref("produto/Utensílios de limpeza e higiene");

    produtosRef.once('value')
        .then((snapshot) => {
            const produtos = [];

            snapshot.forEach((childSnapshot) => {
                const produto = childSnapshot.val();
                produto.id = childSnapshot.key;
                produtos.push(produto);
            });



            res.json(produtos); // Enviar a resposta como JSON
            console.log(produtos);
        })
        .catch((erro) => {
            res.status(500).json({ error: erro.message }); // Enviar erro como JSON
        });
});

app.get("/pegarProduto/:id", (req, res) => {
    const id = req.params.id

    admin.database().ref(`produto/${id}`).once('value')
        .then((snapshot) => {
            const produto = snapshot.val()
            produto.id = snapshot.key;
            res.send(produto)
        })
        .catch((erro) => {
            res.status(400).send(error);
        })


})

app.post("/produto", (req, res) => {
    const produto = req.body

    admin.database().ref("produto").push(produto)
        .then(() => {
            res.status(200).send('Produto criado com sucesso')
        })
        .catch((err) => {
            res.status(500).send(erro);
        })
});


//add produtos por categorias

app.post("/produto/descartaveis", (req, res) => {
    const produto = req.body
    const id = req.params.id
    admin.database().ref("produto/Descartáveis").push(produto)
        .then(() => {
            res.status(200).send('Produto criada com sucesso')
        })
        .catch((err) => {
            res.status(500).send(erro);
        })
});
app.post("/produto/utensilios", (req, res) => {
    const produto = req.body

    admin.database().ref("produto/Utensílios Domésticos").push(produto)
        .then(() => {
            res.status(200).send('Produto criada com sucesso')
        })
        .catch((err) => {
            res.status(500).send(erro);
        })
});

app.post("/produto/festa", (req, res) => {
    const produto = req.body

    admin.database().ref("produto/Artigos Para Festas").push(produto)
        .then(() => {
            res.status(200).send('Produto criada com sucesso')
        })
        .catch((err) => {
            res.status(500).send(erro);
        })
});

app.post("/produto/limpeza", (req, res) => {
    const produto = req.body

    admin.database().ref("produto/Utensílios de limpeza e higiene").push(produto)
        .then(() => {
            res.status(200).send('Produto criada com sucesso')
        })
        .catch((err) => {
            res.status(500).send(erro);
        })
});
//Atualizar um novvo produto

app.post("/atualizar/:id", (req, res) => {
    const produto = req.body
    const id = req.params.id

    admin.database().ref(`produto/${id}`).update(produto)
        .then(() => {
            res.send("O produto foi atualizado com sucesso")
        })
        .catch((erro) => {
            res.status(500).send(erro)
        })

})

app.post("/atualizar/descartaveis/:id", (req, res) => {
    const produto = req.body
    const id = req.params.id

    admin.database().ref(`produto/Descartáveis/${id}`).update(produto)
        .then(() => {
            res.send("O produto foi atualizado com sucesso")
        })
        .catch((erro) => {
            res.status(500).send(erro)
        })

})

app.post("/atualizar/festa/:id", (req, res) => {
    const produto = req.body
    const id = req.params.id

    admin.database().ref(`produto/Artigos Para Festas/${id}`).update(produto)
        .then(() => {
            res.send("O produto foi atualizado com sucesso")
        })
        .catch((erro) => {
            res.status(500).send(erro)
        })

})

app.post("/atualizar/utensilios/:id", (req, res) => {
    const produto = req.body
    const id = req.params.id

    admin.database().ref(`produto/Utensílios Domésticos/${id}`).update(produto)
        .then(() => {
            res.send("O produto foi atualizado com sucesso")
        })
        .catch((erro) => {
            res.status(500).send(erro)
        })

})

app.post("/atualizar/limpeza/:id", (req, res) => {
    const produto = req.body
    const id = req.params.id

    admin.database().ref(`produto/Utensílios de limpeza e higiene/${id}`).update(produto)
        .then(() => {
            res.send("O produto foi atualizado com sucesso")
        })
        .catch((erro) => {
            res.status(500).send(erro)
        })

})

//deletar um novo produto


app.delete("/produto/:id", (req, res) => {
    const id = req.params.id

    admin.database().ref(`produto/${id}`).remove()
        .then(() => {
            res.send("O produto foi removido com sucesso")
        })
        .catch((error) => {
            res.status(500).send(erro);
        })

})

app.delete("/produto/festa/:id", (req, res) => {
    const id = req.params.id

    admin.database().ref(`produto/Artigos Para Festas/${id}`).remove()
        .then(() => {
            res.send("O produto foi removido com sucesso")
        })
        .catch((error) => {
            res.status(500).send(erro);
        })

})

app.delete("/produto/limpeza/:id", (req, res) => {
    const id = req.params.id

    admin.database().ref(`produto/Utensílios de limpeza e higiene/${id}`).remove()
        .then(() => {
            res.send("O produto foi removido com sucesso")
        })
        .catch((error) => {
            res.status(500).send(erro);
        })

})

app.delete("/produto/domest/:id", (req, res) => {
    const id = req.params.id

    admin.database().ref(`produto/Utensílios Domésticos/${id}`).remove()
        .then(() => {
            res.send("O produto foi removido com sucesso")
        })
        .catch((error) => {
            res.status(500).send(erro);
        })

})

app.delete("/produto/descartaveis/:id", (req, res) => {
    const id = req.params.id

    admin.database().ref(`produto/Descartáveis/${id}`).remove()
        .then(() => {
            res.send("O produto foi removido com sucesso")
        })
        .catch((error) => {
            res.status(500).send(erro);
        })

})

app.delete("/produto", (req, res) => {


    admin.database().ref('produto').remove()
        .then(() => {
            res.send("O produto foi removido com sucesso")
        })
        .catch((error) => {
            res.status(500).send(erro);
        })

})










//LER NO REALTIME DATE BASE COPO
app.get("/ler", (req, res) => {
    return res.send("OK")
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor inicando na porta ${PORT}`);
})

//CRIAR NO REALTIME DATE BASE COPO
//DELETAR NO REALTIME DATE BASE COPO
//EDITAR NO REALTIME DATE BASE COPO


