export interface NavigatorShape {
    menuItems: any
}
export const collections: NavigatorShape = {
    menuItems: [
        {
        },
        {
            label: 'Life',
        },
        {
            label: 'Balance',
            pathname: '/balance',
        },
    ],
}

/*


{
            label: 'Home',
            type: 'mini',
            icon: 'home',
            color: 'primary',
            tooltip: 'Add to home screen',
            action: 'onHomeClick',
            pathname: '/add-to-home',
        },



    onClick: () => {
        console.warn("Vanilla JS Add to Home Screen")
        // https://stackoverflow.com/questions/57595523/add-to-home-screen-menu-link`)
        let person = prompt("Please enter your name", "Harry Potter");
        if (person != null) {
            console.warn("Hello " + person + "! How are you today?")
        }
    },
*/
