import AdminMenu from './AdminMenu'
import CMS from './CMS'

import { RootState } from '../../app/store'
import { setAdmin } from './adminSlice'
import { adminAction } from './actions/adminAction'

export const selectAdmin = (state: RootState) => state.admin
export { AdminMenu, CMS, setAdmin, adminAction }
