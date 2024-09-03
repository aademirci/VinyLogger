import AddButton from '../Common/AddButton'
import Album from './Album'

const Wishlist = () => {
    return (
        <div className="wishlist">
            <h1>Wishlist</h1>
            <h2>Heavy metal</h2>
            <ul className="album-collection">
                <Album artist="Diamond Head" title="Borrowed Time" year="1982" />
                <Album artist="Black Sabbath" title="Born Again" year="1983" />
                <Album artist="Mercyful Fate" title="Melissa" year="1983" />
            </ul>
            <AddButton />
        </div>
    )
}

export default Wishlist