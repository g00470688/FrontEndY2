interface taskManager {
    tasks:Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}

class taskObject implements taskManager{
    tasks: string[] = [];
    addTask(task: string): number {
        this.tasks.push(task);
        console.log(`succsessfully added ${task}`);
        return this.tasks.length;
    }

    listAllTasks(): void {
        for(const t of this.tasks){
            console.log(`task ${t}`);
        }
    }

    deleteTask(task: string): number {
        const i = this.tasks.indexOf(task);
        this.tasks.splice(i);
        console.log(`deleted task ${task}`);
        return this.tasks.length;
    }
}


const myTasks = new taskObject();
myTasks.addTask("baba");
myTasks.addTask("dada");
myTasks.listAllTasks();
myTasks.deleteTask('baba');