import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart} = useContext(ShopContext);
    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt = ""></img>
                    <img src={product.image} alt = ""></img>
                    <img src={product.image} alt = ""></img>
                    <img src={product.image} alt = ""></img>
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        Rs. {product.old_price}
                    </div>
                    <div className="productdisplay-right-price-n">
                        Rs. {product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    This is a very nice product which will make you look cool.
                </div>
                <div className="productdisplay-right-siz">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'>
                    <span>Category: Women, T-Shirt, Crop Top</span>
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags: Modern, Latest</span>
                </p>

            </div>
        </div>
    )
}

export default ProductDisplay