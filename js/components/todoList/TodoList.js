import DB from "../../DB";
import Todo from "../todo/Todo";

export default class {
    constructor(data){
        DB.setApiURL(data.apiURL);
        this.elf = document.querySelector(data.domELT);
        this.todos = [];
        this.loadTodos();
    }
    async loadTodos(){
        const todos = await DB.findAll();
        this.todos = todos.map(todo => new Todo(todo));
        this.render();
    }
    render() {
        console.table(this.todos);
    }
}