class Company {
    departments = {}

 addEmployee(name, salary, position, department) {
        if (name === "" || name === null || name === undefined ||
            salary === "" || salary === null || salary === undefined || salary < 0 ||
            position === "" || position === null || position === undefined ||
            department === "" || department === null || department === undefined) {
            throw new Error('Invalid input!')
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = []
        }

        let employee = { name, salary, position, department }
        this.departments[department].push(employee)
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let inf = {}
        for (const [department, data] of Object.entries(this.departments)) {
            let totalSalary = 0

            for (const iterator of data) {

                totalSalary += iterator.salary
            
            }
            let avgSalary = totalSalary / data.length

            inf[department] = avgSalary

        }

        let sorted = Object.entries(inf)
        let bestDepartment = sorted.sort((a, b) => b[1] - a[1])[0][0]
        let bestAvgSalary = sorted.sort((a, b) => b[1] - a[1])[0][1]

        let buff = `Best Department is: ${bestDepartment}\n`
        buff += `Average salary: ${bestAvgSalary.toFixed(2)}\n`

        let sortedSalary = this.departments[bestDepartment].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        });
        for (const iterator of sortedSalary) {
           
            buff += `${iterator.name} ${iterator.salary} ${iterator.position}\n`
        }
        return buff.trim()
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// console.log(c.departments.Construction);




Unexpected error: expected 'Best Department is: Human resources\nAverage salary: 1675\nStanimir 2000 engineer\nGosho 1350 HR'
                  to equal 'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'