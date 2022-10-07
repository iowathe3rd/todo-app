import React from "react";

function Form() {
	return (
		<form>
			<div className="form-group">
				<input
					type="text"
					placeholder="Введите название заметки"
					className="form-control"
				/>
			</div>
		</form>
	);
}

export default Form;
