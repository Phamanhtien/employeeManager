import React, { useEffect, useState } from "react";

import RetrieveTeams, {
    GetAllTeamMember,
} from "./../../util/GeneralFunction/TeamAxios";
import TeamListTableContent from "./team-list-table-content";
import TeamMemberListTableContent from "./team-member-list-table-content";
import TeamAdd from "./../add-team/team-add";
import "./team-list.css";

function TeamList() {
    const [teamList, setTeamList] = useState([]);
    const [teamDetailId, setTeamDetailId] = useState(0);
    const [teamMemberList, setTeamMemberList] = useState([]);
    const setTeamDetailIdCallBack = (teamId) => {
        setTeamDetailId(teamId);
    };

    useEffect(() => {
        RetrieveTeams().then((res) => {
            setTeamList(res);
        });
        if (teamDetailId > 0) {
            GetAllTeamMember(teamDetailId).then((res) => {
                setTeamMemberList(res);
            });
        }
    }, [teamDetailId]);
    

    return (
        <div>
            <div className="team-list-content-header">
                <div className="tab-name">
                    <b>Team</b>
                </div>
                <div className="icon">
                    <TeamAdd></TeamAdd>
                </div>
            </div>
            <div className="content-team-list">
                <div className="total-team-box">
                    <p className="total-team-text">
                        Total {teamList.length} Teams
                    </p>
                </div>
                <div className="space"></div>
            </div>
            <div className="team-list-table-content">
                <div>
                    <TeamListTableContent
                        teamList={teamList}
                        setTeamDetailIdCallBack={setTeamDetailIdCallBack}
                    ></TeamListTableContent>
                </div>
                <div>
                    <TeamMemberListTableContent
                        teamMemberList={teamMemberList}
                    ></TeamMemberListTableContent>
                </div>
            </div>
        </div>
    );
}

export default TeamList;
