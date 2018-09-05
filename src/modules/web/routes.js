// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../components/common/loader'

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/home'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/dashboard',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/dashboard'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/lorem',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/lorem'),
      loading: LoadingComponent,
    }),
  },

]

export default routes
