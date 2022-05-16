import Button from "../Button";
import ProductCard from "../ProductCard";

import "./main.css";

const product1 = {
    name: "iPhone X",
    price: "21000",
    description: "Сегодня купи - завтра пожалеешь!"
};

const product2 = {
    name: "iPhone 13",
    price: "37000",
    description: "Сегодня купи - завтра пожалеешь!"
};

const Main = () => {
    return (
        <main>
            <h1>Page title</h1>
            <p>page content</p>
            <Button text="Show more" />
            <ProductCard name={product1.name} price={product1.price} description={product1.description} />
            {/* const props = {
                name: "iPhone X",
                price: "21000",
                description: "Сегодня купи - завтра пожалеешь!"
            }
                ProductCard(props)
             */}
            <ProductCard {...product2} />

        </main>
    )
};

export default Main;