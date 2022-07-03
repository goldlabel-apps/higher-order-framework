import {
    Search,
    Navigator,
    RouteEngine,
    AppMenu,
    Social,
    Sky,
    LayoutHome,
    SVGImageBtn,
    Punk,
} from '../../../listingslab-shared'

export const getComponent = (componentName: string) => {
    switch (componentName) {
        case 'LayoutHome':
            return <LayoutHome />

        case 'AppMenu':
            return <AppMenu />

        case 'Sky':
            return <Sky />

        case 'Punk':
            return <Punk />

        case 'Search':
            return <Search />

        case 'Social':
            return <Social />

        case 'RouteEngine':
            return <RouteEngine />

        case 'Navigator':
            return <Navigator />

        case 'SVGImageBtn':
            return <SVGImageBtn />

        default:
            return null
    }
}
