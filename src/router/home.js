const home = () =>
    import ('../views/home')
export default [{
        path: '/home/:id?',
        name: 'home',
        component: home
    },
    {
        path: '/',
        name: 'home',
        component: home
    }

]