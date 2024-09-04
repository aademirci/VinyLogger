import AddButton from '../Common/AddButton'
import Album from './Album'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Vinyl from '../_assets/vinyl.png'
import { useNavigate } from 'react-router-dom'

const Albums = ({ place }) => {
    const navigate = useNavigate()
    const [cookies] = useCookies(['vinylogger'])
    const [username, setUserName] = useState('')
    const [albums, setAlbums] = useState()

    useEffect(() => {
        if (cookies.vinylogger) {
            const tokenArray = cookies.vinylogger.split('.')
            const tokenPayload = JSON.parse(window.atob(tokenArray[1]))
            setUserName(tokenPayload.username)
            if(username) axios.get(`http://localhost:8080/${username}/${place}`, { headers: { Authorization: `Bearer ${cookies.vinylogger}` } }).then(result => setAlbums(Object.groupBy(result.data[place], e => e.genre)))
        } else {
            navigate('/')
        }
    }, [cookies, username, place, navigate])

    if (albums && Object.keys(albums).length) {
        return (
            <div className={place}>
                {place === 'owned' ? <h1>Owned albums</h1> : <h1>Wishlist</h1>}
                {Object.keys(albums).map((genre, i) => {
                    return (
                        <div key={i}>
                            <h2>{genre}</h2>
                            <ul className="album-collection">
                                {albums[genre].sort((a, b) => a.year - b.year).map(album => <Album key={album._id} artist={album.artist} title={album.title} year={album.year} id={album._id} cookies={cookies} place={place} />)}
                            </ul>
                        </div>
                        
                    )
                })}
                <AddButton />
            </div>
        )
    } else {
        return (
            <div className="welcome">
                <img src={Vinyl} alt="Vinyl icon" />
                <p>Add some album!</p>
                <AddButton />
            </div>
        )
    }
    
}

export default Albums