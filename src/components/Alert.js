import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";

function Alert() {
	const { alert, hide } = useContext(AlertContext);
	return (
		<CSSTransition
			in={alert.visible}
			timeout={{
				enter: 500,
				exit: 350,
			}}
			classNames={"alert"}
			mountOnEnter
			unmountOnExit
		>
			<div
				className={`alert alert-${alert.type || "warning"} alert-dismissible`}
				role="alert"
			>
				<strong>Внимание!</strong>
				&nbsp;
				{alert.text}
				<button
					type="button"
					onClick={hide}
					className="btn-close"
					aria-label="Close"
				></button>
			</div>
		</CSSTransition>
	);
}

export default Alert;
