export const clips = [
    {
        id: 'sky',
        // border: "1px solid green",
        component: 'Sky',
        initialPosition: 'topleft',
        options: {
            top: 0,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: '100%',
        height: '100vh',
    },

    {
        id: 'social',
        component: 'Social',
        initialPosition: 'topmiddle',
        options: {
            top: 195,
            left: 210,
            rotation: 0,
            scale: 1,
        },
        width: 150,
        zIndex: 1400,
    },

    {
        id: 'work',
        component: 'Work',
        initialPosition: 'topmiddle',
        options: {
            top: 100,
            left: -160,
            rotation: 0,
            scale: 1,
        },
        width: 200,
        zIndex: 1200,
    },
    {
        id: 'life',
        component: 'Life',
        initialPosition: 'topmiddle',
        options: {
            top: 100,
            left: 50,
            rotation: 0,
            scale: 1,
        },
        width: 200,
        zIndex: 1300,
    },

    {
        id: 'balance',
        component: 'Balance',
        initialPosition: 'topmiddle',
        options: {
            top: 100,
            left: 225,
            rotation: 0,
            scale: 1,
        },
        width: 200,
        zIndex: 1400,
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

    {
        id: 'appMenu',
        component: 'AppMenu',
        initialPosition: 'topright',
        options: {
            top: 0,
            left: 0,
            rotation: 0,
            scale: 1,
        },
        width: 50,
        height: 50,
    },
]
