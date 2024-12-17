import { useState, useEffect } from "react";
import { useStore } from "./store";
import "./index.css";
import userPhoto from "./assets/review/userPhoto.png";

const UserPage = () => {
  const user = useStore((state) => state.user);
  const tableData = useStore((state) => state.services);
  const changeName = useStore((state) => state.changeName);
  const setServices = useStore((state) => state.setServices);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const totalPrice = tableData.reduce(
    (acc, item) => acc + item.count * item.price,
    0,
  );

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    changeName(name);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setServices([]);
  };

  return (
    <>
      {isLoading ? (
        <h2 style={{ textAlign: "center", paddingTop: "3%" }}>
          Загрузка личного кабинета...
        </h2>
      ) : (
        <div
          style={{
            fontFamily: "Montserrat",
            padding: "20px",
            margin: "0 30%",
            display: "grid",
            gap: "15%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <img
              src={userPhoto}
              alt="Avatar"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginRight: "20px",
              }}
            />
            <div>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ marginBottom: "10px" }}
                />
              ) : (
                <h2 style={{ margin: "0 0 10px 0" }}>{name}</h2>
              )}
              <p style={{ margin: "0" }}>Почта: {user.email}</p>
              <p style={{ margin: "0" }}>Любимая услуга: Не выбрано</p>
              <button
                onClick={isEditing ? handleSaveClick : handleEditClick}
                className="order-button"
                style={{ transform: "scale(0.85)" }}
              >
                {isEditing ? "Сохранить" : "Редактировать"}
              </button>
            </div>
          </div>

          <div>
            <h3>Последние заказы</h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "20px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      borderBottom: "1px solid #ddd",
                      padding: "10px",
                      textAlign: "left",
                    }}
                  >
                    Название товара
                  </th>
                  <th
                    style={{
                      borderBottom: "1px solid #ddd",
                      padding: "10px",
                      textAlign: "right",
                    }}
                  >
                    Цена (руб.)
                  </th>
                  <th
                    style={{
                      borderBottom: "1px solid #ddd",
                      padding: "10px",
                      textAlign: "right",
                    }}
                  >
                    Количество
                  </th>
                  <th
                    style={{
                      borderBottom: "1px solid #ddd",
                      padding: "10px",
                      textAlign: "right",
                    }}
                  >
                    Сумма (руб.)
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px",
                      }}
                    >
                      {item.title}
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px",
                        textAlign: "right",
                      }}
                    >
                      {item.price}
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px",
                        textAlign: "right",
                      }}
                    >
                      {item.count}
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px",
                        textAlign: "right",
                      }}
                    >
                      {item.count * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan="3"
                    style={{ padding: "10px", textAlign: "right" }}
                  >
                    <strong>Итого:</strong>
                  </td>
                  <td style={{ padding: "10px", textAlign: "right" }}>
                    <strong>{totalPrice} руб.</strong>
                  </td>
                </tr>
              </tfoot>
            </table>

            {tableData.length > 0 && (
              <>
                <button className="order-button" style={{ marginRight: 0 }}>
                  Изменить заказ
                </button>
                <button
                  className="order-button"
                  style={{ marginRight: 0, backgroundColor: "rgb(240,70,70)" }}
                  onClick={handleCancelClick}
                >
                  Отменить заказ
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserPage;
