import { useCookies } from 'react-cookie'
import Vinyl from './_assets/vinyl.png'
import AddButton from './Common/AddButton'

function App() {
    const [cookies] = useCookies(['vinylogger'])

    return (
        <div className="welcome">
            <img src={Vinyl} alt="Vinyl icon" />
            <p>Log and share your vinyl collection. Plan your wishlist.</p>
            {cookies.vinylogger && <AddButton />}
        </div>
    )
}

export default App
