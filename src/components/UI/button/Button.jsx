import React from 'react';
import './Button.css';

export const Button = (props) => {
	return (
		<div className='contain'>
			<button disabled={props.disabled} className='btn' onClick={props.onClick}>
				{props.title}
			</button>
		</div>
	);
};


