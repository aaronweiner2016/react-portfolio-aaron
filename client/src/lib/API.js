import axios from 'axios';

export default {

    Projects: {
        getProjects: function () {
            return axios.get("/api/projects/all")
        },
    },
}