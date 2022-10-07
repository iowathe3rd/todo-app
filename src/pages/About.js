import React from "react";
import { NavLink } from "react-router-dom";

export const About = () => {
	return (
		<>
			<div className="card">
				<h1 className="card-header">Информация</h1>
				<div className="card-body">
					<h3 className="card-title">Лучшее react приложения</h3>
					<p className="card-text">на самом деле я практикуюсь</p>
					<NavLink to={"/"} className="btn btn-primary">
						Домой
					</NavLink>
				</div>
			</div>
		</>
	);
};
