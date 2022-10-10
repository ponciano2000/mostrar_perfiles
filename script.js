fetch("https://reqres.in/api/users?delay=2")
    .then(response => response.json())
    .then(users => printUsers(users.data))

const printUser = (avatar_url, id, email, first_name, last_name) => {
    return `

                <trclass="text-center"><td >${id}<td>${first_name}<td>${last_name}<td>${email}<td><img src="${avatar_url}" class="rounded-circle mx-auto" style="width: 90px"></img></td></tr>
           
         
            `
}

const printUsers = (users) => {
    const container = document.getElementById("datos")
    for (let user of users) {
        container.innerHTML += printUser(user.avatar, user.id, user.email, user.first_name, user.last_name)
    }
}

const guardarLocalStorage = data => {
    const users = {
        content: [...data],
        time: Date.now() + 60000
    }
    localStorage.setItem('users', JSON.stringify(users))
}

function readUser() {
    const user = JSON.parse(localStorage.getItem("userData"));
    user && user.time > Date.now() ?
        displayUsers(user.usersData) :
        fetchRequest();
}

