import React, {Fragment} from 'react';

export default function NoteItemText(props) {
	return (
		<Fragment>
			<div contentEditable="true" spellCheck="false" placeholder="..."></div>
		</Fragment>
	);
}
