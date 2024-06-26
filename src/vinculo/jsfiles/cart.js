import React, { useState, useEffect } from 'react';
import '../cssfiles/cart.css';
import cartData from '../json files/cartData.json';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(cartData.cartItems);
  const [buyLaterItems, setBuyLaterItems] = useState(cartData.buyLaterItems);
  const [shippingInfo, setShippingInfo] = useState(cartData.shippingInfo);
  const [couponCode, setCouponCode] = useState(cartData.couponCode);
  const [paymentMethod, setPaymentMethod] = useState(cartData.paymentMethod);

  useEffect(() => {
    document.title = "Shopping Cart";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Your online shopping cart page for managing products, viewing order summary, applying discount codes, and checking out.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "shopping cart, online shopping, e-commerce, discount codes, checkout, order summary, buy later";
    document.head.appendChild(metaKeywords);

    const viewportMeta = document.createElement('meta');
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(viewportMeta);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(viewportMeta);
    };
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleBuyLater = (id) => {
    const itemToMove = cartItems.find(item => item.id === id);
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    setBuyLaterItems([...buyLaterItems, itemToMove]);
  };

  const handleAddToCart = (id) => {
    const itemToMove = buyLaterItems.find(item => item.id === id);
    const updatedBuyLaterItems = buyLaterItems.filter(item => item.id !== id);
    setBuyLaterItems(updatedBuyLaterItems);
    setCartItems([...cartItems, itemToMove]);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    // Add logic for checkout process
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 && (
        <div className="empty-cart-message">Your cart is empty.</div>
      )}
      <div className="cart-section">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-details">
                <h2 className="product-name">{item.name}</h2>
                <p className="product-price">Price: ${item.price}</p>
                <div className="quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </div>
                <p className="subtotal">Subtotal: ${calculateSubtotal(item)}</p>
              </div>
            </div>
            <div className="buttons">
              <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              <button className="buy-later-button" onClick={() => handleBuyLater(item.id)}>Buy Later</button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="total">
            <h2>Total: ${calculateTotal()}</h2>
            <button onClick={handleRemoveAll}>Remove All</button>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: ${calculateTotal()}</p>
            <p>Shipping: Free</p>
            <p>Total: ${calculateTotal()}</p>
          </div>
          <div className="shipping-info">
            <h2>Shipping Information</h2>
            {/* Add form fields for shipping information */}
          </div>
          <div className="payment-options">
            <h2>Payment Options</h2>
            {/* Add payment method selection */}
          </div>
          <div className="discount-coupon">
            <input type="text" placeholder="Enter Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
            <button>Apply</button>
          </div>
          <div className="delivery-time">
            <p>Estimated Delivery Time: 3-5 business days</p>
          </div>
        </>
      )}
      <div className="buy-now">
        <button onClick={handleCheckout}>Buy Now</button>
      </div>
      <div className="return-policy">
        <h2>Return Policy</h2>
        <p>30-day return policy. Terms & conditions apply.</p>
      </div>
      <div className="customer-support">
        <h2>Customer Support</h2>
        <p>Contact us: support@example.com | 1-800-123-4567</p>
      </div>
      {buyLaterItems.length > 0 && (
        <div className="buy-later-section">
          <h2>Buy Later</h2>
          {buyLaterItems.map(item => (
            <div key={item.id} className="buy-later-item">
              <div className="item-info">
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-details">
                  <h2 className="product-name">{item.name}</h2>
                  <p className="product-price">Price: ${item.price}</p>
                </div>
              </div>
              <div className="buttons">
                <button className="add-to-cart-button" onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
