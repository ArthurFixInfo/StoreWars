const form = document.getElementById("form") 

const imgproduto = document.getElementById("imgproduto")
const imagem = document.getElementById("imagem")
const idAlterar = localStorage.getItem(`idAlterar`)

const esseCodigo = localStorage.getItem(`codigo${idAlterar}`)
const esseNome = localStorage.getItem(`nome${idAlterar}`)
const esseDesc = localStorage.getItem(`desc${idAlterar}`)
const essePreco = localStorage.getItem(`preco${idAlterar}`)
const esseImagem = localStorage.getItem(`imagem${idAlterar}`)

window.onload = function() {
    document.getElementById("lugarcodigo").innerText = esseCodigo
    document.getElementById("nome").value = esseNome
    document.getElementById("descricao").value = esseDesc
    document.getElementById("preco").value = essePreco
    document.getElementById("imgproduto").src = esseImagem
}


imagem.addEventListener("change", (event) => {
    const arquivo = event.target.files[0]
    
    if (arquivo) {
        imgproduto.src = URL.createObjectURL(arquivo)
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const nome = document.getElementById("nome").value.trim()
    const desc = document.getElementById("descricao").value.trim()
    const preco = document.getElementById("preco").value
    
    

    function validar() {
        if ([nome, desc, preco].includes("")) {
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
        return true

    }

    function salvarImagem() {
        const arquivo = imagem.files[0]

        if (arquivo) {
            const leitor = new FileReader()

            leitor.onload = function(event) {
                const imagemBase64 = event.target.result
                localStorage.setItem(`imagem${idAlterar}`, imagemBase64)
                window.location.href = "listagem.html" // Só redireciona após salvar
            }

            leitor.readAsDataURL(arquivo)
        } else {
            window.location.href = "listagem.html"
        }
    }


})

form.addEventListener('reset', (event) => {
    event.preventDefault()
    window.location.href = "listagem.html"
})
