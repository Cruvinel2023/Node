import express from "express";
import ConectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await ConectaDatabase ();
conexao.on("error", (erro) => {
    console.error ("erro de conexão", erro);
}); 

conexao.once ("open", () => {
console.log("Conexão com o Banco de Dados feita com sucesso!");
});

const app = express();
routes (app);



// Rotas


//app.get ("/livros", async (req, res) =>
//...{   const listaLivros = await livro.find ();
   //... res.status(200).json(listaLivros);});

app.get("/livros/:id", (req, res) =>
{ const index = buscalivros(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) =>
{
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso!")

});

app.put("/livros/:id", (req, res) =>
{ const index = buscalivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) =>
{ const index = buscalivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso!")

})

export default app;


//mongodb+srv://ranierycruvinel:<db_password>@cluster0.x9e7ile.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0