function tickets(arr, sorting) {

    let work = []
    for (let i = 0; i < arr.length; i++) {

        let [destination, price, status] = arr[i].split('|')


        class Tickets {

            constructor(destination, price, status) {
                this.destination = destination
                this.price = Number(price)
                this.status = status
            }
        }

        let ticket = new Tickets(destination, price, status)
        work.push(ticket)
    }
    if (sorting === 'destination') {
        return work.sort((a, b) => a[sorting].localeCompare(b[sorting]))
    } else if (sorting === 'status') {
        return work.sort((a, b) => a[sorting].localeCompare(b[sorting]))
    } else if (sorting === 'price') {
        return work.sort((a, b) => a - b)
    }


}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price')