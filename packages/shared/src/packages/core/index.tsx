import { RootState } from '../../app/store'
import { setCore } from './coreSlice'

import { svgImageBtnClick } from './actions/svgImageBtnClick'
import { navClick } from './actions/navClick'
import { navigateTo } from './actions/navigateTo'
import { signIn } from './actions/signIn'
import { unsignIn } from './actions/unsignIn'
import { openLink } from './actions/openLink'

export const selectCore = (state: RootState) => state.core
export const selectRoute = (state: RootState) => state.core.data.route
export const selectRefresh = (state: RootState) => state.core.data.refresh

export const selectSSR = (state: RootState) => state.core.data.ssr

export { setCore, navClick, svgImageBtnClick, navigateTo, signIn, unsignIn, openLink }
