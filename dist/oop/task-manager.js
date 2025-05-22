"use strict";
class TaskApp {
    constructor() {
        this.listOfTasks = [];
        this.listOfCompletedTasks = [];
        this.task_id = 0;
    }
    addTask(title, description) {
        const newTask = {
            id: ++this.task_id,
            title,
            description,
            status: false
        };
        this.listOfTasks.push(newTask);
        console.log(`New Task with ID-${this.task_id} created`);
        return newTask;
    }
    deleteTaskById(id) {
        this.listOfTasks = this.listOfTasks.filter(task => task.id !== id);
        console.log(`Task with ID-${id} deleted successfully`);
    }
    updateTaskByParameters(id, title, description) {
        const taskIndex = this.listOfTasks.findIndex(task => task.id === id);
        if (!description && !title) {
            console.log('You have to update either the description or the title');
            return;
        }
        if (taskIndex !== -1) {
            let task = this.listOfTasks[taskIndex];
            const updatedTask = Object.assign(Object.assign({}, task), { title: title !== null && title !== void 0 ? title : task.title, description: description !== null && description !== void 0 ? description : task.description });
            this.listOfTasks[taskIndex] = updatedTask;
            console.log(`Task with ID-${id} with ${title ? `new title` : `title`} '${title ? title : task.title}' has been updated`);
        }
        else {
            console.log(`Task doesn't exist. Create a new task`);
        }
    }
    getTask(id) {
        const task = this.listOfTasks.find(task => task.id === id);
        return task;
    }
    displayListOFTasks() {
        if (this.listOfTasks.length < 1) {
            console.log('No new tasks created yet');
        }
        else {
            console.log(this.listOfTasks);
        }
    }
    displayCompletedTasks() {
        if (this.listOfCompletedTasks.length < 1) {
            console.log('No completed Task yet');
        }
        else {
            console.log(this.listOfCompletedTasks);
        }
    }
}
class TaskManager extends TaskApp {
    createNewTask(title, description) {
        return this.addTask(title, description);
    }
    deleteTask(id) {
        this.deleteTaskById(id);
    }
    updateTask(id, title, description) {
        this.updateTaskByParameters(id, title, description);
    }
    completeTask(id) {
        const taskIndex = this.listOfTasks.findIndex(task => task.id === id);
        if (taskIndex === 1) {
            console.log(`Invaid task ID`);
            return;
        }
        const task = this.listOfTasks[taskIndex];
        const completedTask = Object.assign(Object.assign({}, task), { status: true });
        this.listOfTasks.splice(taskIndex, 1);
        this.listOfCompletedTasks.push(completedTask);
        console.log(`Task with ID-${id} completed successfully`);
    }
}
const taskManager = new TaskManager();
const hatchDev = taskManager.createNewTask('HatchDev', 'Read for hatchDev');
const run = taskManager.createNewTask('Run', 'Run for 30 mintues');
const homework = taskManager.createNewTask('Do homework', 'Ensure you use your textbook to practice');
taskManager.displayListOFTasks();
taskManager.deleteTask(run.id);
taskManager.displayListOFTasks();
taskManager.updateTask(hatchDev.id, undefined, 'Read for hatchdev, do both of the homeworks');
taskManager.displayListOFTasks();
taskManager.updateTask(hatchDev.id, 'Hatchdev Assignment');
taskManager.displayListOFTasks();
taskManager.completeTask(hatchDev.id);
taskManager.displayCompletedTasks();
taskManager.displayListOFTasks();
