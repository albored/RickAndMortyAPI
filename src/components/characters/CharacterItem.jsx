import PropTypes from "prop-types";

function CharacterItem({
  char: { name, gender, image, status, species, location },
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="rounded-md"
          src={image}
          alt="Character of rick and morty"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div
            className={`badge badge-${
              status === "Alive" ? "success" : "error"
            }`}
          >
            {status}
          </div>
        </h2>
        <p>Last known location:</p>
        <p className="text-xl">{location.name}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{species}</div>
          <div className="badge badge-outline">{gender}</div>
        </div>
      </div>
    </div>
  );
}

CharacterItem.propTypes = {
  char: PropTypes.object.isRequired,
};

export default CharacterItem;
