import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Notes({ notes, onRemove }) {
	return (
		<TransitionGroup component={"ul"} className="list-group">
			{notes.map((note) => {
				return (
					<CSSTransition key={note.id} classNames={"note"} timeout={800}>
						<li className="list-group-item note">
							<div>
								<strong>{note.title}</strong>
								<small>{note.date}</small>
							</div>

							<button
								type="button"
								className="btn btn-outline-danger rounded-circle"
								onClick={() => onRemove(note.id)}
							>
								&times;
							</button>
						</li>
					</CSSTransition>
				);
			})}
		</TransitionGroup>
	);
}

export default Notes;
