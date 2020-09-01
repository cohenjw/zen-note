import React, {Component} from 'react';
import '../styles/Header.css';

export default class Header extends Component {
	render() {
		return (
			<header>
				<div id="title">
					<span>Zen</span>
					<div id="logo"></div>
					<span>Note</span>
				</div>
				<br/>
				<div id="import-button" className="button"></div>
				<div id="add-button" className="button" onClick={() => this.props.addNoteHandle()}></div>
				<div id="export-button" className="button" onClick={this.props.exportHandle}></div>
			</header>
		);
	}
}
