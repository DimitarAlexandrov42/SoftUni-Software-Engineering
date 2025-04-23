class Stringer {
    constructor(string, lgth) {
        this.innerString = string
        this.innerLength = lgth
        this.firstString = string
    }
    increase(value) {
        this.innerLength = this.innerLength + Number(value)
        return console.log(this.firstString.substring(0, this.innerLength));

    }
    decrease(value) {
        this.innerLength = Number(this.innerLength) - Number(value)
        if (this.innerLength < 0) {
            this.innerLength = 0
            return console.log('...');
        } else {
            if (this.innerLength === 5) {
                this.innerString = this.innerString.substring(0, this.innerLength)
                return console.log(this.innerString);
            }
            this.innerString = this.innerString.substring(0, this.innerLength) + '...'
            return console.log(this.innerString);
        }
    }
    toString() {
        if (this.firstString.length > this.innerLength) {
            this.firstString = this.firstString.substring(0, this.innerLength) + '...'
            return this.firstString
        }
        return this.firstString
    }
}

let test = new Stringer('Viktor', 6)

test.toString()
test.decrease(4)
test.increase(5)
test.toString()
