const student = {
    Name: 'Андрей',
    Surname: 'Иванов',
    Position: 'developer',
    Age: '18'
}
console.log(isProperty(student, 'Андрей'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}