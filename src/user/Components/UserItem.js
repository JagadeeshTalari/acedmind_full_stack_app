import { Link } from "react-router-dom";
import Avatar from "../../shared/Components/UIElements/Avatar";
import "./UserItem.css";
import Card from "../../shared/Components/UIElements/Card";

const UserItem = ({ id, image, name, placeCount }) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} name={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount}
              {placeCount === 1 ? " Place" : " Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;
