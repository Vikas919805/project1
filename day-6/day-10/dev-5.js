function signup(event) {
    event.preventDefault();
    var user = {
        firstname: event.target[0].value,
        lastname: event.target[1].value,
        password: event.target[2].value,
        email: event.target[3].value,
        phone: event.target[4].value,

    }
console.log(user);
}