// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data.map((user) => user.name))
//   })

// Async & Await Version
const URL = 'https://jsonplaceholder.typicode.com/users'
async function fetchUsers() {
  const response = await fetch(URL)
  const users = await response.json()
  console.log(users.map((user) => user.name))
}
fetchUsers()
