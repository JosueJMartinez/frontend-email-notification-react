import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
	const [inputValue, setInputValue] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [isBtnClicked, setIsBtnClicked] = useState(false);

	const isInitialMount = useRef(true);

	const navigate = useNavigate();

	const handleInputChange = evt => {
		setInputValue(evt.target.value);
	};

	const handleSubscribeClickEvt = evt => {
		setIsBtnClicked(true);
		setIsValid(validateEmail(inputValue) ? true : false);
	};

	const validateEmail = email => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			if (isValid && isBtnClicked) {
				navigate(`/success`, { state: { value: inputValue } });
			}
		}
	}, [inputValue, isBtnClicked, isValid, navigate]);

	return (
		<form>
			<div className='form-group'>
				<div className='flex-container '>
					<label htmlFor='validationEmail' className='form-label fs-7 fw-bolder'>
						Email address
					</label>
					<div
						id='validationEmailFeedback'
						className={`invalid-feedback m1-auto fs-7 fw-bolder ${!isValid && 'd-block'}`}
					>
						Valid email required
					</div>
				</div>
				<input
					type='email'
					className={`form-control mb-3 py-3 px-3 bg-white ${!isValid && 'is-invalid'}`}
					id='validationEmail'
					placeholder='email@company.com'
					onChange={handleInputChange}
					value={inputValue}
				/>
			</div>
			<div className='d-grid gap-2'>
				<button
					className='btn btn-primary my-custom-btn py-3'
					type='button'
					onClick={handleSubscribeClickEvt}
				>
					Subscribe to monthly newsletter
				</button>
			</div>
		</form>
	);
}
