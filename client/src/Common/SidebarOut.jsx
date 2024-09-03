import { Link } from 'react-router-dom'

const SidebarOut = () => {
    return (
        <div className="call-to-sign"><Link to="sign-in">Sign in</Link> or <Link to="sign-up">sign up</Link> to start.</div>
    )
}

export default SidebarOut