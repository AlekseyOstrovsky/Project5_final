import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './components/Admin/AdminPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components//Shop/Shop';
import ProductPage from './components/Shop/ProductPage';
import Cart from './components/Cart/Cart';

function App() {	
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div>
				<Header/>
				<div className="wrapper container">
					<Routes>
						<Route path='/admin' element={<AdminPage/>}/>
						<Route path='/shop' element={<Shop/>}/>
						<Route index element={<Shop/>}/>
						<Route path='/shop/:id' element = {<ProductPage/>}/>
						<Route path='/cart' element={<Cart/>}/>
					</Routes>
				</div>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
