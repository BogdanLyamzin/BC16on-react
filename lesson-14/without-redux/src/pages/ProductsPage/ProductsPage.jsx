import {useState, useEffect} from "react";

import ProductList from "../../client/ProductList";

import {getProducts} from "../../shared/services/products";

const ProductsPage = ()=> {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null
    });

    // useEffect(()=> {
    //     const fetchProducts = async() =>{
    //         try {
    //             setState(prevState => ({...prevState, loading: true}))
    //             const data = await getProducts();
    //             setState(prevState => ({
    //                 ...prevState,
    //                 items: [...prevState.items, ...data],
    //                 loading: false
    //             }))
    //         } catch (error) {
    //             setState(prevState => ({...prevState, loading: false, error}))
    //         }
    //     };
    //     fetchProducts();
    // }, []);

    return (
        <main>
            <div className="container">
                <h2 className="page-title">Products Page</h2>
                <ProductList items={state.items} />
            </div>
        </main>
    )
}

export default ProductsPage;