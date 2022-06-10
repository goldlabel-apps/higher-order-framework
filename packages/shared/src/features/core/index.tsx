import { RootState } from '../../app/store'
import { setCore } from './coreSlice'

import { navClick } from './actions/navClick'
import { navigateTo } from './actions/navigateTo'

export const selectCore = (state: RootState) => state.core
export const selectRoute = (state: RootState) => state.core.data.route
export const selectSSR = (state: RootState) => state.core.data.ssr

export { setCore, navClick, navigateTo }
