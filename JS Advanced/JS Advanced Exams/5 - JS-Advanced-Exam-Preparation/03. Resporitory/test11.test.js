import { assert, expect } from "chai";
import Repository from "./solution11.js"


describe("Repository", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    }

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    let entity2 = {
        name: "Gosho",
        age: 28,
        birthday: new Date(1991, 3, 7)
    };

    let clonedEntity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe("Initialization", function () {
        it("Should add props property on init", function () {

            let repository = new Repository(properties)

            expect(repository).to.have.property("props")
            expect(repository.props).to.deep.equal(properties)
            // console.log(repository.nextId());
        });
        it("Should have property data on init", function () {

            let repository = new Repository(properties)

            expect(repository).to.have.property("data")
            expect(typeof repository.data).is.equal("object")
            expect(repository.data).instanceOf(Map)

        });
        // it("Should have property function on init nextId", () => {
        //     let repository = new Repository(properties)
        //     expect(repository.nextId()).to.equal(0)
        //     let repository1 = new Repository(properties)
        //     expect(repository.nextId()).to.equal(1)
        // })
        it("Should return data size with get method", () => {
            let repository = new Repository(properties)
            expect(repository.count).to.equal(0)
            repository.add(entity)
            expect(repository.count).to.equal(1)
            repository.add(entity)
            expect(repository.count).to.equal(2)
         
        })
    })
    describe("Add entity", () => {
        it("Should return incremented id if valid entity is added ", () => {

            let repository = new Repository(properties)

            assert.equal(repository.add(entity), 0)
            assert.equal(repository.add(entity), 1)
        })
        it("Should store valid entity in data map", () => {

            let repository = new Repository(properties)

            
            repository.add(entity)
            repository.add(entity2)

            expect(repository.data.get(0)).not.to.be.undefined
            // expect(repository.data.get(0)).to.deep.equal(entity)


            expect(repository.data.get(0)).to.have.property("name").that.equals("Pesho")
            expect(repository.data.get(0)).to.have.property("age").that.equals(22)
            expect(repository.data.get(0)).to.have.property("birthday").that.equals(entity.birthday)

            expect(repository.data.get(1)).to.have.property("name").that.equals("Gosho")
            expect(repository.data.get(1)).to.have.property("age").that.equals(28)
            expect(repository.data.get(1)).to.have.property("birthday").that.equals(entity2.birthday)
        })
        it("Should throw error if property is missing", () => {

            let entity = {
                name: "Pesho",
                age: 22,

            };

            let repository = new Repository(properties)

            expect(() => repository.add(entity)).to.throw(Error, `Property birthday is missing from the entity!`)
        })
        it("Should throw error if property is other type", () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: "1998-01-06T22:00:00.000Z"
            };

            let repository = new Repository(properties)

            expect(() => repository.add(entity)).to.throw(Error, `Property birthday is not of correct type!`)
        })
    })
    describe("Get count", () => {
        it("Should return numbers of entities", () => {

            let repository = new Repository(properties)
            repository.add(entity)
            repository.add(entity)
            repository.add(entity)

            expect(repository.count).is.equal(3)
        })
        it("Should return zero if no added entities", () => {

            let repository = new Repository(properties)
            expect(repository.count).is.equal(0)
        })
    })
    describe("Get Id", () => {
        it("Should return entity by id", () => {
            let repository = new Repository(properties)

            repository.add(entity)
            repository.add(entity)
            expect(repository.getId(0)).to.deep.equal(clonedEntity)
            expect(repository.getId(0)).to.deep.equal(clonedEntity)
        })
        it("Should throw error when no id is found", () => {
            let repository = new Repository(properties)

            expect(() => repository.getId(1)).to.throw(Error, `Entity with id: 1 does not exist!`)
        })
    })
    describe("Update", () => {
        it("Should update one valid entity with another", () => {
            let newEntity = {
                name: "Gosho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            }

            let repository = new Repository(properties)

            repository.add(entity)
            repository.add(entity)
            repository.update(1, newEntity)

            expect(repository.getId(1).name).to.equal("Gosho")
        })
        it("Should throw error when updating entity on invalid id", () => {
            let repo = new Repository(properties)
            expect(() => repo.update(2, entity)).to.throw(Error, "Entity with id: 2 does not exist")
        })
    })

    describe("Delete", () => {
        it("Should delete one valid entity", () => {

            let repo = new Repository(properties)

            repo.add(entity)
            repo.add(entity)
            repo.del(0)


            expect(repo.count).to.equal(1)
        })
        it("Should throw error when deleting entity on invalid id", () => {
            let repo = new Repository(properties)
            expect(() => repo.del(2)).to.throw(Error, "Entity with id: 2 does not exist")
        })
    })

}) 