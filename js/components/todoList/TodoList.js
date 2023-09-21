import DB from "../../DB";
import Todo from "../todo/Todo";
import getTemplate from './template.js';

export default class {
    constructor(data){
        DB.setApiURL(data.apiURL);
        this.elt = document.querySelector(data.elt);
        this.todos = [];
        this.loadTodos();
    }
    async loadTodos(){
        const todos = await DB.findAll();
        this.todos = todos.map(todo => new Todo(todo));
        this.render();
    }
    render() {
        this.elt.innerHTML = getTemplate(this);
        // console.table(this.todos);
    }
}