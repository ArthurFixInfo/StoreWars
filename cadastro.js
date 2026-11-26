const form = document.getElementById("form") 
const imgproduto = document.getElementById("imgproduto")
const imagem = document.getElementById("imagem")
let id = localStorage.getItem("id") ?? "0";

imagem.addEventListener("change", (event) => {
    const arquivo = event.target.files[0];
    
    if (arquivo) {
        imgproduto.src = URL.createObjectURL(arquivo);
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const nome = document.getElementById("nome").value.trim()
    const desc = document.getElementById("descricao").value.trim()
    const preco = document.getElementById("preco").value
    
    

    function validar() {
        if ([nome, desc, preco].includes("") || imagem.files.length === 0) {
            alert("Todos os campos devem ser preenchidos!")
            return false
        }
        if (nome.length < 5) {
            alert("O nome do produto não pode ter menos de 5 caracteres!")
            return false
        }
        if (preco <= 0) {
            alert("Insira um preço válido!")
            return false
        }
        id ++
        console.log(id)
        return true

    }

    function gerarCodigo() {
        const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const primeiroCaractere = Math.floor(Math.random() * 10).toString()
        const segundoCaractere = alfabeto[Math.floor(Math.random() * 26)]
        const terceiroCaractere = Math.floor(Math.random() * 10).toString()
        const quartoCaractere = alfabeto[Math.floor(Math.random() * 26)]
        return primeiroCaractere+segundoCaractere+terceiroCaractere+quartoCaractere
    }

    function salvarImagem() {
        const arquivo = imagem.files[0]
        const leitor = new FileReader()
        leitor.onload = function(event) {
            const imagemBase64 = event.target.result
            localStorage.setItem(`imagem${id}`,imagemBase64)
        }
        leitor.readAsDataURL(arquivo);
    }

    if (validar()) {
        const codigo = gerarCodigo();
        localStorage.setItem("id",id)
        localStorage.setItem(`codigo${id}`, codigo)
        localStorage.setItem(`nome${id}`, nome)
        localStorage.setItem(`desc${id}`, desc)
        localStorage.setItem(`preco${id}`, preco)
        salvarImagem()

    }


})

form.addEventListener('reset', (event) => {
    const resposta = window.confirm("Confirma limpar o cadastro desse produto?")
    if (resposta === false) {
        event.preventDefault()
    }
})