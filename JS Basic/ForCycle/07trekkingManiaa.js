function trekkingMania(input) {
    let groupNumber = Number(input[0]);
 
    let musalaC = 0;
    let monblanC = 0;
    let kilimandjaroC = 0;
    let k2C = 0;
    let everestC = 0;
    let obshto = 0;
 
    let groupCountIndex = 1;
 
    for (i = 0; i < groupNumber; i++) {
        let curNumber = Number(input[groupCountIndex]);

 
        obshto += curNumber;
       
 
        if (curNumber <= 5) {
            musalaC += curNumber;
        } else if (curNumber <= 12) {
            monblanC += curNumber;
        } else if (curNumber <= 25) {
            kilimandjaroC += curNumber;
        } else if (curNumber <= 40) {
            k2C += curNumber
        } else {
            everestC += curNumber;
        }
 
        groupCountIndex += 1; 
 
    }
    console.log(obshto)
    let musalaP = musalaC / obshto * 100;
    let monblanP = monblanC / obshto * 100;
    let kilimandjaroP = kilimandjaroC / obshto * 100;
    let k2P = k2C / obshto * 100;
    let everestP = everestC / obshto * 100;
 
   
}
trekkingMania(["10",

"10",

"5",

"1",

"100",

"12","26", "17", "37", "40", "78"])