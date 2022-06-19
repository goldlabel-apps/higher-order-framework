export const clips = [

    {
        id: 'search',
        // border: "1px solid green",
        component: 'Search',
        initialPosition: 'topmiddle',
        options: {
            top: 16,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: 580,
        zIndex: 9000,
    },

    {
        id: 'social',
        component: 'Social',
        initialPosition: 'topmiddle',
        options: {
            top: 95,
            left: 220,
            rotation: 0,
            scale: 1,
        },
        width: 150,
        zIndex: 1400,
    },

    {
        id: 'content',
        component: 'RouteEngine',
        initialPosition: 'topmiddle',
        options: {
            top: 80,
            left: -175,
            rotation: 0,
            scale: 1,
        },
        width: 290,
        height: 100,
        zIndex: 1000,
    },

    {
        id: 'work',
        component: 'Work',
        initialPosition: 'topmiddle',
        options: {
            top: 200,
            left: -125,
            rotation: 0,
            scale: 1,
        },
        width: 300,
        zIndex: 1200,
    },
    {
        id: 'life',
        component: 'Life',
        initialPosition: 'topmiddle',
        options: {
            top: 290,
            left: -125,
            rotation: 0,
            scale: 1,
        },
        width: 300,
        zIndex: 1300,
    },

    {
        id: 'balance',
        component: 'Balance',
        initialPosition: 'topmiddle',
        options: {
            top: 380,
            left: -125,
            rotation: 0,
            scale: 1,
        },
        width: 300,
        zIndex: 1400,
    },




]
