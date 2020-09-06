$(function() {
    var socket = io.connect('http://localhost:3000', {
        forceNew: true,
    });
    var michat = $('#michat');
    var chatId= "5f3f1dada5188625a0dda9b5"
    $('#message-box').submit(function(e) {
        e.preventDefault();
        $.post("http://localhost:3000/message", 
                {      
                chat: chatId,
                user: $("#user").val(),
                message: $("#message").val(),
                file: $("#file").val(),
                });
    });

    socket.on('message', (data) => {
        michat.append("<p>"+data.user+": "+data.message+"</p><br>");
        console.log(data)
    });

});