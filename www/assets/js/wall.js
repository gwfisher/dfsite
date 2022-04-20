const form = document.getElementById('wallform');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    formData = new FormData(form);

    var name = formData.get('name');
    var message = formData.get('message');

    const requestData = {
        name: name,
        message: message
    };

    var request = new XMLHttpRequest();
    request.open("POST","https://dataforge.network/contact");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(requestData));

    var thanks = document.getElementById('thanks');
    thanks.innerHTML = "Thanks for your message, " + name;

    console.log(requestData);
})
