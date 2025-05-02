import React, { useEffect, useState } from 'react';
import './Time.css';  // CSS faylini ulash

function Time() {
  const [namozVaqtlari, setNamozVaqtlari] = useState({});

  useEffect(() => {
    const fetchNamozVaqtlari = async () => {
      const response = await fetch(
        "https://api.aladhan.com/v1/timingsByCity?city=Tashkent&country=Uzbekistan&method=2"
      );
      const data = await response.json();
      setNamozVaqtlari(data.data.timings);
    };

    fetchNamozVaqtlari();
  }, []);

  return (
    <div className="time-container">
      <h1 className="title">Namoz Vaqtlari</h1>
      {namozVaqtlari.Fajr ? (
        <ul className="time-list">
          <div className="time-item">
            <div className="time"><h1>Bomdod: {namozVaqtlari.Fajr}</h1></div>
            <p>Yangi kunni boshlash uchun eng yaxshi vaqt! 🌅 Bomdod namozini o'ta, kuningizni barakali boshlang!</p>
          </div>
          <div className="time-item">
            <div className="time"><h1>Peshin: {namozVaqtlari.Dhuhr}</h1></div>
            <p>Tungi tinchlikdan keyin bir oz vaqtni o'zingizga bag'ishlang. 🕊️ Peshin namozini o'qish orqali tana va ruhni yangilang!</p>
          </div>
          <div className="time-item">
            <div className="time"><h1>Asr: {namozVaqtlari.Asr}</h1></div>
            <p>Kunning yarmidan o'tib, kuchingizni to'plang! 💪 Asr namozini o'qish — energiyangizni tiklash va zindelikni his qilish vaqti.</p>
          </div>
          <div className="time-item">
            <div className="time"><h1>Shom: {namozVaqtlari.Maghrib}</h1></div>
            <p>Kunduzgi charchoqdan keyin qaytadan tiklaning. 🌇 Shom namozini o'qish orqali kechqurun tinchlikni toping.</p>
          </div>
          <div className="time-item">
            <div className="time"><h1>Xufton: {namozVaqtlari.Isha}</h1></div>
            <p>Kechaning sokinligini his eting va tonggacha ruhni poklang. 🌙 Isha namozini o'ta, xotirjamlikka erishing.</p>
          </div>
        </ul>
      ) : (
        <p className="loading-text">Vaqtlar yuklanmoqda...</p>
      )}
    </div>
  );
}

export default Time;
