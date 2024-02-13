async function getUsers() {
    const response = await fetch("https://reqres.in/api/users")
    const users = await response.json()
    if (response.status == 200) return users
    else throw Error('API error has occured')
}

let btnGet = document.getElementById("btn-get")
btnGet.addEventListener('click', () => {
    getUsers().then(users => {
        let getResult = document.getElementById("get-result")

        for (const user of users['data']) {
            const fullname = document.createElement("p");
            getResult.appendChild(fullname)
            fullname.innerHTML = `${user['first_name']} - ${user['last_name']}`
        }
    })
})