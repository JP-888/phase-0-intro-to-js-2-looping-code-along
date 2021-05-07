// Code your solutions in this file

function countDown(count) {
    for (let i = count; i >= 0; i--) {
        console.log(i)
    }
}

function writeCards(names, greeting) { 
    const result = [];
    for (let i = 0; i < names.length; i++) {
        result.push(`Thank you, ${names[i]}, for the wonderful ${greeting} gift!`)
    }
    return result   
}