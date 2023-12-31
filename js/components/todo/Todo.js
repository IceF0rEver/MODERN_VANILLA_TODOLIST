import getTemplate from './template.js';
export default class {
    constructor(data){
        this.id = data.id;
        this.content = data.content;
        this.completed = data.completed;
        this.createdAt = data.createdAt;
    }
    render() {
        return getTemplate(this);
    }
}
