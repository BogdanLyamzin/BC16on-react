import {useState} from "react";

import ProductList from "../../client/ProductList";

import items from "./products.json";

const ProductsPage = ()=> {
    const [state, setState] = useState(items);

    return (
        <main>
            <div className="container">
                <h2 className="page-title">Products Page</h2>
                <ProductList items={state} />
            </div>
        </main>
    )
}

export default ProductsPage;