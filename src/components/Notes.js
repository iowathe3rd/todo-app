import React from "react";

function Notes({ notes }) {
	return (
		<ul className="list-group">
			{notes.map((note) => {
				return (
					<li key={note.id} className="list-group-item note">
						<div>
							<strong>{note.title}</strong>
							<small>{new Date().toLocaleDateString()}</small>
						</div>

						<button
							type="button"
							className="btn btn-outline-danger rounded-circle"
						>
							&times;
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export default Notes;
