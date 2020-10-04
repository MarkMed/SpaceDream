import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { Box, Button, Menu, MenuItem, Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    backgroundColor: blue[500],
  },
}));

export default function Sugestions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleMenuClick(event) {
	  setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
	  setAnchorEl(null);
  }
  var initialText = "SpaceDream AI recently recommend me a very tasty food!!  Check it out on https://space-dream.invict1.vercel.app/";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
	<Paper>
		<Card className={classes.root}>
		<CardHeader
			avatar={
			<Avatar aria-label="recipe" className={classes.avatar}>
				AI
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
			title="Art-Intel Recommendations"
			subheader="September 14, 2016"
		/>
		<CardContent>
			<Typography variant="body2" color="textSecondary" component="p">
				The information collected suggests that you have slept 33% less in the last three days.
			</Typography>
		</CardContent>
		<CardActions disableSpacing>
			<IconButton aria-label="add to favorites">
			<FavoriteIcon />
			</IconButton>
			<IconButton aria-label="share">
				<a class="resp-sharing-button__link" href={"https://twitter.com/intent/tweet/?text=" + initialText + "."} target="_blank" rel="noopener" aria-label="">
					<ShareIcon /> 
				</a>
			</IconButton>
			<IconButton
			className={clsx(classes.expand, {
				[classes.expandOpen]: expanded,
			})}
			onClick={handleExpandClick}
			aria-expanded={expanded}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
		</CardActions>
		<Collapse in={expanded} timeout="auto" unmountOnExit>
			<CardContent>
			<Typography paragraph>Method:</Typography>
			<Typography paragraph>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias placeat quaerat vero dolore labore reiciendis dignissimos eligendi nobis aperiam. Fugit consectetur cum natus porro rem ab illo odio harum sint?
			</Typography>
			<Typography paragraph>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit consectetur cum natus porro rem ab illo odio harum sint?
			</Typography>
			<Typography paragraph>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias placeat quaerat vero dolore labore reiciendis dignissimos eligendi nobis aperiam. Fugit consectetur cum natus porro rem ab illo odio harum sint?
			</Typography>
			</CardContent>
		</Collapse>
		</Card>

	</Paper>
  );
}