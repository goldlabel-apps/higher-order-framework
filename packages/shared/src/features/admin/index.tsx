import { RootState } from '../../app/store'
import { setAdmin } from './adminSlice'

export const selectAdmin = (state: RootState) => state.admin
export { setAdmin }
