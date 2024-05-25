import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../utils/getHeroeById";
import { useMemo } from "react";

export const Hero = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroeById(id!), [id]);
  const navigate = useNavigate();

  const onNavigateReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={"/marvel"}></Navigate>;
  }

  return (
    <div className="row mt-2">
      <div className="col-4">
        <img
          src={`/heroes/${hero.id}.jpg`}
          alt={`${hero.superhero}`}
          className="img-thumbnail animate__animated animate__fadeInLeftBig"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRightBig">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-5">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={onNavigateReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
