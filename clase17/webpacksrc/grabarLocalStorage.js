let escribirLocalStorage = () => {
   localStorage.setItem('token', 'unToken ' + new Date())
}

module.exports = escribirLocalStorage
