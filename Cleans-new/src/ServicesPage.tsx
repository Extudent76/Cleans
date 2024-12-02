// ServicesPage.tsx
import React, { useState } from 'react';
import ServiceCard from './component/ServiceCard';
import './index.css';

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
}

const servicesData: Service[] = [
  { id: 1, title: 'Чистка обуви', description: 'Профессиональная чистка обуви, удаление пятен и грязи', price: 800 },
  { id: 2, title: 'Ремонт обуви', description: 'Ремонт обуви, замена подошвы и устранение дефектов', price: 2000 },
  { id: 3, title: 'Полировка обуви', description: 'Полировка обуви для придания блеска и защиты', price: 500 },
  { id: 4, title: 'Уход за замшевой обувью', description: 'Специальный уход за замшевой обувью, удаление пятен', price: 1000 },
];

const ServicesPage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<{ [key: number]: number }>({});

  const handleServiceChange = (id: number, count: number) => {
    setSelectedServices(prevState => ({ ...prevState, [id]: count }));
  };

  const handleOrderSubmit = async () => {
    const orderData = Object.entries(selectedServices)
      .filter(([, count]) => count > 0)
      .map(([id, count]) => ({ id: Number(id), count }));
      
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Заказ успешно оформлен!');
      } else {
        alert('Ошибка при оформлении заказа. Попробуйте еще раз.');
        console.log(orderData);
      }
  };

  return (
    <div className="services-page">
      <h1>Услуги</h1>
      <p>Количество услуг: {servicesData.length}</p>
      <div className="services-container">
        {servicesData.map(service => (
          <ServiceCard 
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            price={service.price}
            onCountChange={handleServiceChange}
          />
        ))}
      </div>
      <button className="order-button" onClick={handleOrderSubmit}>
        Оформить заказ
      </button>
    </div>
  );
};

export default ServicesPage;
