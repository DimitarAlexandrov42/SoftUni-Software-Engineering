function sortAnArrayBy2Criteria(arr){

    let newArr = arr.sort((a,b) => {
    if(a.length !== b.length){
       return(a.length - b.length)
    }
    return a.localeCompare(b)
})
    
for (el of newArr) {
    console.log(`${el}`)
}

}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])