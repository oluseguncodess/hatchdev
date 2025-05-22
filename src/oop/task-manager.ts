interface ITask {
    id: number
    title: string
    description: string
    status: boolean
}

class TaskApp{
    protected listOfTasks: ITask[] = []
    protected listOfCompletedTasks: ITask[] = []

    private task_id = 0

    protected addTask(title: string, description: string): ITask {
        const newTask: ITask = {
            id: ++this.task_id ,
            title,
            description,
            status: false
        }

        this.listOfTasks.push(newTask)

        console.log(`New Task with ID-${this.task_id} created`)

        return newTask;
    }

    protected deleteTaskById(id: number): void {
        this.listOfTasks = this.listOfTasks.filter(task => task.id !== id)

        console.log(`Task with ID-${id} deleted successfully`)
    }

    protected updateTaskByParameters(id: number, title?: string, description?: string): void {
        const taskIndex = this.listOfTasks.findIndex(task => task.id === id)

        if(!description && !title) {
            console.log('You have to update either the description or the title')
            return 
        }

        if (taskIndex !== -1) {
            let task = this.listOfTasks[taskIndex]
            const updatedTask = {
                ...task,
                title: title ?? task.title,
                description: description ?? task.description
            }
            this.listOfTasks[taskIndex] = updatedTask

            console.log(`Task with ID-${id} with ${title ? `new title` : `title`} '${title ? title : task.title}' has been updated`)
        } else {
            console.log(`Task doesn't exist. Create a new task`)
        }
    }

    protected getTask(id: number): ITask | undefined {
        const task = this.listOfTasks.find(task => task.id === id)
        return task;
    }

    displayListOFTasks(): void {
        if (this.listOfTasks.length < 1 ) {
            console.log('No new tasks created yet')
        } else {
            console.log(this.listOfTasks)
        }
    }

    displayCompletedTasks(): void {
        if (this.listOfCompletedTasks.length < 1) {
            console.log('No completed Task yet')
        } else {
            console.log(this.listOfCompletedTasks)
        }
    }
}

class TaskManager extends TaskApp {
    createNewTask(title: string, description: string): ITask {
        return this.addTask(title, description)
    }

    deleteTask(id: number): void {
        this.deleteTaskById(id)
    }
    
    updateTask(id: number, title?: string, description?: string) {
        this.updateTaskByParameters(id, title, description)
    }

    completeTask(id: number) {
        const taskIndex = this.listOfTasks.findIndex(task => task.id === id)

        if (taskIndex === 1) {
            console.log(`Invaid task ID`)
            return
        }

        const task = this.listOfTasks[taskIndex]
        const completedTask = {
                ...task,
                status: true
        }

        this.listOfTasks.splice(taskIndex, 1)
        this.listOfCompletedTasks.push(completedTask)

        console.log(`Task with ID-${id} completed successfully`) 
    }
}


const taskManager = new TaskManager()
// created 3 instances(objects from the same subclass)
const hatchDev = taskManager.createNewTask('HatchDev', 'Read for hatchDev')
const run = taskManager.createNewTask('Run', 'Run for 30 mintues')
const homework = taskManager.createNewTask('Do homework', 'Ensure you use your textbook to practice')
taskManager.displayListOFTasks()

// deleted a certain task
taskManager.deleteTask(run.id)
taskManager.displayListOFTasks()

// updated/edited a certain task
taskManager.updateTask(hatchDev.id, undefined, 'Read for hatchdev, do both of the homeworks')
taskManager.displayListOFTasks()
taskManager.updateTask(hatchDev.id, 'Hatchdev Assignment')
taskManager.displayListOFTasks()

// completed a task 
taskManager.completeTask(hatchDev.id)
taskManager.displayCompletedTasks()
taskManager.displayListOFTasks()

