function pieceOfPie(arrFl, target1, target2) {

    let start = arrFl.indexOf(target1)
    let end = arrFl.indexOf(target2)

    let result = arrFl.slice(start, end + 1)
     return result

}
console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'))