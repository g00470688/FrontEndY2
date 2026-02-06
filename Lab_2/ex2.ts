interface taskManager { // interface for the task handler class
    tasks:Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}

class taskHandler implements taskManager{ // task handler class
    tasks: string[] = []; // array that stores names of strings

    /*
       * @param {string} task - task(string) that will be added
       * @returns {number} length of the tasks array after adding
    */
    addTask(task: string): number {
        this.tasks.push(task);
        console.log(`succsessfully added ${task}`);
        return this.tasks.length;
    }

    listAllTasks(): void { // lists all tasks
        for(const t of this.tasks){
            console.log(`task ${t}`);
        }
    }
     /*
       * @param {string} task - task(string) that will be deleted
       * @returns {number} length of the tasks array after deletion
    */
    deleteTask(task: string): number {
        const i = this.tasks.indexOf(task);
        this.tasks.splice(i);
        console.log(`deleted task ${task}`);
        return this.tasks.length;
    }
}


const myTasks = new taskHandler();
myTasks.addTask("baba");
myTasks.addTask("dada");
myTasks.listAllTasks();
myTasks.deleteTask('baba');