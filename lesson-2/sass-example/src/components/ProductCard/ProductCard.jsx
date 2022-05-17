import PropTypes from "prop-types";

import "./product-card.css";

const ProductCard = ({name, price, description})=> {
    return (
        <div className="product-card">
            <h3 className="product-card-title">{name}</h3>
            <p className="product-card-price">Price: {price}</p>
            {description && <p className="product-card-description">{description}</p>}
            <button>Купить</button>
        </div>
    )
};

export default ProductCard;

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
}