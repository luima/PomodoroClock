import React from "react";
import logo from "./logo.svg";


function Settings(props) {
	return (
		<div>
			<div>
				<span id="break-label">Break Length</span>
				<button id="break-increment" type="button"> + </button>
				<span id="break-length">{props.breakLength}</span>
				<button id="break-decrement" type="button"> - </button>
			</div>
			<div>
				<span id="session-label">Session Length</span>
				<button id="session-increment" type="button"> + </button>
				<span id="session-length">{props.sessionLength}</span>
				<button id="session-decrement" type="button"> - </button>
			</div>
		</div>
	);
}

function Timer() {
	return (
		<div>
			<div>
				<span id="timer-label">Session</span>
			</div>
			<div>
				<span id="time-left">25:00</span>
			</div>
			<div>
				<button id="start_stop" type="button"> Start </button>
				<button id="reset" type="button"> Reset </button>
			</div>
		</div>
	);
}

function App() {
	return (
		<div>
			<Timer />
			<Settings breakLength="5" sessionLength="25" />
		</div>
	);
}

export default App;
