export const movieClips = [

    {
        id: 'routeEngine',
        border: "1px solid gold",
        component: 'RouteEngine',
        initialPosition: 'centered',
        options: {
            top: 0,
            left: 0,
            rotation: 0,
            scale: 1.2,
        },
        width: 290,
        height: 290,
        zIndex: 1000,
    },
    {  
        id: 'appMenu',
        component: 'AppMenu',
        initialPosition: 'topright',
        options: {
            top: 8,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: 100,
        height: 50,
        zIndex: 8000,
    },

    {
        id: 'work',
        component: 'Work',
        initialPosition: 'topleft',
        options: {
            top: 0,
            left:0,
            rotation: 0,
            scale: 1,
        },
        width: 300,
        height: 300,
        zIndex: 1200,
        border: "1px solid ",
    },



    // {
    //     id: 'social',
    //     component: 'Social',
    //     initialPosition: 'topmiddle',
    //     options: {
    //         top: 300,
    //         left: -150,
    //         rotation: 0,
    //         scale: 1,
    //     },
    //     width: 290,
    //     height: 275,
    //     zIndex: 1300,
    // },
]
