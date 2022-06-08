export interface NavigatorShape {
    menuItems: any
}
export const navigator: NavigatorShape = {
    menuItems: [
        
        {
            label: "Work",
            icon: "work",
            tooltip: "Work",
            color: "secondary",
            action: "onWorkClick"
        },
        {
            label: "Life",
            icon: "life",
            tooltip: "Life",
            color: "primary",
            action: "onLifeClick"
        },
        {
            label: "Balance",
            icon: "balance",
            tooltip: "Balance",
            color: "primary",
            action: "onBalanceClick"
        },

        {
            label: "Home",
            icon: "home",
            color: "primary",
            tooltip: "Add to home screen",
            action: "onHomeClick"
        },
    ]
}





/*
    onClick: () => {
        console.warn("Vanilla JS Add to Home Screen")
        // https://stackoverflow.com/questions/57595523/add-to-home-screen-menu-link`)
        let person = prompt("Please enter your name", "Harry Potter");
        if (person != null) {
            console.warn("Hello " + person + "! How are you today?")
        }
    },
*/