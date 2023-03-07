import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">
          <NavLink to={`filmler/${movie.id}`}>{movie.title}</NavLink>
        </span>
      ))}
      <Link to="/">
        <div className="home-button">Anasayfa</div>
      </Link>
    </div>
  );
}
