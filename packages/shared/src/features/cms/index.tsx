import { RootState } from '../../app/store'
import { setCms, setNewBus } from './cmsSlice'
import { cmsRead } from './actions/cmsRead'

export const selectCms = (state: RootState) => state.cms
export const selectBus = (state: RootState) => state.cms.bus

export { setCms, setNewBus, cmsRead }
