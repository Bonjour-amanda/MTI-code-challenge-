const whoIsIt = who => {

    let firstDay = ['Anton', 'Joko', 'Mike', 'Zoe', 'Badu']
    let secondDay = ['Ani', 'Budi', 'Anton', 'Wowo', 'Zoe', 'Bobo' ]

    let sol = []
    for(let i = 0; i  <= firstDay.length; i++) {
        if (secondDay.indexOf(firstDay[i]) > -1) {
            sol.push(firstDay[i])
        }
    }
    return sol
}
console.log(whoIsIt())