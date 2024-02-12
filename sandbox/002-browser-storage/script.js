localStorage.setItem('Name', 'Rajesh')
sessionStorage.setItem('Address', 'Itahari')
localStorage.setItem('Name', 'Anu')

// console.log(localStorage.getItem('Name'))

localStorage.removeItem('Name')
sessionStorage.removeItem('Address')

const date = new Date(9999, 0, 1).toUTCString()
const pastDate = new Date(1999, 0, 1).toUTCString()
document.cookie = `github=rajoyish; expires=${date}`
document.cookie = `github=; expires=${pastDate}`
console.log(document.cookie)
