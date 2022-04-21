import React, { useState, useEffect } from "react";
import "./statistics.css";
import { useQuery } from "react-query";
import { useSnapshot } from "valtio";

import { EmployeeState } from "./../../../../global-states/employee-state";
import GetStaticEmployeeWorking from "./../../../../util/GeneralFunction/StatisticsAxios";
import StatisticsRequest from "../../../../model/statisticsRequest";
import Loading from "../../../../util/loading/loading";

function Statistics() {
    const employeeStateSnap = useSnapshot(EmployeeState);
    const [month, setMonth] = useState(0);
    const [isMonthPassed, setMonthPassed] = useState(false);
    const [year, setYear] = useState(0);
    const [isYearPassed, setYearPassed] = useState(false);
    const [statisticsRequest, setStatisticsRequest] = useState();
    const getStaticEmployeeWorking = useQuery(
        ["GetStaticEmployeeWorking", statisticsRequest],
        () => GetStaticEmployeeWorking(statisticsRequest),
        { enabled: false }
    );

    useEffect(() => {
        if (statisticsRequest === undefined) {
            return;
        }
        getStaticEmployeeWorking.refetch();
    }, [statisticsRequest,getStaticEmployeeWorking ]);

    function validateMonth(input) {
        if (isNaN(input)) {
            alert("Month must be a number");
            return;
        }

        if (input < 1 || input > 12) {
            alert("Invalid month");
        }

        setMonth(input);
        setMonthPassed(true);
    }

    function validateYear(input) {
        if (isNaN(input)) {
            alert("Year must be a number");
            return;
        }

        if (input < 0) {
            alert("Invalid Year");
        }

        setYear(input);
        setYearPassed(true);
    }

    async function statistics() {
        if (!isMonthPassed) {
            alert("Please check input month");
            return;
        }

        if (!isYearPassed) {
            alert("Please check input year");
            return;
        }

        let statisticsRequestTemp = new StatisticsRequest();
        statisticsRequestTemp.employeeId = employeeStateSnap.employee.id;
        statisticsRequestTemp.month = month;
        statisticsRequestTemp.year = year;
        setStatisticsRequest(statisticsRequestTemp)
    }

    if (getStaticEmployeeWorking.status === "loading") {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className="statistics">
                <h3>Statistics</h3>

                <div className="row row-statistics">
                    <div className="row ">
                        <input
                            type="number"
                            className="col"
                            placeholder="Month"
                            value={month === 0 ? "" : month}
                            onChange={(input) => {
                                validateMonth(input.target.value);
                            }}
                        ></input>
                        <input
                            type="number"
                            className="col"
                            placeholder="Year"
                            value={year === 0 ? "" : year}
                            onChange={(input) => {
                                validateYear(input.target.value);
                            }}
                        ></input>
                        <button
                            type="button"
                            className="btn btn-primary col"
                            onClick={() => statistics()}
                        >
                            Static
                        </button>
                    </div>
                </div>

                <div className="row row-statistics">
                    <h5>Result</h5>
                </div>

                <div className="row row-statistics">
                    <input
                        readOnly
                        type="text "
                        className="col "
                        placeholder="Number of working days "
                        value={
                            getStaticEmployeeWorking.data === undefined
                                ? ""
                                : getStaticEmployeeWorking.data
                                      .totalNumberWorkingDate.toString()
                        }
                    ></input>
                    <input
                        readOnly
                        type="text "
                        className="col "
                        placeholder="Total get "
                        value={
                            getStaticEmployeeWorking.data === undefined
                                ? ""
                                : "$"+getStaticEmployeeWorking.data.totalMoneyGet
                        }
                    ></input>
                </div>

                <div className="row row-statistics">
                    <input
                        readOnly
                        type="text "
                        className="col "
                        placeholder="Total Advance "
                        value={
                            getStaticEmployeeWorking.data === undefined
                                ? ""
                                : "$"+getStaticEmployeeWorking.data
                                      .totalMoneyAdvance
                        }
                    ></input>
                    <input
                        readOnly
                        type="text "
                        className="col "
                        placeholder="Total recives  "
                        value={
                            getStaticEmployeeWorking.data === undefined
                                ? ""
                                : "$"+(getStaticEmployeeWorking.data.totalMoneyGet -
                                  getStaticEmployeeWorking.data
                                      .totalMoneyAdvance)
                        }
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
