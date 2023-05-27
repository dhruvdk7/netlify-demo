import '../App.css';
import { useState } from 'react';

import image1 from '../Assets/1.png';
import image2 from '../Assets/2.png';

function Header() {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [products, setProducts] = useState([
        {
            name: 'Nike Dunk Low',
            price: '325',
            image: image1,
            quantity: 1
        },
        {
            name: 'Air Jordan 4 Retro',
            price: '375',
            image: image2,
            quantity: 1
        }
    ]);
    var total = 0;

    const renderProducts = () => {
        if (products.length === 0)
            return <div style={{ color: '#959595', fontSize: '18px', textAlign: 'center', marginTop: '20px' }}>You don’t have any items.</div>
        var tempProducts = [...products];
        return products.map((product, index) => {
            total += parseInt(product.price) * parseInt(product.quantity);
            return (
                <div className="cart-item" key={index}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="cart-item-image">
                            <img src={product.image} alt="Product" className='cart-list-image' />
                        </div>
                        <div style={{ color: "#959595", marginLeft: '10px' }}>
                            <div className="cart-item-details">
                                <div style={{ marginBottom: '15px' }}>
                                    {product.name}
                                </div>
                                <div style={{ marginBottom: '15px', textAlign: 'start' }}>
                                    ${parseInt(product.price).toFixed(2)}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                    <span className="quantity-btn"
                                        onClick={async () => {
                                            if (tempProducts[index].quantity > 1) {
                                                tempProducts[index].quantity -= 1;
                                                await setProducts(tempProducts);
                                            }
                                        }
                                        }
                                    >-</span>
                                    <span className="quantity-value">{product.quantity}</span>
                                    <span className="quantity-btn"
                                        onClick={async () => {
                                            tempProducts[index].quantity += 1;
                                            await setProducts(tempProducts);
                                        }
                                        }
                                    >+</span>
                                </div>
                            </div>
                            <div onClick={async () => {
                                tempProducts = await tempProducts.filter((item, count) => count !== index);
                                console.log(tempProducts);
                                await setProducts(tempProducts);
                            }} className="cart-item-remove">
                                Remove item
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div style={{ position: 'fixed', top: '0px', backgroundColor: '#fff', width: '100%', zIndex: '999' }}>
            <div className="header-background">
                <div className='logo'>SneakerHub</div>
                <div className='menu-items'>
                    {/* <span className='header-item' style={{ marginRight: '10px' }} >Wishlist</span>
                    <div className="cart-body" onClick={() => {
                        document.body.style.overflow = 'hidden'
                        setIsCartOpen(true)
                    }}>
                        <svg className="cart-icon" viewBox="0 0 21 20">
                            <path d="M16.731 19.393a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8zm-9.74 0a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8zM2.534 1.9H1A.9.9 0 011 .1h2.277a.9.9 0 01.883.73l.469 2.422h15.14a.9.9 0 01.876 1.105l-2.203 9.445a.9.9 0 01-.876.695H5.712a.9.9 0 01-.884-.729L2.534 1.9zm16.1 3.152H4.977l1.477 7.645h10.397l1.783-7.645z" fill='#fff' fillRule="evenodd"></path>
                        </svg>
                    </div> */}
                </div>
            </div>
            {
                isCartOpen
                    ?
                    <div style={{ zIndex: '999' }} >
                        <div className='cart-background' onClick={() => {
                            if (isCartOpen) {
                                setIsCartOpen(false);
                                document.body.style.overflowY = 'scroll'
                            }
                        }}>
                        </div>
                        <div className='cart-container'
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <h2 style={{ textAlign: 'center', textTransform: 'uppercase', borderBottom: '1px solid #f2f2f2', paddingBottom: '20px', marginInline: '15px' }}>Your Cart</h2>
                            {renderProducts()}
                            {
                                products.length === 0
                                    ? null
                                    :
                                    <>
                                        <div className="cart-total">
                                            <div>
                                                Total
                                            </div>
                                            <div>
                                                ${total.toFixed(2)}
                                            </div>
                                        </div>
                                        <div style={{ color: '#959595', textAlign: 'center', fontSize: '13px', marginTop: '10px' }}>
                                            Shipping & taxes calculated at checkout
                                        </div>
                                        <div className='selected-btn' style={{ marginInline: '15px', textAlign: 'center', marginTop: '10px' }}
                                            onClick={() => {
                                                if (isCartOpen) {
                                                    setIsCartOpen(false);
                                                    document.body.style.overflowY = 'scroll'
                                                }
                                            }}
                                        >
                                            Checkout
                                        </div>
                                        <div className="cart-item-remove continue-shopping" onClick={() => {
                                            if (isCartOpen) {
                                                setIsCartOpen(false);
                                                document.body.style.overflowY = 'scroll'
                                            }
                                        }}>
                                            continue shopping
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    );
}

export default Header;
