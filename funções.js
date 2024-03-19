const produtos = [];
var ad;

function inicia(){
    add(produtos);
}

function add (produtos){

    const nome = prompt ("Nome do produto: ");
    const preco = prompt ("Preço do produto: ");
    const id = prompt ("Código do produto: ");
    produtos.push ({nome,preco,id,descricao});
}

function research (produtos){
    let busca = document.getElementById("pesquisa")

    produtos.forEach( item => {
            if (item.id.includes(busca)){
                alert (`Produto: ${item.nome}\nPreço: ${item.preco}\nDescrição: ${item.descricao}`);
            } else{
                alert ('Nao tem produto!');
            }
    })
}

function update(produtos, atualizar){
    let atualizar = prompt ("Informe o código do produto que será atualizado: ")
    alert(update(produtos, atualizar));

    produtos.forEach(item => {
        if (item.id.includes(atualizar)){
            const newName = prompt ("Nome do produto: ");
            const newPreco = prompt ("Preço do produto: ");
            const newId = prompt ("Código do produto: ");
            const newDescric = prompt ("Descrição: ");

            item.nome = newName;
            item.preco = newPreco;
            item.id = newId;
            item.descricao = newDescric;

            return `Nome: ${item.nome}
                    Preco: ${item.preco}
                    Id: ${item.id}
                    Descric: ${item.descricao}`

        }
    })
}

function exibir (produtos){
    /*alert(`== Produtos ==\n ${JSON.stringify(produtos)}\n`);*/
    
    let mostra = "== Produtos == \n";
            for (let i = 0; i < produtos.length; i++) {
                mostra += `Produto: ${produtos[i].nome} - Preco: ${produtos[i].preco} - Id: ${produtos[i].id} - Descrição: ${produtos[i].descricao} \n`;
            }
                
    return alert(mostra);
}

function remover (produtos, remove){

    let remove = prompt ("Informe o código do produto que será removido: ");
    alert(remover(produtos,remove));

    produtos.forEach(item => {
        if (item.id.includes(remove)){
            const indice = produtos.indexOf(item);
            produtos.splice(indice,1); 

            return 'Item removido com sucesso!'

        }
    })
}
