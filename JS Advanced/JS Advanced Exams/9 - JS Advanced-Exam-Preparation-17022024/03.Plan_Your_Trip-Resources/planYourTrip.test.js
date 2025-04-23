import { assert } from "chai";
import planYourTrip from "./planYourTrip.js";


describe('planYourTrip test',()=>{
    it('choosingDestination test',()=>{
        assert.throw(()=>planYourTrip.choosingDestination('Abudabi','summer',2023),'Invalid Year!')
    })
})