const baseUrl = "./produtos.json"


const response = fetch('./main.js', {
    method: 'POST',
    headers: {
        'content-type':'application/json'
    },
    body: JSON.stringify(data)
});
