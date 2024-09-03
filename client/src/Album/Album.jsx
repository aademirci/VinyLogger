import React from 'react'

const Album = ({ artist, title, year }) => {
    return (
        <li className="album">
            <div className="album-control">
                <span className="album-move" title="Move to collection">{'>'}</span>
                <span className="album-delete" title="Delete">x</span>
            </div>
            <div className="album-cover">
                <p>{`${artist} - ${title}`}</p>
            </div>
            <p className="album-year">{year}</p>
        </li>
    )
}

export default Album