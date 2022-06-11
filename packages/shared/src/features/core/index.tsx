import { RootState } from '../../app/store'
import { setCore } from './coreSlice'

import { navClick } from './actions/navClick'
import { navigateTo } from './actions/navigateTo'
import { signIn } from './actions/signIn'
import { unsignIn } from './actions/unsignIn'

export const selectCore = (state: RootState) => state.core
export const selectRoute = (state: RootState) => state.core.data.route
export const selectRefresh = (state: RootState) => state.core.data.refresh

export const selectSSR = (state: RootState) => state.core.data.ssr

export { setCore, navClick, navigateTo, signIn, unsignIn }
