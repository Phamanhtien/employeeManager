import { BsPersonLinesFill } from 'react-icons/bs';
function TeamListTableContent(props) {
    
    const callback = (teamId) => {
        props.setTeamDetailIdCallBack(teamId)
    }

    let teamList = props.teamList;

    var teamListElement = [];
    for (let i = 0; i < teamList.length; i++) {
        teamListElement.push(
            <tr className="tbody-row" key= {teamList[i].id}>
                <td className="team-id">{teamList[i].id}</td>
                <td className="team-name">{teamList[i].name}</td>
                <td className="team-detail">
                    <BsPersonLinesFill onClick={()=> callback(teamList[i].id)}></BsPersonLinesFill>
                </td>
            </tr>
        );
    }

    return (
        <table className="table-team-list table table-striped">
            <thead className="thead">
                <tr className="thead-row">
                    <th scope="col">
                        <b>No</b>
                    </th>
                    <th scope="col">
                        <b>Name</b>
                    </th>
                    <th scope="col">
                        <b>Detail</b>
                    </th>
                </tr>
            </thead>
            <tbody className="tbody">
                {teamListElement}
            </tbody>
        </table>
    );
}


export default TeamListTableContent