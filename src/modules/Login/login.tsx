import React from 'react';

export default class Login extends React.Component {
	render() {
		return (
			<div className="login--container w-full bg-black min-h-screen text-gray-400 flex-col">
				<div className="login--header">
					<div className="login--header__logo" />
					<div className="login--header__title font-light mt-5 text-2xl ">
						<h1>Sign in to Suke </h1>
					</div>
				</div>
				<div className="login--auth__form  ">
                    <div className="main--form bg-gray-800 opacity-50  m-auto text-sm p-4 text-white font-thin  border border-gray-500 rounded">
                        <form>
                            <div className="form--group">
                                <label htmlFor="email" className=" opacity-100 ">Username or email address</label>
                                <input type="text" className='bg-black mt-2 mb-4 border-gray-400 border rounded w-11/12' name="input_username" id="username" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="password">Password</label>
                                <a href="/reset_password" className="forgot--password ">Forgot password?</a>
                                <input type="password" className="bg-black mt-2 border-gray-400 border rounded w-11/12" name="password" id="password" />
                            </div>
                            <div className="form--group">
                                <button type="submit" className="bg-green-500 mt-4 font-normal border-gray-400 border rounded w-11/12">Sign in</button>
                            </div>

                        </form>

                    </div>
                    <div className="form--group">
                                <p>Don't have an account ?</p>
                                <a href="/register" className="create--account">Create an account.</a>
                            </div>
                </div>
				<div className="login--footer">
                    <p>thanhngan22</p>
                </div>
			</div>
		);
	}
}
