import axios from 'axios'

const Album = ({ artist, title, year, id, cookies, place }) => {
    const handleDelete = async () => {
        const { data } = await axios.put(`http://localhost:8080/album/remove/${place}/${id}`, {}, { headers: { Authorization: `Bearer ${cookies.vinylogger}` } })
        alert(data.msg)
        window.location.reload()
    }

    const handleMove = async () => {
        const { data } = await axios.put(`http://localhost:8080/album/move/${id}`, {}, { headers: { Authorization: `Bearer ${cookies.vinylogger}` } })
        alert(data.msg)
        window.location.reload()
    }

    return (
        <li className="album">
            <div className="album-control">
                <span className="album-move" title="Move to owned" onClick={handleMove}>{'>'}</span>
                <span className="album-delete" title="Delete" onClick={handleDelete}>x</span>
            </div>
            <div className="album-cover">
                <p>{`${artist} - ${title}`}</p>
            </div>
            <p className="album-year">{year}</p>
        </li>
    )
}

export default Album