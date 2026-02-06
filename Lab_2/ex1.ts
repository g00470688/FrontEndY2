//a
let arr:string[] = [];
//b
function addTask(task:string):number{
    arr.push(task);
    console.log(`${task} has been added successfully`);
    return arr.length;
}
// c
function listAllTasks():void{
    for(const t of arr){
        console.log(t);
    }
}
//d
function deleteTask(task:string):number{
    const i = arr.indexOf(task); // gets index of task to be deleted
    arr.splice(i); // delete task from the array
    console.log(`${task} has been deleted successfully`);
    return arr.length;
}

addTask("baba");
addTask("dada");
listAllTasks();
deleteTask('baba');
