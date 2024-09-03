import AddButton from '../Common/AddButton'
import Album from './Album'

const Collection = () => {
    return (
        <div className="collection">
            <h1>Collection</h1>
            <h2>Heavy metal</h2>
            <ul className="album-collection">
                <Album artist="Judas Priest" title="Sad Wings of Destiny" year="1976" />
                <Album artist="Saxon" title="Saxon" year="1979" />
                <Album artist="Angel Witch" title="Angel Witch" year="1980" />
                <Album artist="Iron Maiden" title="Killers" year="1981" />
                <Album artist="Cirith Ungol" title="King of the Dead" year="1984" />
                <Album artist="Manowar" title="Sign of the Hammer" year="1985" />
                <Album artist="Iron Maiden" title="Somewhere in Time" year="1986" />
            </ul>
            <h2>Thrash metal</h2>
            <ul className="album-collection">
                <Album artist="Judas Priest" title="Sad Wings of Destiny" year="1976" />
                <Album artist="Saxon" title="Saxon" year="1979" />
                <Album artist="Angel Witch" title="Angel Witch" year="1980" />
                <Album artist="Iron Maiden" title="Killers" year="1981" />
            </ul>
            <AddButton />
        </div>
    )
}

export default Collection