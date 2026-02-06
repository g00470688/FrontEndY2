//a
var arr = [];
//b
function addTask(task) {
    arr.push(task);
    console.log("".concat(task, " has been added successfully"));
    return arr.length;
}
// c
function listAllTasks() {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var t = arr_1[_i];
        console.log(t);
    }
}
//d
function deleteTask(task) {
    var i = arr.indexOf(task); // gets index of task to be deleted
    arr.splice(i); // delete task from the array
    console.log("".concat(task, " has been deleted successfully"));
    return arr.length;
}
addTask("baba");
addTask("dada");
listAllTasks();
deleteTask('baba');
