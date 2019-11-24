const users = []

const getUser = (id) =>{
    if(!id) {return {
        error: 'Id must be provided'
    }}

   return users.find((user)=>{
        return user.id === id
    })
}

const getUsersInRoom = (room) =>{
    if(!room) {return {
        error: 'Room must be provided'
    }}

   return users.filter((user)=>{
        return user.room.trim().toLowerCase() === room.trim().toLowerCase()
    })
}


const removeUser = (id) =>{
    const index = users.findIndex((user)=> user.id === id)

    if(index !== -1){
        return users.splice(index,1)[0]
    }
}

const addUser = ({id, username, room})=>{
//Clean the data
   username = username.trim().toLowerCase() 
   room = room.trim().toLowerCase()

    //Validate the data
    if(!username || !room){return {
        error:'Username and Room are required'
    }}
    
    //Check existing user
    const existingUser = users.find((user)=>{
            return user.room === room && user.username === username
    })

    //Validate username
    if(existingUser){ return{
        error: 'Username is in use!'
    }}

    //Store user 
    const user = {id, username, room}
    users.push(user)
    return {user}

}

addUser({
    id: 22,
    username: 'Jesus',
    room: 'Libertad'
})



const res = addUser({
    id: 23,
    username: 'jesus A',
    room: 'Libertad'
})

module.exports = {getUser,getUsersInRoom,addUser,removeUser}