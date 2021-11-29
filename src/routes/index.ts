import {
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { RouteMap } from '../types';
import AboutScreen from '../components/AboutScreen';

// todo remove me once routes working
// eslint-disable-next-line import/no-cycle
import HomeScreen from '../components/HomeScreen';

export const defaultRoute: RouteMap = {
  element: HomeScreen,
  route: '/',
  title: 'home',
  description: 'home',
  icon: VideoCameraOutlined,
};

// eslint-disable-next-line import/prefer-default-export
export const routes: RouteMap[] = [
  defaultRoute,
  {
    element: AboutScreen,
    route: '/about',
    title: 'about',
    description: 'about',
    icon: VideoCameraOutlined,
  },
  {
    element: AboutScreen,
    route: '/other',
    title: 'other',
    description: 'other',
    icon: UploadOutlined,
  },
];
