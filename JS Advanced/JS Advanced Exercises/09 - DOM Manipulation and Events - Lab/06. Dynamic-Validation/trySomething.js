function demo(email) {
    let pattern = /^[a-z]+@[a-z]+.[a-z]+$/

    let result = pattern.test(email)
   console.log(result);

   
}
demo('dimitaralex)androv@abv.bg')