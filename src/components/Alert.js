import React from "react";

function Alert({ alert }) {
	if (!alert) {
		return null;
	}
	return (
		<div className={`alert alert-${alert.type} alert-dismissible`} role="alert">
			<strong>Внимание!</strong>
			{alert.text}
			<button type="button" className="btn-close" aria-label="Close"></button>
		</div>
	);
}

export default Alert;
