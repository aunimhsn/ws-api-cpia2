async function getUsers(page = 1) {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`)
    const users = await response.json()
    if (response.status == 200) return users
    else throw Error('API error has occured')
}

let btnGet = document.getElementById('btn-get')
btnGet.addEventListener('click', () => {
    getUsers(2).then(users => {
        let getResult = document.getElementById('get-result')

        for (const user of users['data']) {
            const container = document.createElement('div')
            getResult.appendChild(container)

            const fullname = document.createElement('p')
            container.appendChild(fullname)
            fullname.innerHTML = `${user['first_name']} - ${user['last_name']}`

            const email = document.createElement('p')
            container.appendChild(email)
            email.innerHTML = user['email']
            
            const avatar = document.createElement('img')
            container.appendChild(avatar)
            avatar.setAttribute('src', user['avatar'])
            avatar.setAttribute('alt', 'Profil / Avatar');
        }
    })
})