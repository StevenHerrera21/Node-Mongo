const Model = require('./model')

function addChat(chat){
    const myChat = new Model(chat)
    myChat.save()
}

async function getChats(userId){
    return new Promise((resolve, reject)=>{
        let filter = {}
        if(userId){
            filter = {
                user: userId,
            }
        }
        Model.find(filer)
            .populate('users')
            .exec((error,populated)=>{
                if(error){
                    return reject(error)
                } 
                resolve(populated)
            })
    })
}


module.exports = {
    add: addChat,
    get: getChats,
}