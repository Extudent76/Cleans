import React, { useState } from 'react';
import '../index.css';

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  onCountChange: (id: number, count: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, price, onCountChange }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(id, newCount);
  };

  const handleRemove = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    onCountChange(id, newCount);
  };

  return (
    <div className="service-card">
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
      <p className="service-price">{price} руб.</p>
      <div className="service-counter">
        <button className="service-button" onClick={handleRemove}>-</button>
        <span className="service-count">{count}</span>
        <button className="service-button" onClick={handleAdd}>+</button>
      </div>
    </div>
  );
};

export default ServiceCard;
