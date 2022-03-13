import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import AppRouter from './AppRouter';
import LoginScreen from '../pages/LoginScreen';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const LoginRouter = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRouter>
							<LoginScreen />
						</PublicRouter>
					}
				></Route>
				<Route
					path="*"
					element={
						<PrivateRouter>
							<AppRouter />
						</PrivateRouter>
					}
				></Route>
			</Routes>
		</Router>
	);
};

export default LoginRouter;
