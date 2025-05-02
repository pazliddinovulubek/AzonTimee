import React, { useEffect, useState } from 'react';

function Eslatma() {
  const [data, setData] = useState([]);
  const [xatolik, setXatolik] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://hadithapi.com/api/books?apiKey=$2y$10$UMaG9mJYSvANIiLRJdFggOWUOeEUtGJB43Ls4toFVHjz042rH5y')
      .then(res => res.json())
      .then(json => {
        console.log("Kelgan ma'lumot:", json); // 👈 Buni ko'ring
        if (Array.isArray(json.data)) {
          setData(json.data);
        } else {
          setXatolik("API dan noto'g'ri formatda ma'lumot keldi");
        }
      })
      .catch(err => {
        console.error("Xatolik:", err);
        setXatolik("Ma'lumotlarni olishda xatolik yuz berdi");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>⏳ Yuklanmoqda...</p>;
  if (xatolik) return <p style={{ color: 'red' }}>❌ {xatolik}</p>;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Eslatma;
