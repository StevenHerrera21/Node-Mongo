const use = require('./network')
const storage = require('./storage')

function addUser(user, name, lastname){
    return new Promise((resolve,reject)=>{
        if (!user || !name || !lastname){
            console.error('[Message Controller] No hay usuario o nombre o apellido.')
            return reject('Los datos son incorrectos.')
        }
        const fullUser = {
            user: user,
            name: name,
            lastname: lastname
        }
        storage.add(fullUser)
        return resolve(fullUser)
    })
}

function getUser(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(storage.list(filterUser))
    })
}
function updateUser(id, user){
    return new Promise(async (resolve, reject)=>{
        if (!id || !user) {
            return reject('Data inválida')
        }
        const result = await storage.update(id, user)
        return resolve(result)
    })
}

function deleteUser(id){
    return new Promise(async (resolve, reject)=>{
        if (!id) {
            return reject('Id inválida')
        }
        const result = storage.delete(id)
        return resolve(result)
    })
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}