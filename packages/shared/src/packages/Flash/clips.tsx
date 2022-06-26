export const clips = [
    {
        id: 'content',
        component: 'RouteEngine',
        initialPosition: 'topmiddle',
        options: {
            top: 0,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: 300,
        zIndex: 1000,
    },
    {
        id: 'search',
        // border: "1px solid green",
        component: 'Search',
        initialPosition: 'bottommiddle',
        options: {
            top: -50,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: 300,
        zIndex: 9000,
    },

]
