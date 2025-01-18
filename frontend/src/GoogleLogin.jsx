import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./api";
import { useNavigate } from 'react-router-dom';

const GoogleLogin = (props) => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				const result = await googleAuth(authResult.code);
				const { email, name, image } = result.data.user;
				const token = result.data.token;
				const obj = { email, name, token, image };
				localStorage.setItem('user-info', JSON.stringify(obj));
				navigate('/dashboard');
			} else {
				console.log(authResult);
				throw new Error(authResult);
			}
		} catch (e) {
			console.log('Error while Google Login...', e);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
			<div className="bg-white rounded-lg p-10 shadow-lg w-96">
				<h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome to TensorGo</h2>
				<p className="text-lg text-center text-gray-600 mb-8">Sign in to continue</p>
				<button 
					onClick={googleLogin} 
					className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition ease-in-out duration-200"
				>
					Sign in with Google
				</button>
			</div>
		</div>
	);
};

export default GoogleLogin;
