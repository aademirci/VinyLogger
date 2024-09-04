/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useLocation } from 'react-router-dom'

const SidebarIn = () => {
    const location = useLocation()
    const [cookies, setCookie, removeCookie] = useCookies(['vinylogger'])
    const [visible, setVisible] = useState(false)

    return (
        <nav>
            <span className="menu-button" onClick={() => setVisible(visible ? false : true)}>Ξ</span>
            <div className="menu" style={{ display: visible ? 'block' : 'none' }}>
                <ul>
                    <li className={location.pathname === '/owned' ? 'active' : ''}><Link to="/owned">Owned</Link></li>
                    <li className={location.pathname === '/wishlist' ? 'active' : ''}><Link to="/wishlist">Wishlist</Link></li>
                </ul>
                <footer>
                    <span onClick={() => removeCookie('vinylogger')}>Sign out</span>
                </footer>
            </div>
        </nav>
    )
}

export default SidebarIn