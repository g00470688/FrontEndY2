var taskHandler = /** @class */ (function () {
    function taskHandler() {
        this.tasks = []; // array that stores names of strings
    }
    /*
       * @param {string} task - task(string) that will be added
       * @returns {number} length of the tasks array after adding
    */
    taskHandler.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("succsessfully added ".concat(task));
        return this.tasks.length;
    };
    taskHandler.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var t = _a[_i];
            console.log("task ".concat(t));
        }
    };
    /*
      * @param {string} task - task(string) that will be deleted
      * @returns {number} length of the tasks array after deletion
   */
    taskHandler.prototype.deleteTask = function (task) {
        var i = this.tasks.indexOf(task);
        this.tasks.splice(i);
        console.log("deleted task ".concat(task));
        return this.tasks.length;
    };
    return taskHandler;
}());
var myTasks = new taskHandler();
myTasks.addTask("baba");
myTasks.addTask("dada");
myTasks.listAllTasks();
myTasks.deleteTask('baba');
