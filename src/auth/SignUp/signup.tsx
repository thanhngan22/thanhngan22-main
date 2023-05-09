import React from 'react';
import Typed from 'typed.js';
import instance from 'services/axios';

export default function SignUp() {
	// Create reference to store the DOM element containing the animation
	const el1 = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el1.current, {
			strings: ['❤️ Welcome to Suke ❤️'],
			typeSpeed: 50,
			// backSpeed: 0,
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const container = document.querySelector('.register--auth__form');
		const form = container?.querySelector('form');
		const formData = form ? new FormData(form) : new FormData();

		interface Data {
			[key: string]: any;
		}
		const data: Data = {};
		console.log('data request: ');

		for (const [key, value] of formData.entries()) {
			console.log(`key: ${key}, value: ${value}`);
			data[key] = value;
		}

		instance
			.post('/api/auth/register', data)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className="register--container w-full bg-gray-900 min-h-screen flex-col">
			<div className="register--header pt-10">
				<div className="register--header__logo" />

				<div className="register--header__title font-light mt-4 text-gray-200 text-2xl mb-2">
					<h1>Sign up </h1>
				</div>
				<span className="typing text-white " ref={el1} />
			</div>
			<div className="register--auth__form mt-3 ">
				<div className="main--form  m-auto p-4 text-white  border border-gray-700 rounded">
					<form>
						<div className="form--group flex-col self-start">
							<label htmlFor="username" className="text-sm mr-40 ">
								Username{' '}
							</label>
							<input
								type="text"
								className="Register__InputUsername bg-gray-900 mt-2 mb-4 border-gray-600 border rounded w-11/12 pl-2"
								name="username"
								onKeyDown={(e) => {
									// prevent event submit form when enter
									e.preventDefault()

									if (e.key == 'ArrowDown' || e.key == 'Enter') {
										const nextInput = document.querySelector(
											'.Register__InputPassword'
										) as HTMLInputElement;
										nextInput?.focus();
									}
								}}
							/>
						</div>

						<div className="form--group">
							<label htmlFor="password" className="text-sm mr-40">
								Password{' '}
							</label>
							<input
								type="password"
								className="Register__InputPassword bg-gray-900 mt-2 mb-4 border-gray-600 border rounded w-11/12 pl-2"
								name="password"
								onKeyDown={(e) => {
									e.preventDefault()

									if (e.key == 'ArrowUp' ) {
										const nextInput = document.querySelector(
											'.Register__InputUsername'
										) as HTMLInputElement;
										nextInput?.focus();
									} else if (e.key == 'ArrowDown' || e.key == 'Enter') {
										const nextInput = document.querySelector(
											'.Register__InputEmail'
										) as HTMLInputElement;
										nextInput?.focus();
									}
								}}
							/>
						</div>
						<div className="form--group">
							<label htmlFor="email" className="text-sm mr-36 ">
								Email address
							</label>
							<input
								type="email"
								className="Register__InputEmail bg-gray-900 mt-2 mb-4 border-gray-600 border rounded w-11/12 pl-2"
								name="email"
								onKeyDown={(e) => {
									e.preventDefault()
									if (e.key == 'ArrowUp') {
										const nextInput = document.querySelector(
											'.Register__InputPassword'
										) as HTMLInputElement;
										nextInput?.focus();
									} else if (e.key == 'ArrowDown' || e.key == 'Enter') {
										const nextInput = document.querySelector(
											'.Register__ButtonSubmit'
										) as HTMLInputElement;
										nextInput?.focus();
									}
								}}
							/>
						</div>

						<div className="form--group">
							<button
								type="submit"
								className="Register__ButtonSubmit bg-green-700 h-8 mt-4 font-medium text-sm border-gray-400 border rounded w-11/12"
								onClick={handleSubmit}
								onKeyDown={(e) => {
									if (e.key == 'ArrowUp') {
										const nextInput = document.querySelector(
											'.Register__InputEmail'
										) as HTMLInputElement;
										nextInput?.focus();
									}
								}}
							>
								Sign up
							</button>
						</div>
					</form>
				</div>

				<div className="form--group flex-col  register--callout border-gray-700 border  rounded text-white text-sm m-auto justify-center mt-10">
					<p className="mt-3 mb-3 text-gray-500">________or sign up with________</p>
					<div className="register--callout__social flex justify-around mx-16 mb-3">
						<div className="iconFB" />
						<div className="iconGG" />
						<div className="iconGH" />
					</div>
				</div>
			</div>
			<div className="register--footer mt-40 text-gray-400">
				<p>© thanhngan22 ©</p>
			</div>
		</div>
	);
}
