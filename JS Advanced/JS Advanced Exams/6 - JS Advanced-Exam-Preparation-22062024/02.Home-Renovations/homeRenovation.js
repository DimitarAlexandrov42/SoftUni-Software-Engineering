class HomeRenovation {

    constructor(budget) {
        this.budget = budget
        this.tasks = []
        this.completedTasks = []
    }

    addTask(description, cost, priority) {

        if (this.budget < cost) {
            return `Not enough budget to add '${description}' task.`
        } else {

            this.tasks.push({
                description,
                cost,
                priority
            })

            this.budget -= cost
            return `The task '${description}' has been successfully added to the renovation plan.`
        }

    }

    markTaskAsCompleted(description) {

        let findTask = this.tasks.find(x => x.description === description)

        if (!findTask) {
            throw new Error(`Task '${description}' not found in the renovation plan.`)
        } else {
            let taskIndex = this.tasks.indexOf(findTask)
            this.completedTasks.push(findTask)
            this.tasks.splice(taskIndex, 1)


            return `The task '${description}' has been successfully completed.`
        }

    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return `The priority cannot be zero or negative.`
        }
        let numberOfTasks = this.tasks.filter(x => x.priority >= minimalPriority)


        if (numberOfTasks.length > 0) {
            return `You have ${numberOfTasks.length} tasks to prioritize.`
        } else if (numberOfTasks.length === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`
        }
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
           throw new Error(`No tasks have been completed yet!`) 
        } else {
            let buff = `Budget left $${this.budget}.\n`
            buff += `You have completed ${this.completedTasks.length} tasks.\n`
            buff += `Pending tasks in the renovation plan:\n`

            for (const x of this.tasks) {
                buff += `${x.description} - Cost: ${x.cost}, Priority: ${x.priority}`
            }

            return buff
        }

    }
}
const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.addTask("vafli", 800, 4));
console.log(renovation.addTask("marcipani", 500, 5));
console.log(renovation.addTask("bonboni", 300, 3));
console.log(renovation.addTask("cc", 2300, 3));



// console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());

