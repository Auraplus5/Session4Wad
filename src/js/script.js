let userName = "Andrew"
let userAge = 21

//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)

let userPets = ["Cat", "Dog"]
let userBalance = 1200
let EVERY_DAY_SPENDING = 15.3
let everyDaySpendingPerPet = 2.4
let daysSurvived = 0

console.log("User Balance", userBalance)
console.log("Every day spending per pet: ", everyDaySpendingPerPet)
console.log("Days survived: ", daysSurvived)

while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

function nameVertical(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i])
    }
}
nameVertical("Sarah")

function code(n) {
    return (n < 100) ? "Not a valid code" :
        (n < 200) ? "Informational responses" :
            (n < 300) ? "Successful responses" :
                (n < 400) ? "Redirects" :
                    (n < 500) ? "Client errors" :
                        (n < 600) ? "Server errors" : "Not a valid code"

}

console.log(code(200))

function compareVariables (var1, var2) {
    return (var1 === var2 && typeof var1 === typeof var2) ? "The two variables have the same value and type" :
        (var1 === var2 && typeof var1 !== typeof var2) ? "The two variables have the same value but different type" :
            (var1 !== var2 && typeof var1 === typeof var2) ? "The two variables have different value but same type" :
                "The two variables have different value and type"
}

console.log(compareVariables(1, "3"))

