function renderizarTabela() {
    const tbody = document.querySelector('#tabelaProdutos tbody')
    tbody.innerHTML = ''

    const id = localStorage.getItem("id")
    let preenchida = false

    for (i=1;i<=id;i++) {
        const codigo = localStorage.getItem(`codigo${i}`)
        if (codigo == null) {
            continue
        }
        preenchida = true
        const nome = localStorage.getItem(`nome${i}`)
        const desc = localStorage.getItem(`desc${i}`)
        const preco = localStorage.getItem(`preco${i}`)
        const imagem = localStorage.getItem(`imagem${i}`)



        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td><img src="${imagem}" alt="${escapeHtml(nome)}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;"></td>
        <td>${escapeHtml(codigo)}</td>
        <td>${escapeHtml(nome)}</td>
        <td>${escapeHtml(desc)}</td>
        <td>R$ ${Number(preco).toFixed(2)}</td>
        <td><button id="editar" onclick="alteracao(${i})">Editar</button><button id="excluir" onclick="exclusao(${i})">Excluir</button></td>
        `
        tbody.appendChild(tr)
    }




    if (!preenchida) {
        const tr = document.createElement('tr')
        tr.innerHTML = '<td colspan="5" style="text-align: center;">Nenhum registro</td>'
        tbody.appendChild(tr)
        return
    }



}


function escapeHtml(str) {
    if (!str && str !== 0) return '';
    return String(str)
        .replaceAll('&','&amp;')
        .replaceAll('<','&lt;')
        .replaceAll('>','&gt;')
        .replaceAll('"','&quot;')
        .replaceAll("'",'&#39;')
}

function alteracao(indice) {
    localStorage.setItem("idAlterar",indice)
    window.location.href = "alteracao.html";

}

function exclusao(indice) {
    localStorage.setItem("idAlterar",indice)
    window.location.href = "exclusao.html";

}

renderizarTabela()