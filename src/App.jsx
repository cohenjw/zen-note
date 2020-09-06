import React, {Component} from 'react';
import Header from './components/Header.jsx';
import NoteItems from './components/NoteItems.jsx';
import './styles/App.css';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: []
		};

		this.addNote = this.addNote.bind(this);
		this.updateNote = this.updateNote.bind(this);
		this.export = this.export.bind(this);
	}

	addNote() {
		this.setState({
			notes: [...this.state.notes, {title: '', content: ''}]
		});
	}

	updateNote(noteId, noteTitle, noteContent) {
		const notes = this.state.notes.slice();
		console.log(notes)
		notes.splice(noteId, 1, {noteTitle, noteContent});
		this.setState({notes: notes});
	}

	/**
	 * TODO: 
	 * Exports all notes, copying the serialized string to the clipboard.
	 */
	export() {
		console.log(JSON.stringify(this.state.notes));
		console.log(this.state.notes);
	}

	render() {
		return (
			<div id="App">
				<Header addNoteHandle={this.addNote} exportHandle={this.export}/>
				<NoteItems
					notes={this.state.notes}
				/>
			</div>
		);
	}
}
