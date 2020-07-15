import xiuGai from "../views/person/components/mysetion/xiuGai";
import PerCenter from "../views/person/components/PerCenter";
import myorder from "../views/person/components/mysetion/myorder";
import mycomment from "../views/person/components/mysetion/mycomment";
import personalData from "../views/person/components/mysetion/personalData";
import nav from "../views/person/components/nav";
import ShiAddress from "../views/person/components/mysetion/ShiAddress";
import Information from "../views/person/components/mysetion/Information";
import Mypoints from "../views/person/components/mysetion/Mypoints";
import MyCoupon from "../views/person/components/mysetion/MyCoupon";
import MyMessage from "../views/person/components/mysetion/MyMessage";
export default [{

        path: '/PerCenter',
        name: 'PerCenter',
        component: PerCenter,
        children: [{
                path: '/PerCenter/myorder',
                name: 'myorder',
                component: myorder
            },
            {
                path: '/PerCenter/mycomment',
                name: 'mycomment',
                component: mycomment
            },
            {
                path: '/PerCenter/personalData',
                name: 'personalData',
                component: personalData,
            },
            {
                path: '/PerCenter/personalData/xiuGai',
                name: 'xiuGai',
                component: xiuGai,
            },
            {
                path: '/PerCenter/ShiAddress',
                name: 'ShiAddress',
                component: ShiAddress,
            },
            {
                path: '/PerCenter/Information',
                name: 'Information',
                component: Information,
            },
            {
                path: '/PerCenter/Mypoints',
                name: 'Mypoints',
                component: Mypoints,
            },
            {
                path: '/PerCenter/MyCoupon',
                name: 'MyCoupon',
                component: MyCoupon,
            },
            {
                path: '/PerCenter/MyMessage',
                name: 'MyMessage',
                component: MyMessage,
            },


        ]
    },
    {
        path: '/nav',
        name: 'nav',
        component: nav
    },


]