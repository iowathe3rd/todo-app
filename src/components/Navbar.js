import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
	<div className="navbar navbar-dark navbar-expand-lg bg-primary">
		<div className="navbar-brand">Анонимный чат саратов</div>
		<ul className="navbar-nav">
			<li className="nav-item">
				<NavLink className="nav-link" to={"/"}>
					Главная
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to={"/about"}>
					Информация
				</NavLink>
			</li>
		</ul>
	</div>
);
