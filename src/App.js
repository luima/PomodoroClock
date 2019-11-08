import React, { useState } from 'react';

function Break(props) {
  const { breakLength, incrementBreak, decrementBreak } = props;
  return (
    <div>
      <span id="break-label">Break Length</span>
      <button id="break-increment" type="button" onClick={incrementBreak}>
        +
      </button>
      <span id="break-length">{breakLength}</span>
      <button id="break-decrement" type="button" onClick={decrementBreak}>
        -
      </button>
    </div>
  );
}

function Session(props) {
  const { sessionLength, incrementSession, decrementSession } = props;
  return (
    <div>
      <span id="session-label">Session Length</span>
      <button id="session-increment" type="button" onClick={incrementSession}>
        +
      </button>
      <span id="session-length">{sessionLength}</span>
      <button id="session-decrement" type="button" onClick={decrementSession}>
        -
      </button>
    </div>
  );
}

function Timer(props) {
  return (
    <div>
      <div>
        <span id="timer-label">Session</span>
      </div>
      <div>
        <span id="time-left">{props.sessionLength}</span>
      </div>
      <div>
        <button id="start_stop" type="button">
          Start
        </button>
        <button id="reset" type="button">
          Reset
        </button>
      </div>
    </div>
  );
}

function App() {
  const [breakLength, setBreak] = useState(5);

  const incrementBreakHandler = () => {
    setBreak(breakLength + 1);
  };
  const decrementBreakHandler = () => {
    setBreak(breakLength - 1);
  };

  const [sessionLength, setSession] = useState(25);

  const incrementSessionHandler = () => {
    setSession(sessionLength + 1);
  };
  const decrementSessionHandler = () => {
    setSession(sessionLength - 1);
  };

  const centered = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <div style={centered}>
      <Timer breakLength={breakLength} sessionLength={sessionLength} />
      <Break
        breakLength={breakLength}
        incrementBreak={incrementBreakHandler}
        decrementBreak={decrementBreakHandler}
      />
      <Session
        sessionLength={sessionLength}
        incrementSession={incrementSessionHandler}
        decrementSession={decrementSessionHandler}
      />
    </div>
  );
}

export default App;
