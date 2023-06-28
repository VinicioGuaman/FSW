const scriptURL = 'https://script.google.com/macros/s/AKfycbwYZrYW6p-0cUt0ZQ6KQjXvYKTDyKsZIHLRVGX9R3y4yZrbEJQK0Cqex3j39PoKSPdu/exec' //URL script generada por Google Sheets
const form = document.forms['formulario'] //Nombre del formulario

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Formulario enviado satisfactoriamente', response))
    .catch(error => alert('Error el envio del formulario', error.message))
})