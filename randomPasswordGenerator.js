const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#!@';
result = ""
for(let i = 0; i < 8; i++){
   let randomIndex = Math.floor(Math.random() * (characters.length + i)) + i
   result += characters[randomIndex]
}

console.log(result)

