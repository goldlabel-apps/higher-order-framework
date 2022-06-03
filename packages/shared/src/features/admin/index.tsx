import AdminMenu from './components/AdminMenu'
import CMS from './components/CMS'
import DialogSignin from './components/DialogSignin'

import { RootState } from '../../app/store'
import { setAdmin } from './adminSlice'
import { adminAction } from './actions/adminAction'

export const selectAdmin = (state: RootState) => state.admin
export { AdminMenu, DialogSignin, CMS, setAdmin, adminAction }
