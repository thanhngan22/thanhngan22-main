import React, { useState } from 'react';
import instance from 'services/axios';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'username') {
			setUsername(value);
		} else if (name === 'password') {
			setPassword(value);
		}
		console.log('username: ', username);
		console.log('password: ', password);
	};

	const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
		const listInputToFocus = [
			'.Login__Username',
			'.Login__Username',
			'.Login__Password',
			'.Login__Button',
		];
		console.log('You just pressed a key board ');
		if (e.key == 'Enter') {
			e.preventDefault();
		}
		if (e.key == 'ArrowDown' || e.key == 'Enter') {
			const nextInput = document.querySelector(
				listInputToFocus[id + 1]
			) as HTMLInputElement;
			nextInput?.focus();
		} else {
			if (e.key == 'ArrowUp') {
				const nextInput = document.querySelector(
					listInputToFocus[id - 1]
				) as HTMLInputElement;
				nextInput?.focus();
			}
		}
	};

	const handleShowHidePassword = () => {
		const passwordType = document.getElementById('password')?.getAttribute('type');

		// get eye icon
		const eyeSlash = document.querySelector('.hide__password');
		const eye = document.querySelector('.show__password');

		if (passwordType === 'password') {
			document.getElementById('password')?.setAttribute('type', 'text');
			// change icon
			eyeSlash?.classList.add('hidden');
			eye?.classList.remove('hidden');
		} else {
			document.getElementById('password')?.setAttribute('type', 'password');
			// change icon
			eyeSlash?.classList.remove('hidden');
			eye?.classList.add('hidden');
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// console.log(e);
		const data = {
			username: username,
			password: password,
		};
		console.log('data when submit:' , data);
		instance
			.post('/api/auth/login', data)
			.then((response) => {
				console.log('response data: ', response.status);
				if (response.status == 200) {
					console.log('Navigate to dashboard')
					navigate("/home");
				}
			})
			.catch((error) => {
				console.error('error submit: ', error);
			});
	};

	return (
		<div className="login--container w-full bg-gray-900 min-h-screen flex-col">
			<div className="login--header">
				<div className="login--header__logo" />
				<div className="login--header__title font-light mt-5 text-gray-200 text-2xl ">
					<h1>Sign in to Suke </h1>
				</div>
			</div>
			<div className="login--auth__form  ">
				<div className="main--form  m-auto p-4 text-white  border border-gray-700 rounded">
					<form>
						<div className="form--group">
							<label htmlFor="email" className="text-sm mr-20 ">
								Username or email address
							</label>
							<input
								type="text"
								className="Login__Username bg-gray-900 pl-1 mt-2 mb-4 border-gray-600 border rounded w-11/12 h-7 text-sm"
								name="username"
								id="username"
								onChange={(event) => handleOnChange(event)}
								onKeyDown={(e) => handleOnKeyDown(e, 1)}
								value={username}
							/>
						</div>
						<div className="form--group">
							<label htmlFor="password" className="text-sm mr-24">
								Password
							</label>
							<a
								href="/reset_password"
								className="forgot--password text-xs text-blue-600 "
							>
								Forgot password?
							</a>
							<div className="">
								<input
									type="password"
									className=" Login__Password bg-gray-900 pl-1 relative mt-2 border-gray-600 border rounded w-11/12 h-7 text-xs"
									name="password"
									id="password"
									onChange={(event) => handleOnChange(event)}
									onKeyDown={(e) => handleOnKeyDown(e, 2)}
									value={password}
								/>
								<div>
									<FontAwesomeIcon
										icon={faEyeSlash}
										onClick={handleShowHidePassword}
										className=" hide__password text-gray-500  text-xs cursor-pointer absolute ml-24 -mt-5"
									/>
									<FontAwesomeIcon
										icon={faEye}
										onClick={handleShowHidePassword}
										className=" show__password hidden text-gray-500  text-xs cursor-pointer absolute ml-24 -mt-5"
									/>
								</div>
							</div>
						</div>
						<div className="form--group">
							<button
								type="submit"
								className="Login__Button bg-green-700 h-8 mt-4 font-medium text-sm border-gray-400 border rounded w-11/12"
								onClick={handleSubmit}
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
				<div className="form--group login--callout border-gray-700 border p-3  rounded text-white text-sm flex m-auto justify-center mt-6">
					<p className="mr-4">New to Suke ?</p>
					<a href="/register" className="create--account text-blue-500">
						Create an account.
					</a>
				</div>
			</div>
			<div className="login--footer mt-8 text-gray-400">
				<p>© thanhngan22 ©</p>
			</div>
		</div>
	);
}
