import { RootState } from '../../app/store'
import { setCore } from './coreSlice'

import { navClick } from './actions/navClick'

export const selectCore = (state: RootState) => state.core
export { setCore, navClick }
