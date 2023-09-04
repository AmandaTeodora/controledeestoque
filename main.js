const baseUrl = "./produtos.json"
const conteudo_tabela = document.querySelector('.conteudo tbody')

async Function Request() {
    try{
        const response = await fetch(baseUrl);
        return response.json();
    }catch(e) {
        console.error(e);
    };
};

Request().then(function(response) {
    console.log(response)



})
