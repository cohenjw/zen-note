import React from 'react';
import NoteItem from './NoteItem.jsx';
import '../styles/NoteItems.css';

export default function NoteItems(props) {
	/* ID is treated as an index for the notes array (meaning it could change as notes are removed). */
	return (
		<div id="note-items">
			{
				props.notes.map((note, i) => {
					return <NoteItem key={i} id={i} note={note} />
				})
			}
		</div>
	);
}
