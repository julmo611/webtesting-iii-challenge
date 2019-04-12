import React from 'react';

const Controls = props => {
	const { locked, closed, toggleLocked, toggleClosed } = props;

	return (
		<div className="controls panel">
			<button
				disabled={!closed}
				onClick={toggleLocked}
				data-testid="toggle-locked-btn"
				className="toggle-btn"
			>
				{locked ? 'Unlock Gate' : 'Lock Gate'}
			</button>
			<button
				disabled={locked}
				onClick={toggleClosed}
				data-testid="toggle-closed-btn"
				className="toggle-btn"
			>
				{closed ? 'Open Gate' : 'Close Gate'}
			</button>
		</div>
	);
};

export default Controls;
