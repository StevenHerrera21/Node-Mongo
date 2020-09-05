$(function() {
    var socket = io.connect('http://localhost:3000', {
        forceNew: true,
    });

/*     let chat = document.getElementById('chat');
    let user = document.getElementById('user');
    let message = document.getElementById('message');
    let file = document.getElementById('file');
    */
    var michat = $('#michat');

    $('#message-box').submit(function(e) {
        e.preventDefault();
        $.post("http://localhost:3000/message", 
                {      
                chat: $("#chat").val(),
                user: $("#user").val(),
                message: $("#message").val(),
                file: $("#file").val(),
                });
    });

    socket.on('message', (data) => {
        michat.append("<p>"+data.user+":"+data.message+"</p><br>");
        console.log(data)
    });

});