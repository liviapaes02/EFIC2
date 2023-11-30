function send(){
    const name = parseFloat (document.getElementById("nome").value);
    const send = parseFloat (document.getElementById("email").value);
    const address = parseFloat (document.getElementById("endereço").value);
    const telephone = parseFloat (document.getElementById("contato").value);
    const comments = parseFloat (document.getElementById("comentários").value);
    name (nome, email, endereço, contato, comentários)
}
const btn = document.querySelector ('button');

btn.addEventListener('click', function(){
    alert("Formulário cadastrado com sucesso!");
});