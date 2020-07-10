import Home from '../views/home'
const About = () =>
    import ( /* webpackChunkName: "about" */ '../views/about')
export default [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]