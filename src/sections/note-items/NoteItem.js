import React, {Component} from 'react';
import '../../styles/Note.css';

export default class NoteItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			content: ''
		};

		this.updateNoteTitle = this.updateNoteTitle.bind(this);
		this.updateNoteContent = this.updateNoteContent.bind(this);
	}

	updateNoteTitle(title) {
		this.setState({
			title: title,
			content: this.state.content
		});
		this.props.updateNoteHandle(this.props.id, this.state.title, this.state.content);
		console.log("title changed for" + this.props.id);
	}

	updateNoteContent(content) {
		this.setState({
			title: this.state.title,
			content: content
		});
		this.props.updateNoteHandle(this.props.id, this.state.title, this.state.content);
		console.log("content changed for" + this.props.id);
	}

	render() {
		return (
			<div className="note">
				<div className="note-title"
					contentEditable="true"
					spellCheck="false"
					placeholder="..."
					onInput={() => this.updateNoteTitle(this.props.id, this.state.title)}>
				</div>
				{React.cloneElement(this.props.children, {updateNoteContentHandle: this.updateNoteContent})}
			</div>
		);
	}
}
