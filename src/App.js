// import './styles/App.scss';
import * as React from 'react';
import SubscriptionPage from './Pages/SubscriptionPage';
import SuccessfulNotificationPage from './Pages/SuccessfulNotificationPage';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter basename='/'>
			<Routes>
				<Route path='/' element={<SubscriptionPage />} />
				<Route path='/success' element={<SuccessfulNotificationPage />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
