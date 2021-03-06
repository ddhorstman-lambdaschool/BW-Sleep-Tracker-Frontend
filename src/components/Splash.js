import React, { useState, useEffect } from "react";
import { Container, Button, ButtonGroup } from "@material-ui/core";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import SleepTrackerButtons from "./SleepTrackerButtons";




function Splash({ page }) {
	const [token, setToken] = useState(localStorage.getItem("token"));


	const splashStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100vw",
		height: "100vh",
		backgroundColor: "#1b262c",
		color: "black",
		flexDirection: "column"
	};
	const logoStyle = {
		position: "fixed",
		top: "10px",
		left: "10px",
		width: "13%"
	};

	const LinkBehavior = React.forwardRef((props, ref) => (
		<RouterLink ref={ref} to='/userdash' {...props} />
	));

	const buttonStyle = {
		color: "black",
		borderColor: "black"
	};

	return (
		<>
		<img src={require("../assets/ZLEEP.png")} style={logoStyle}></img>
		<div style={splashStyle} className='splash'>
			<h1 className='splashTitle'>Sleep is Good! Get it!</h1>

				{!token ? (
					<AuthButtons buttonStyle={buttonStyle} page={page} />
				) : (
						<Button component={LinkBehavior} style={buttonStyle}>
							Track your Sleep &gt;&gt;
						</Button>
						/*
						<SleepTrackerButtons buttonStyle={buttonStyle} page={page} />
						*/
					)

				}

		</div>
		</>
	);
}

export default Splash;
