import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const useStyles = makeStyles((theme) => ({
	root: {
	  maxWidth: 500,
	  marginRight: "30px",
	  flexGrow: 1
	},
	optionMenu: {
		minWidth: "30px"
	},
	media: {
	  height: 0,
	  paddingTop: '56.25%', // 16:9
	},
	expand: {
	  transform: 'rotate(0deg)',
	  marginLeft: 'auto',
	  transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	  }),
	},
	expandOpen: {
	  transform: 'rotate(180deg)',
	},
	avatar: {
	  backgroundColor: red[500],
	},
	cardComment: {
		backgroundColor: "rgba(0, 0, 0, 0.1)",
		marginBottom: "5px"
	}
  }));

const NextStepCard = (props) => {
	const {data} = props;
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
  
	const handleExpandClick = () => {
	  setExpanded(!expanded);
	};

	function handleMenuClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleMenuClose() {
		setAnchorEl(null);
	}

	return (	  
		<Card className={classes.root}>
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2" noWrap>
				{data.title}
			</Typography>			
			<Typography gutterBottom variant="span" component="span" noWrap>
				{data.timeStart} - {data.timeEnd}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p" noWrap>
				{data.description}
			</Typography>
		</CardContent>
		<CardHeader
			avatar={
			<Avatar aria-label="recipe" className={classes.avatar}>
				{data.userName[0]}
			</Avatar>
			}
			action={
				<Box>
					<IconButton
						aria-label="more"
						aria-controls="long-menu"
						aria-haspopup="true"
						onClick={handleMenuClick}
						className={classes.optionMenu}
					>
						<MoreVertIcon />
					</IconButton>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
					>
						<MenuItem onClick={handleMenuClose}>
							<ListItemIcon className={classes.optionMenu}>
								<EditIcon />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Edit
							</Typography>
						</MenuItem>
						<MenuItem onClick={handleMenuClose}>
							<ListItemIcon className={classes.optionMenu}>
								<ReportProblemIcon />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Report
							</Typography>
		  				</MenuItem>
						<MenuItem onClick={handleMenuClose}>
							<ListItemIcon className={classes.optionMenu}>
								<DeleteForeverIcon />
							</ListItemIcon>
							<Typography variant="inherit" noWrap>
								Delete
							</Typography>
						</MenuItem>
					</Menu>
				</Box>
				
			}
			title={data.userName}
			subheader={data.user}></CardHeader>
		</Card>
	);
}
export default NextStepCard;