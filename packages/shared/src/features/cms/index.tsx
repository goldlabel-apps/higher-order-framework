import { RootState } from '../../app/store'
import { setCms } from './cmsSlice'
import { cmsRead } from './actions/cmsRead'

export const selectCms = (state: RootState) => state.cms

export { setCms, cmsRead }
