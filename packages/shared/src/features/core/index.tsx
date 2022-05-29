import { RootState } from '../../app/store'
import { setCore } from './coreSlice'

export const selectCore = (state: RootState) => state.core
export { setCore }
