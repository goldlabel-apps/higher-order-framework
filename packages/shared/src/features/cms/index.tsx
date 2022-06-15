import { RootState } from '../../app/store'
import { setCms, setDataBus, updateDataBus } from './cmsSlice'
import { cmsRead } from './actions/cmsRead'
import { newCollectionBus } from './actions/newCollectionBus'
import { cmsInit } from './actions/cmsInit'

export const selectCms = (state: RootState) => state.cms
export const selectBus = (state: RootState) => state.cms.bus

export { setCms, setDataBus, cmsRead, newCollectionBus, updateDataBus, cmsInit }
