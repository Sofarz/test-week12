import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const AlbumDetail = () => {
    const { albumId } = useParams()
    const [albums, setAlbums] = useState([])

    useEffect (()=> {
        fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}`)
        .then((res) => res.json())
        .then((json) => {
            setAlbums(json.album)
        })
    }, [albumId])

    return (
        <div>
            {albums.map((album) => (
                <div key={album.idAlbum}>
                    <img src={album.strAlbumThumb} alt={album.strAlbum} />
                    <h1>Release date: {album.intYearReleased}</h1>
                    <h2>Genre: {album.strGenre}</h2>
                </div>
            ))}
        </div>
    )
}