const username = document.getElementById('usuario');
const password = document.getElementById('contrasena');
const button = document.getElementById('ingresar');

button.addEventListener ('click' , (e) => {
  e.preventDefault()
  const data = {
    username: username.value,
    password: password.value, 
  }
})

let users = [
  {
    nombre: 'usuario 1',
    contrasena: 1234,
    saldo: 200,
  },
  {
    nombre: 'usuario 2',
    contrasena: 2345,
    saldo: 290,
  },
  {
    nombre: 'usuario 3',
    constrasena: 3456,
    saldo: 67,
  },
]; 