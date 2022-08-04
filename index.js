// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
function newTask(title, description){
  return {
    title: title,
    description: description,
    complete: false,
    completeTask: function(){
      this.complete = true;
    },
    logTaskState: function(){
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
}
// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  //taskComplete[taskIndex] = true;
  task.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  //const title = taskTitles[taskIndex];
  //const complete = taskComplete[taskIndex];
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

const t1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const t2 = newTask("Do Laundry",  "😨"); // task 1
const tasks = [t1, t2];
t1.logTaskState();
t1.completeTask();
t1.logTaskState();
//logTaskState(tasks[0]); // Clean Cat Litter has not been completed
//completeTask(tasks[0]);
//logTaskState(tasks[0]); // Clean Cat Litter has been completed
