import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { auth } from "./firebase";

const GlobalStyles = createGlobalStyle`
	${reset}
	body{
		background: black;
		color: white;
	}
	*{box-sizing : border-box;}
`;

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/create-account",
		element: <CreateAccount />,
	},
]);

function App() {
	const [isLoading, setLoading] = useState(true);
	const init = async () => {
		//파이어베이스가 로그인체크 끝나면
		auth.authStateReady();
		setLoading(false);
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<>
			<GlobalStyles />
			{isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
		</>
	);
}

export default App;
