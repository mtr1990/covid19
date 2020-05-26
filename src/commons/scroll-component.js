import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		overflowY: "auto",
		paddingRight: theme.spacing(2),
		"&::-webkit-scrollbar": {
			width: "4px"
			// display: "none"
		},
		"&::-webkit-scrollbar-track": {
			borderRadius: "4px"
		},
		"&::-webkit-scrollbar-thumb": {
			boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.48)",
			backgroundColor: theme.palette.contrast.medium,
			borderRadius: "4px"
		},
		"&::-webkit-scrollbar-thumb:hover": {
			borderRadius: "4px",
			backgroundColor: theme.palette.contrast.high
		}
	}
}));

const ScrollComponent = props => {
	const classes = useStyles();
	return (
		<Box className={classes.root} {...props}>
			{props.children}
		</Box>
	);
};
export default ScrollComponent;
