import React from 'react';

export default class Login extends React.Component {
	render() {
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
                                <label htmlFor="email" className="text-sm mr-20 ">Username or email address</label>
                                <input type="text" className='bg-gray-900 mt-2 mb-4 border-gray-600 border rounded w-11/12' name="input_username" id="username" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="password" className="text-sm mr-24">Password</label>
                                <a href="/reset_password" className="forgot--password text-xs text-blue-600 ">Forgot password?</a>
                                <input type="password" className="bg-gray-900 mt-2 border-gray-600 border rounded w-11/12" name="password" id="password" />
                            </div>
                            <div className="form--group">
                                <button type="submit" className="bg-green-700 h-8 mt-4 font-medium text-sm border-gray-400 border rounded w-11/12">Sign in</button>
                            </div>

                        </form>

                    </div>
                    <div className="form--group login--callout border-gray-700 border p-3  rounded text-white text-sm flex m-auto justify-center mt-6">
                                <p className="mr-4">New to Suke ?</p>
                                <a href="/register" className="create--account text-blue-500">Create an account.</a>
                            </div>
                </div>
				<div className="login--footer mt-8 text-gray-400">
                    <p>© thanhngan22  ©</p>
                </div>
			</div>
		);
	}
}
