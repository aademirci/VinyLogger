import { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarIn = () => {
    const [visible, setVisible] = useState(false)

    return (
        <nav>
            <span className="menu-button" onClick={() => setVisible(visible ? false : true)}>Ξ</span>
            <div className="menu" style={{ display: visible ? 'block' : 'none' }}>
                <ul>
                    <li><Link to="/collection">Collection</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                </ul>
                <footer>
                    <Link to="">Sign out</Link>
                </footer>
            </div>
        </nav>
    )
}

export default SidebarIn