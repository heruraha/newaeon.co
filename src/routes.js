import MainScreen from 'containers/MainScreen';
import About from 'containers/About';

const routes = [
  {
    path: "/",
    component: MainScreen,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: true
  }
];

export default routes;
