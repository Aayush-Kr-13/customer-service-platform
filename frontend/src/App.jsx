import './App.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from './GoogleLogin';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Dashboard from './Dashboard';
import { useState } from 'react';
import RefrshHandler from './RefreshHandler';
import NotFound from './NotFound';
import GeneralQ from './generalQ'
import ProductF from './productF'
import ProductP from './productP'
import FeatureI from './featureI'

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const GoogleWrapper = ()=>(
		<GoogleOAuthProvider clientId="869795000560-7mpa9u594n3qpah1q3jm5boq8kqf6fm3.apps.googleusercontent.com">
			<GoogleLogin></GoogleLogin>
		</GoogleOAuthProvider>
	)
	const PrivateRoute = ({ element }) => {
		return isAuthenticated ? element : <Navigate to="/login" />
	}
	return (
		<BrowserRouter>
		    <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
			<Routes>
				<Route path="/login" element={<GoogleWrapper />} />
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path='/dashboard' element={<PrivateRoute element={<Dashboard/>}/>}/>
				<Route path='/service-request/general-queries' element={<PrivateRoute element={<GeneralQ/>}/>}/>
				<Route path='/service-request/product-features' element={<PrivateRoute element={<ProductF/>}/>}/>
				<Route path='/service-request/product-pricing' element={<PrivateRoute element={<ProductP/>}/>}/>
				<Route path='/service-request/feature-implementation' element={<PrivateRoute element={<FeatureI/>}/>}/>
				<Route path="*" element={<NotFound/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
