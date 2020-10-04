import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Chart from "react-apexcharts";
import DonutChart from './donutChart';
import styled from "styled-components";
import Sugestions from './sugestions';


const ChartListStyle = styled.div`
	display: flex;
	flex-direction: row;
`;
const Main = styled.main`
	display: block;
	flex-direction: row;
	width: 100%,
`;
const styles = (theme) => ({
	root: {
		flexGrow: 1,
		display: 'block',
		width: "100%",
		// height: "800px",
		background: "rgba(0, 0, 0, 0.02)"
	}
});


class Summarize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [8, 7, 4, 6, 8, 7.5, null]
                }
            ]
        }
	}
    render() {
		const {classes} = this.props;
        return (
			<Paper elevation="2" className={classes.root}>
				<ChartListStyle>
					<Chart
						options={this.state.options}
						series={this.state.series}
						type="bar"
						style={{width: "50%"}}
					/>
					<Chart
						options={this.state.options}
						series={this.state.series}
						type="line"
						style={{width: "50%"}}
					/>
				</ChartListStyle>
				<Sugestions type={"Meal"} />
			</Paper>
        );
    }
}
export default withStyles(styles)(Summarize);