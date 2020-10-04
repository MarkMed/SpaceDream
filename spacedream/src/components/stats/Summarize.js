import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Chart from "react-apexcharts";
import DonutChart from './donutChart';
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        width: "100%",
        height: "800px",
        background: "rgba(0, 0, 0, 0.1)"
    }
}));


const ChartListStyle = styled.div`
    text-align: -webkit-center;
    justify-content: center;
`;

class Summarize extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        };
    }

    render() {
        return (
            <ChartListStyle>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="500"
                />
                <br />
                <DonutChart />
                <br />
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="500"
                />
                <br />
            </ChartListStyle>
        );
    }
}
export default Summarize;