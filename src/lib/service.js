import axios from 'axios';

export const loadToDos = () => {
  axios.get('https://localhost:8080/api/todos');
}
