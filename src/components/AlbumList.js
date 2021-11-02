import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {

  let dataAlbum = albums.map((item) => {
    return <AlbumCard
      key={item.id}
      name={item.name}
      image={item.image}
      genre={item.genre}
    />
  })
  
  return <section className="albums">{dataAlbum}</section>

}

export default AlbumList;
