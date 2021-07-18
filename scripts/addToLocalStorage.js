function addToLocalStorage(event) {
    event.preventDefault()
    let name = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let preference = document.getElementById('option').value
    let allow = document.getElementById('termos').checked

    let userData = {"nome": name, "email": email, "preferência": preference, "aceite": allow}
    localStorage.setItem("UserData", JSON.stringify(userData))
}