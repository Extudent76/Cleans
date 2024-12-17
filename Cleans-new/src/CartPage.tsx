import React, { useState, useEffect } from "react";
import "./index.css";
import { useStore } from "./store";
import { Link } from "react-router-dom";
import { AlertModal, useAlert } from "./Modal";

interface CartItemData {
  id: number;
  title: string;
  price: number;
  count: number;
}

const CartPage: React.FC = () => {
  const services = useStore((state) => state.services);
  const setServices = useStore((state) => state.setServices);
  const [cartItems, setCartItems] = useState<CartItemData[]>(services);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { showAlert, isOpen, closeAlert } = useAlert();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setServices(services.filter((item) => item.id != id));
  };

  const handleOrderSubmit = () => {
    showAlert();
    setCartItems([]); // Очистить корзину
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0,
    );
  };

  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      <AlertModal
        isOpen={isOpen}
        onClose={closeAlert}
        message={"Заказ успешно оформлен!"}
      />
      {isLoading ? (
        <p>Загрузка корзины...</p>
      ) : cartItems.length > 0 ? (
        <>
          <div className="table-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Название товара</th>
                  <th>Цена за единицу (руб.)</th>
                  <th>Количество</th>
                  <th>Сумма (руб.)</th>
                  <th>Действие</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.count}</td>
                    <td>{item.price * item.count}</td>
                    <td>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan={3} className="total-label">
                    Итого:
                  </td>
                  <td>{calculateTotal()} руб.</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="order-button" onClick={handleOrderSubmit}>
            Оформить заказ
          </button>
        </>
      ) : (
        <>
          <p>Корзина пуста</p>
          <Link className="order-button" to="/">
            Вернуться назад
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
