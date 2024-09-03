import { Link } from 'react-router-dom'
import SidebarIn from './SidebarIn'
import SidebarOut from './SidebarOut'

const Sidebar = () => {
    const signedIn = false

    return (
        <div>
            <div className="logo"><Link to="/">VinyLogger</Link></div>
            {signedIn ? <SidebarIn /> : <SidebarOut />}
        </div>
    )
}

export default Sidebar