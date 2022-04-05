import axios from 'axios';

export default function RetrieveTeams() {
    return axios.get('http://localhost:8080/team/all')
        .then(res => res.data)
        .catch(error => console.error(error));
}