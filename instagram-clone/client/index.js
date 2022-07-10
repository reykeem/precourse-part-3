// CODE HERE
function validate() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    // console.log(username, password)
    if (username !== 'Ray' && password !== '12345') {
        document.getElementById("login-fail").innerHTML = "Incorrect log in information. Please try again."
        return
    }
    //else take to feed
    else if (username === 'Ray' && password === '12345') {
        location.href = "feed.html"
        return
    }
}

