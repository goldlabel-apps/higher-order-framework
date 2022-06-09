import { RootState } from '../../app/store'
import { setCore } from './coreSlice'

import { navClick } from './actions/navClick'
import { navigateTo } from './actions/navigateTo'

export const selectCore = (state: RootState) => state.core
export { setCore, navClick, navigateTo }
