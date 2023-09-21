export default class {
    setApiURL (data){
        this.apiURL = data;
    }
    static async findAll(){
        return await fetch(this.setApiURL + '/todos').json();
    }
}