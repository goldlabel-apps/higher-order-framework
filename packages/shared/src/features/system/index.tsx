import { RootState } from '../../app/store'

import {
    notify,
    navigateTo,
    routeTo,
    urlCommand,
    getIpgeolocation,
} from './actions'

export {
    routeTo,
    urlCommand,
    notify,
    navigateTo,
    getIpgeolocation,
}
export const selectPJSON = (state: RootState) => state.system.pJSON
export const selectSystem = (state: RootState) => state.system
