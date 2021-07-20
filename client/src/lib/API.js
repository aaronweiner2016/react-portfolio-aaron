import axios from 'axios';

const projects = {
    id: 1,
    Name: "Golf Application",
    Summary: ""

}

export default {

    Projects: {
        getProjects: function () {
            return axios.get("/api/projects/all")
        },
    },
}