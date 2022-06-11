export const movieClips = [
    {
        id: 'routeEngine',
        component: 'RouteEngine',
        initialPosition: 'centered',
        options: {
            top: 8,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: '75%',
        height: 500,
        zIndex: 1000,
    },
    {
        id: 'navigator',
        component: 'Navigator',
        initialPosition: 'bottommiddle',
        width: 300,
        height: 40,
        options: {
            top: -8,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        zIndex: 5000,
    },
]

/*

{
        id: 'appMenu',
        component: 'AppMenu',
        initialPosition: 'bottomright',
        options: {
            top: -8,
            left: -8,
            rotation: 0,
            scale: 1,
        },
        width: 50,
        height: 50,
        zIndex: 8000,
    },


{
        id: 'logo',
        component: 'Macromedia',
        initialPosition: 'centered',
        width: 100,
        height: 100,
        zIndex: 100,
        options: {
            top: 0,
            left: 0,
            rotation: 0,
            scale: 0.5,
        },
    },
    
*/