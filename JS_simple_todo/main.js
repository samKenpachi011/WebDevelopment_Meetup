//Task Class: Represent a TASK

class Todo {
    constructor(tasktodo) {
        this.tasktodo = tasktodo;

    }
}

//UI Class: Handle UI tasks
class UserInterface {
    static displayTasks() {
        //hard code task array else get them from db
        const StoredTasks = [
            { tasktodo: 'Todo One' },
            { tasktodo: 'Todo Two' }
        ];
        const todos = StoredTasks;
        todos.forEach((task) => UserInterface.addTaskToList(task));

    }
    static addTaskToList(task) {
        //create rows in the body with the tdody id
        const list = document.querySelector('#task-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${task.tasktodo}</td>
        <td><a href="#" class="btn btn-danger btn-sm
         delete">X</a></td>
        `;
        list.appendChild(row);

    }
    static deleteTask(element) {
            if (element.classList.contains('delete')) {
                element.parentElement.parentElement.remove();
            }
        }
        
    static clearFields() {
        document.querySelector('#tasktodo').value = '';

    }
}


//Event :Display Books
document.addEventListener('DOMContentLoaded', UserInterface.displayTasks);

//Event :Add a Book
document.querySelector('#task-form').addEventListener('submit', (e) => {
    //prevent default submit
    e.preventDefault();
    //Get form values
    const tasktodo = document.querySelector('#tasktodo').value;

    //validate
    if (tasktodo === '') {
        alert('Please fill the field')
            //UserInterface.showAlert('Please fill the field', 'danger');

    } else {
        //instantiate book
        const task = new Todo(tasktodo);
        // console.log(task)

        //Add Book to Interface
        UserInterface.addTaskToList(task);

   
        UserInterface.clearFields();

    }


});

//Event :Remove a Book
document.querySelector('#task-list').addEventListener('click', (e) => {
    //console.log(e.target)
    UserInterface.deleteTask(e.target);

});