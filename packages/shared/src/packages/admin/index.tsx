import { RootState } from '../../app/store'
import { setAdmin, setDataBus, updateDataBus } from './adminSlice'
import { adminRead } from './actions/adminRead'
import { newCollectionBus } from './actions/newCollectionBus'
import { adminInit } from './actions/adminInit'

export const selectAdmin = (state: RootState) => state.admin
export const selectBus = (state: RootState) => state.admin.bus

export {
    adminInit,
    setAdmin,
    setDataBus,
    adminRead,
    newCollectionBus,
    updateDataBus,
}
