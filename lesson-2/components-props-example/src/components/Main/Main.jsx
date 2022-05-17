import Button from "../Button";
import ProductCard from "../ProductCard";

import "./main.css";

const product1 = {
    name: "iPhone X",
    price: 21000,
    description: "Сегодня купи - завтра пожалеешь!"
};

const product2 = {
    name: "iPhone 13",
    price: 37000,
};

const Main = () => {
    return (
        <main>
            <h1>Page title</h1>
            <p>page content</p>
            <Button text="Show more" active />
            <div className="product-list">
                <ProductCard name={product1.name} price={product1.price} description={product1.description} />
                <ProductCard {...product2} />
            </div>


        </main>
    )
};

export default Main;