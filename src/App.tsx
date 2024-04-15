import { Navigate } from './components/Navigate'
import { navigationLinks } from './data'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { About } from './pages/About'
import { Catalog } from './pages/Catalog'
import { Contacts } from './pages/Contacts'
import { Footer } from './components/Footer'
function App() {
	return (
		<>
			<Navigate navigationLinks={navigationLinks} />
			<main>
				<aside>aside</aside>
				<section>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path=' /about' element={<About />} />
						<Route path='/catalog' element={<Catalog />} />
						<Route
							path='/contacts'
							element={<Contacts />}
						/>
					</Routes>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default App
