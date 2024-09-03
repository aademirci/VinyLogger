import Vinyl from './_assets/vinyl.png'
import AddButton from './Common/AddButton'

function App() {
    const signedIn = false

    return (
        <div className="welcome">
            <img src={Vinyl} alt="Vinyl icon" />
            <p>Log and share your vinyl collection. Plan your wishlist.</p>
            {signedIn && <AddButton />}
        </div>
    )
}

export default App
