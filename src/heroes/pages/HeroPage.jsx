import { getHeroById } from "../helpers";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
// import "animate.css";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const { superhero, alter_ego, publisher, first_appearance, characters } =
    hero;

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/Assets/heroes/${id}.jpg`}
          alt={superhero}
          className="card-img-top img-fluid rounded shadow animate__animated animate__fadeInLeft animate__delay-.3s"
        />
      </div>

      <div className="col-8">
        <h3 className="animate__animated animate__backInDown animate__delay-.1s">
          {superhero}
        </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            <span>{publisher}</span>
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-primary " onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};

// img-thumbnail
