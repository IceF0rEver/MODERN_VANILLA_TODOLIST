import '../style.scss';
import TodoList from './components/todoList/TodoList';

new TodoList ({
    apiURL: 'https://65096491f6553137159b58f9.mockapi.io/',
    elt: '#app',
});