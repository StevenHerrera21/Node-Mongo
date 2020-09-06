$(function() {
    var socket = io.connect('http://localhost:3000', {
        forceNew: true,
    });
    var michat = $('#michat');
    var chatId= "5f3f1dada5188625a0dda9b5"
    $('#message-box').submit(function(e) {
        e.preventDefault();
        var myformData = new FormData();        
        myformData.append('chat', chatId);
        myformData.append('user', $("#user").val());
        myformData.append('message', $("#message").val());
        myformData.append('file', $("input[name=file]")[0].files[0]);

        $.ajax({
            method: 'POST',
            processData: false,
            contentType: false,
            cache: false,
            data: myformData,
            enctype: 'multipart/form-data',
            url: 'http://localhost:3000/message',
            success: function (response) {
                console.log("subido")
                $('input[name="message"]').val('');
                $('input[type="file"]').val('');
            }
        });     

    });

    socket.on('message', (data) => {
        michat.append("<p>"+data.user+":"+data.message+"</p><br>");
        if (data.file != ""){
            michat.append("<img class='imagen' src=" + data.file + " id=img' width='200' height='200'> </p>")
        }
    });

});