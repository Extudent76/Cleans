// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lending from './Lending';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ServicesPage from './servicesPage';

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Lending />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/service" element={<ServicesPage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
