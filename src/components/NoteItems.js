import React from 'react';
import NoteItem from './note-items/NoteItem.js';
import NoteItemText from './note-items/NoteItemText.js';
import '../styles/NoteItems.css';

export default function NoteItems(props) {
	const notes = [];

	/* ID is treated as an index for the notes array (meaning it could change as notes are removed). */
	for (let i = 0; i < props.notes.length; ++i) {
		notes.push(
			<NoteItem key={i} id={i} updateNoteHandle={props.updateNoteHandle}>
				<NoteItemText/>
			</NoteItem>
		);
	}

	return (
		<div id="note-items">
			{notes}
		</div>
	);
}
