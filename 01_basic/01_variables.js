const accountId=123
let accountEmail="kartik@gmail.com"
var accountPassword="4560"
accountCity="lathidad"
let accountState;

// accoutnId = 2 // not allowed

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountId,accountCity,accountState])
