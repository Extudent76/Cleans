import React, { useState, useEffect } from 'react';
import './index.css';

interface CartItemData {
  id: number;
  title: string;
  price: number;
  count: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const mockData: CartItemData[] = [
      { id: 1, title: 'Чистка обуви', price: 800, count: 2 },
      { id: 2, title: 'Ремонт обуви', price: 2000, count: 1 },
      { id: 3, title: 'Полировка обуви', price: 500, count: 3 },
    ];
    setTimeout(() => {
      setCartItems(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleOrderSubmit = async () => {
    const orderData = cartItems.map(({ id, count }) => ({ id, count }));

    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      alert('Заказ успешно оформлен!');
      setCartItems([]); // Очистить корзину после успешного заказа
    } else {
      alert('Ошибка при оформлении заказа. Попробуйте еще раз.');
      console.log(orderData);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div className="cart-page">
      <h1>Корзина</h1>
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
                {cartItems.map(item => (
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
                  <td colSpan={3} className="total-label">Итого:</td>
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
        <p>Корзина пуста</p>
      )}
    </div>
  );
};

export default CartPage;
