import SexPipe from './../../util/GeneralFunction/sex-pipe'
import Loading from '../../util/loading/loading'

function TeamMemberListTableContent(props) {
    let teamMemberList = props.teamMemberList;
    let teamMemberListElement = [];
    for (let i = 0; i < teamMemberList.length; i++) {
        teamMemberListElement.push(
            <tr className="tbody-row" key={teamMemberList[i].id}>
                <td className="team-id">{teamMemberList[i].id}</td>
                <td className="team-name">{teamMemberList[i].fullName}</td>
                <td className="team-phone">{teamMemberList[i].phone}</td>
                <td className="team-address">{teamMemberList[i].address}</td>
                <td className="team-sex">{SexPipe(teamMemberList[i].sex)}</td>
            </tr>
        );
    }
    if (teamMemberList.length === 0) {
        return (
            <div>
                <Loading></Loading>
                <h3>Please select a team to view detal</h3>
            </div>
           
        )
    }

    return (
        <table className="table-team-member table table-striped">
            <thead className="thead">
                <tr className="thead-row">
                    <th scope="col">
                        <b>No</b>
                    </th>
                    <th scope="col">
                        <b>Full Name</b>
                    </th>
                    <th scope="col">
                        <b>Phone</b>
                    </th>
                    <th scope="col">
                        <b>Address</b>
                    </th>
                    <th scope="col">
                        <b>Sex</b>
                    </th>
                </tr>
            </thead>
            <tbody className="tbody">{teamMemberListElement}</tbody>
        </table>
    );
}

export default TeamMemberListTableContent;
