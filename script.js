fetch("https://reqres.in/api/users?delay=3")
    .then(response => response.json())
    .then(users => printUsers(users.data))

console.log("03 - Después de fetch")

const printUser = (avatar_url, id, email, first_name, last_name) => {
    return `<div class="col-3 card my-2 mx-2">
                <img src="${avatar_url}" class="card-img-top"></img>
                <div class="card-body">
                    <p>Id: ${id}</p>
                    <p>email: ${email}</p>
                    <p>First name: ${first_name}</p>
                    <p>Last name: ${last_name}</p>
                </div>
            <div/>`
}

const printUsers = (users) => {
    const container = document.getElementById("users-container")
    for (let user of users) {
        container.innerHTML += printUser(user.avatar, user.id, user.email, user.first_name, user.last_name)
    }
}
