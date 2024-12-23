const accountId = 140183
let accountEmail = "faijan@gmail.com"
var accountPassword = "123456"
accountCity = "Anand"
let accountState

// accountId = 2 not allowed
accountEmail = "agiu@gmail.com"
accountPassword = "564454"
accountCity = "asoda"

// perefer to not use var because of issues in chain scope and functional scope

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
