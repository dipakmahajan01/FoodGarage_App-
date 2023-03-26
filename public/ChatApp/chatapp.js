var socket = io("http://localhost:8081");


socket.on("receivingMsg", (msg )=> {
    
    console.log("REceived msg " + msg)
    showMsgInBlock('receive', msg) 
})

var sendUserMsg = () => {
    var msg = $("#umsg").val();
    $("#umsg").val('');
    var data = {
        usertype: 'admin',
        msg: msg
    }
    socket.emit("userSendMsg", JSON.stringify(data));
    showMsgInBlock("send", msg);
}

var showMsgInBlock = (type, msg) => {
    var divTag = $("<div />").addClass(type).html(msg);
    $(".msgBlock").append(divTag);
}