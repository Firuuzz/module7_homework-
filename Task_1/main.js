const student = {
    Name: 'Андрей',
    Surname: 'Иванов',
    Position: 'developer',
    Age: '18'
}
function userInfo(user){
    for(let key in user){
        if (user.hasOwnProperty(key)){
            console.log(`${key}: ${user[key]}`); 
        };

    };
};
userInfo(student);
