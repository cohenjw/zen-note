import React, {Component} from 'react';
import '../styles/Note.css';

export default class NoteItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.note.title,
			content: props.note.content
		};
	}

	render() {
		return (
			<div className="note">
				<input className="note-title"
					placeholder="..."
				/>
				<input className="note-text"
					placeholder="..."
				/>
			</div>
		);
	}
}
