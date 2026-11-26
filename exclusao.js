const idAlterar = localStorage.getItem(`idAlterar`)

const esseCodigo = localStorage.getItem(`codigo${idAlterar}`)
const esseNome = localStorage.getItem(`nome${idAlterar}`)
const esseDesc = localStorage.getItem(`desc${idAlterar}`)
const essePreco = localStorage.getItem(`preco${idAlterar}`)
const esseImagem = localStorage.getItem(`imagem${idAlterar}`)

window.onload = function() {
    document.getElementById("lugarcodigo").innerText = esseCodigo
    document.getElementById("nome").innerText = esseNome
    document.getElementById("descricao").innerText = esseDesc
    document.getElementById("preco").innerText = `R$${essePreco}`
    document.getElementById("imgproduto").src = esseImagem

    requestAnimationFrame(() => {
        setTimeout(() => {
            const resposta = window.confirm("Deseja mesmo excluir esse produto?")
            if (resposta === true) {
                localStorage.removeItem(`codigo${idAlterar}`)
                localStorage.removeItem(`nome${idAlterar}`)
                localStorage.removeItem(`desc${idAlterar}`)
                localStorage.removeItem(`preco${idAlterar}`)
                localStorage.removeItem(`imagem${idAlterar}`)
                window.location.href = "listagem.html"
            } else {
                window.location.href = "listagem.html"
            }
        }, 50)
    })
}