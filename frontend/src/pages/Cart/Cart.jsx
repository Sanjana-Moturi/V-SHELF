import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, book_list, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate(); // hook for navigation

  // Calculate the total number of books in the cart
  const totalBooks = book_list.reduce(
    (sum, item) => sum + (cartItems[item._id] || 0),
    0
  );

  // Prepare the checkout data with necessary details
  const checkoutData = book_list
    .filter((item) => cartItems[item._id] > 0) // filter out books not in the cart
    .map((item) => ({
      name: item.name,
      author: item.author,
      quantity: cartItems[item._id],
    }));

  // Handle checkout button click
  const handleCheckout = () => {
    // Navigate to '/e-bill' and pass the checkout data as state
    navigate('/e-bill', { state: { checkoutData } });
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Author</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {book_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.author}</p>
                  <p>{cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cross"
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-footer">
        <p className="total-books">
          Total Books: <span>{totalBooks}</span>
        </p>
        <button className="checkout" onClick={handleCheckout}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;