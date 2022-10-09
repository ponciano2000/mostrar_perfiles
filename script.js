fetch("https://reqres.in/api/users?delay=2")
    .then(response => response.json())
    .then(users => printUsers(users.data))

const printUser = (avatar_url, id, email, first_name, last_name) => {
    return `

                <tr class="text-center"><th >${id}<th>${first_name}<th>${last_name}<th>${email}<th><img src="${avatar_url}" class="rounded-circle mx-auto"></img></td>
           
         
            `
}

const printUsers = (users) => {
    const container = document.getElementById("datos")
    for (let user of users) {
        container.innerHTML += printUser(user.avatar, user.id, user.email, user.first_name, user.last_name)
    }
}

