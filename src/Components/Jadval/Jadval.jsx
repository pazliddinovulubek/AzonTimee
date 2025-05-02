import React, { useEffect, useState } from 'react';
import './Jadval.css';

function Jadval({ darkMode }) {
  const [oylikVaqtlar, setOylikVaqtlar] = useState([]);

  useEffect(() => {
    const fetchAllMonths = async () => {
      const months = Array.from({ length: 12 }, (_, i) => i + 1);
      const fetchedData = [];

      for (let month of months) {
        const formattedMonth = month.toString().padStart(2, '0');
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/02-${formattedMonth}-2025?city=Namangan&country=Uzbekistan&method=2
`
        );

        if (!response.ok) {
          console.error("API Response Error:", response.status);
          return;
        }

        const data = await response.json();

        if (data && data.data && data.data.timings) {
          const readableDate = data.data.date.readable;

          fetchedData.push({
            oy: formattedMonth,
            kun: '02',
            yil: '2025',
            readableDate: readableDate,
            timings: data.data.timings,
          });
        } else {
          console.error("Javobdagi ma'lumot noto'g'ri:", data);
        }
      }

      setOylikVaqtlar(fetchedData);
    };

    fetchAllMonths();
  }, []);

  return (
    <div className={`jadval-container ${darkMode ? 'dark' : ''}`}>
      <h1 className="title">2025 Yil Namoz Vaqtlari</h1>
      <div className="jadval-list">
        {oylikVaqtlar.map((oy, index) => (
          <div className="jadval-item" key={index}>
            <div className="jadval-time">
              <h1>{oy.readableDate}</h1>
              <div className="namoz-vaqtlar">
                <p>Bomdod: {oy.timings.Fajr}</p>
                <p>Peshin: {oy.timings.Dhuhr}</p>
                <p>Asr: {oy.timings.Asr}</p>
                <p>Shom: {oy.timings.Maghrib}</p>
                <p>Xufton: {oy.timings.Isha}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jadval;
