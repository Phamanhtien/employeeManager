import React from 'react';
import './statistics.css'

class Statistics extends React.Component {
    render() {
        return (
            <div>
                <div class="statistics">
                    <h3>Statistics</h3>

                    <div class="row row-statistics">
                        <div class="row ">
                            <input type="number" class="col" placeholder="Month"></input>
                            <input type="number" class="col" placeholder="Year"></input>
                            <button type="button" class="btn btn-primary col">Static</button>
                        </div>
                    </div>

                    <div class="row row-statistics">
                        <h5>Result</h5>
                    </div>

                    <div class="row row-statistics">
                        <input type="text " class="col " placeholder="Number of working days " value="1"></input>
                        <input type="text " class="col " placeholder="Total get " value="1"></input>
                    </div>

                    <div class="row row-statistics">
                        <input type="text " class="col " placeholder="Total Advance " value="2"></input>
                        <input type="text " class="col " placeholder="Total recives  " value="1"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistics