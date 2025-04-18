import artGallery from "./artGallery.js"
import { assert } from "chai"
import { describe, it } from "mocha"

describe("addArtwork tests", () => {
    it("addArtwork input verification", () => {
        assert.throw(() => artGallery.addArtwork(4, "20 x 30", 4), "Invalid Information!")
        assert.throw(() => artGallery.addArtwork({}, "20 x 30", {}), "Invalid Information!")
        assert.throw(() => artGallery.addArtwork(null, "20 x 30", null), "Invalid Information!")
        assert.throw(() => artGallery.addArtwork(undefined, "20 x 30", undefined), "Invalid Information!")
        assert.throw(() => artGallery.addArtwork([], "20 x 30", []), "Invalid Information!")
    })
    it("addArtwork artists not allowed", () => {
        assert.throw(() => artGallery.addArtwork("Golqma skuka", "20 x 30", "Vasko mahlenskiq"), "This artist is not allowed in the gallery!")
    })
    it("Dimensions tests", () => {
    //    let regEx = !/^\d+ x \d+$/.test("20x20")
        
        assert.throw(()=>artGallery.addArtwork("vafli","20 x30","Vasko ludoto"), "Invalid Dimensions!")
    })

    it("addArtwork artists allowed", () => {
        let title = "Golqma skuka"
        let artist = "Van Gogh"
        let dimensions = "20 x 30"

        assert.equal(artGallery.addArtwork(title,dimensions,artist), `Artwork added successfully: '${title}' by ${artist} with dimensions ${dimensions}.`)
    })
    


})
describe("calculatesCosts tests", () => {
    it("addArtwork input verification", () => {
        assert.throw(() => artGallery.calculateCosts(-8,-4,false), "Invalid Information!")
        assert.throw(() => artGallery.calculateCosts(-1,-5,false), "Invalid Information!")
        assert.throw(() => artGallery.calculateCosts(-68,-22,true), "Invalid Information!")
        assert.throw(() => artGallery.calculateCosts("sdd","sdsd",true), "Invalid Information!")
        assert.throw(() => artGallery.calculateCosts(2,5,2), "Invalid Information!")
    })

    it("true sponsor", () => {
        assert.equal(artGallery.calculateCosts(300,200,true), `Exhibition and insurance costs are ${500*0.90}$, reduced by 10% with the help of a donation from your sponsor.`)
    })
    it("false sponsor", () => {
        assert.equal(artGallery.calculateCosts(300,200,false), `Exhibition and insurance costs are ${500}$.`)
    })
  
    
})

describe("organizeExhibits tests", () => {
    it("organizeExhibits input verification", () => {
        assert.throw(() => artGallery.organizeExhibits([],"asdasd"), "Invalid Information!")
        assert.throw(() => artGallery.organizeExhibits(-2,0), "Invalid Information!")
        assert.throw(() => artGallery.organizeExhibits(0,-5), "Invalid Information!")
    })

    it("organizeExhibits correct input ", () => {
        assert.equal(artGallery.organizeExhibits(10,6), `There are only 1 artworks in each display space, you can add more artworks.`)
        assert.equal(artGallery.organizeExhibits(20,3), `You have 3 display spaces with 6 artworks in each space.`)
        assert.equal(artGallery.organizeExhibits(50,10), `You have 10 display spaces with 5 artworks in each space.`)
    })

    
    
})