const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

reader.question('Welcome to the password validator tool!. What is your password?', function(input){
let password = input.split('')


function CheckPassword(inputtxt) 
{ 
let password=  /^[A-Za-z]\w{10,20}$/;
if(inputtxt.value.match(password)) 
{ 
alert('You did it!')
}
else
{ 
alert('Please try again')
}
}
if(password.length >= 10){
    console.log('Success')
}else{
    console.log('Failure')
}
})


//Used https://www.w3schools.com/howto/howto_js_password_validation.asp and calculator demo as resource
