import React, { FC, useState, useEffect } from "react";
import { CartHeading, CartWrapper } from "./styled";
import "./style.css";
import { useDispatch } from "react-redux";
import { GamesItem, CartItem } from "../DropdownSearch/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tableHeaderTitles } from "./constants";
import { decrease, increase } from "../../redux/actions/cartPositionsAction";
import {
  faMinus,
  faPlus,
  faTrashCan,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import {
  faApple,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

const Cart: FC = () => {
  const localCart = JSON.parse(localStorage.Cart || "[]");
  const [cart, setCart] = useState(localCart);
  const dispatchCounter = useDispatch();
  const updateCartStorage = (data: CartItem[]) => {
    localStorage.removeItem("Cart");
    localStorage.setItem("Cart", JSON.stringify(data));
  };

  const totalPriceHandler = () => {
    const checkedItems = cart.filter((item: CartItem) => item.checked);
    console.log(checkedItems);

    return checkedItems
      .reduce(
        (acc: number, curr: CartItem) => (acc += curr.price * curr.quantity),
        0
      )
      .toFixed(2);
  };
  const deleteItemHandler = (ind: number) => () => {
    const arr = JSON.parse(JSON.stringify(cart));
    if (arr[ind].checked) {
      dispatchCounter(decrease());
    }
    arr.splice(ind, 1);

    setCart(arr);
    updateCartStorage(arr);
  };

  const quantityIncrementHandler = (ind: number, bool: boolean) => () => {
    const z = cart;
    if (!bool && z[ind].quantity === 1) {
      deleteItemHandler(ind)();
    } else {
      bool ? (z[ind].quantity += 1) : (z[ind].quantity -= 1);
      setCart([...z]);
      updateCartStorage(cart);
    }
  };
  const checkedHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    ind: number
  ) => {
    const z = cart;
    z[ind].checked = !z[ind].checked;
    setCart([...z]);

    z[ind].checked ? dispatchCounter(increase()) : dispatchCounter(decrease());
  };
  useEffect(() => {
    console.log("hui");
  }, [cart]);

  useEffect(() => {
    setCart(
      cart.map((el: GamesItem) => ({ ...el, quantity: 1, checked: false }))
    );

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <CartWrapper>
      <CartHeading>
        {tableHeaderTitles.map((el) => (
          <div key={el.modifier} className={`cart cart-${el.modifier}`}>
            {el.content}
          </div>
        ))}
        {/* <div className="cart cart-pos">№</div>
        <div className="cart cart-title">Title</div>

        <div className="cart cart-platform">Platforms</div>
        <div className="cart cart-rating">Rating</div>
        <div className="cart cart-check">Check</div>
        <div className="cart cart-quantity">Quantity</div>
        <div className="cart cart-price">Price</div>
        <div className="cart cart-remove">Remove</div> */}
      </CartHeading>
      {cart.map((el: CartItem, ind: number) => (
        <CartHeading key={el.image}>
          <div className="cart cart-pos">{ind + 1}</div>
          <div className="cart cart-title">{el.title}</div>

          <div className="cart cart-platform">
            {el.mac && (
              <FontAwesomeIcon className="platform-icon" icon={faApple} />
            )}
            {el.win && (
              <FontAwesomeIcon className="platform-icon" icon={faWindows} />
            )}
            {el.linux && (
              <FontAwesomeIcon className="platform-icon" icon={faLinux} />
            )}
          </div>
          <div className="cart cart-rating">
            {Array.from(new Array(Math.ceil(el.rating)).keys()).map(() => (
              <FontAwesomeIcon
                key={Math.random() * 1000}
                className="star-icon"
                icon={faStar}
              />
            ))}
          </div>
          <div className="cart cart-check">
            <input
              type="checkbox"
              className="checkbox-cart"
              onChange={(e) => {
                checkedHandler(e, ind);
              }}
            />
          </div>
          <div className="cart cart-quantity">
            <FontAwesomeIcon
              className="icon q-minus-icon"
              icon={faMinus}
              onClick={quantityIncrementHandler(ind, false)}
            />
            {el.quantity}
            <FontAwesomeIcon
              className="icon q-plus-icon"
              icon={faPlus}
              onClick={quantityIncrementHandler(ind, true)}
            />
          </div>
          <div className="cart cart-price">{el.price}$</div>
          <div className="cart cart-remove">
            <FontAwesomeIcon
              className="icon trash-icon"
              icon={faTrashCan}
              onClick={deleteItemHandler(ind)}
            />
          </div>
        </CartHeading>
      ))}
      {cart ? (
        <CartHeading>
          <button
            className="clear-cart-btn"
            onClick={(e) => {
              e.preventDefault();
              setCart([]);
              localStorage.removeItem("Cart");
              localStorage.setItem("Cart", JSON.stringify([]));
            }}
          >
            Clear cart
          </button>

          <div className="cart-total-price">Total: {totalPriceHandler()}$ </div>
          <button className="checkout-btn">Checkout</button>
        </CartHeading>
      ) : null}
    </CartWrapper>
  );
};

export default Cart;
