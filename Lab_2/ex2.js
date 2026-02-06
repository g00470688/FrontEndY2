var taskObject = /** @class */ (function () {
    function taskObject() {
        this.tasks = [];
    }
    taskObject.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("succsessfully added ".concat(task));
        return this.tasks.length;
    };
    taskObject.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var t = _a[_i];
            console.log("task ".concat(t));
        }
    };
    taskObject.prototype.deleteTask = function (task) {
        var i = this.tasks.indexOf(task);
        this.tasks.splice(i);
        console.log("deleted task ".concat(task));
        return this.tasks.length;
    };
    return taskObject;
}());
var myTasks = new taskObject();
myTasks.addTask("baba");
myTasks.addTask("dada");
myTasks.listAllTasks();
myTasks.deleteTask('baba');
