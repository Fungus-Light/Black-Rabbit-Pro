function Message(message) {
    Swal.fire(message)
}

function Alert(title, message) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: message,
    })
}
