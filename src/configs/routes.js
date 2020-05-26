// Import: Client
import { HomePage, NoMatchPage, TestPage } from "../components";

const routes = [
	{
		path: "/",
		exact: true,
		component: HomePage,
	},
	{
		path: "/test",
		component: TestPage,
	},
	{
		component: NoMatchPage,
	},
];

export default routes;
