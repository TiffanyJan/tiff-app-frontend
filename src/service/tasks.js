import axios from 'axios';

const TasksService = {
    async getTasks() {
        let res = await axios.get("https://l8hluop8tk.execute-api.eu-west-2.amazonaws.com/dev/tasks");
        let data = await res.data;
        return data;
    },

    async saveTask(task){
        let res = await axios.post("https://l8hluop8tk.execute-api.eu-west-2.amazonaws.com/dev/tasks", task);
        return res.data;
    }
};

export default TasksService;
