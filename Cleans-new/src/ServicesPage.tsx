// ServicesPage.tsx
import { useState, useEffect } from "react";
import ServiceCard from "./component/ServiceCard";
import "./index.css";
import { useStore } from "./store";
import { useNavigate } from "react-router-dom";

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Чистка обуви",
    description: "Профессиональная чистка обуви, удаление пятен и грязи",
    price: 800,
  },
  {
    id: 2,
    title: "Ремонт обуви",
    description: "Ремонт обуви, замена подошвы и устранение дефектов",
    price: 2000,
  },
  {
    id: 3,
    title: "Полировка обуви",
    description: "Полировка обуви для придания блеска и защиты",
    price: 500,
  },
  {
    id: 4,
    title: "Уход за замшевой обувью",
    description: "Специальный уход за замшевой обувью, удаление пятен",
    price: 1000,
  },
];

const ServicesPage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<{
    [key: number]: number;
  }>({});
  const setServices = useStore((state) => state.setServices);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  const handleServiceChange = (id: number, count: number) => {
    setSelectedServices((prevState) => ({ ...prevState, [id]: count }));
  };

  const handleOrderSubmit = async () => {
    const orderData = Object.entries(selectedServices)
      .filter(([, count]) => count > 0)
      .map(([id, count]) => ({
        id: Number(id) - 1,
        title: servicesData[Number(id) - 1].title,
        price: servicesData[Number(id) - 1].price,
        count,
      }));
    setServices(orderData);
    alert("Услуги сохранены! Проверьте корзину!");
    setTimeout(() => navigate("/"), 200);
  };

  return (
    <>
      {isLoading ? (
        <h2 style={{ textAlign: "center", paddingTop: "3%" }}>
          Загрузка услуг...
        </h2>
      ) : (
        <div className="services-page">
          <h1>Услуги</h1>
          <p>Количество услуг: {servicesData.length}</p>
          <div className="services-container">
            {servicesData.map((service) => (
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
      )}
    </>
  );
};

export default ServicesPage;
