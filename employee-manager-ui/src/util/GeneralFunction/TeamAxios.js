import axios from "axios";

export default async function RetrieveTeams() {
    return await axios
        .get("http://localhost:8080/team/all")
        .then((res) => res.data)
        .catch((error) => console.error(error));
}

function GetAllTeamMember(teamId) {
    return axios
        .get("http://localhost:8080/team/" + teamId + "/members")
        .then((res) => res.data)
        .catch((err) => console.error(err));
}

function AddTeam(team) {
    return axios.post('http://localhost:8080/team/add', team)
    .then(res => res)
    .catch(error => error);
}

export { GetAllTeamMember,AddTeam };
