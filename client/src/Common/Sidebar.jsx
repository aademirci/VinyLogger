import { Link } from 'react-router-dom'
import SidebarIn from './SidebarIn'
import SidebarOut from './SidebarOut'
import { useCookies } from 'react-cookie'

const Sidebar = () => {
    const [cookies] = useCookies(['vinylogger'])

    return (
        <div>
            <div className="logo"><Link to="/">VinyLogger</Link></div>
            {cookies.vinylogger ? <SidebarIn /> : <SidebarOut />}
        </div>
    )
}

export default Sidebar