import React, { useContext } from "react";
import PropTypes from "prop-types";
import SwitchComponent from "./SwitchComponent";
import { Context, Modes } from "../State";
import "./Back.scss";

const Back = ({ disabledConditions = false }) => {
	const [state, ] = useContext(Context);

	const currentStateIndex = Modes.indexOf(state.mode);

	const isDisabled = (() => {
		if (currentStateIndex <= 0) return true;
		return disabledConditions;
	})();

	return (
		<SwitchComponent
			action={"prevMode"}
			isDisabled={isDisabled}
			label="Back"
			className="back"
		/>
	);
};

Back.propTypes = {
	disabledConditions: PropTypes.bool,
};
export default Back;
