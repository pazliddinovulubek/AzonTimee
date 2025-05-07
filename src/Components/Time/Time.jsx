import React, { useEffect, useState } from 'react';
import './Time.css';

function Time({ darkMode }) {
  const [namozVaqtlari, setNamozVaqtlari] = useState({});

  useEffect(() => {
    const fetchNamozVaqtlari = async () => {
      const response = await fetch(
        "https://islomapi.uz/api/present/day?region=Namangan"
      );
      const data = await response.json();
      setNamozVaqtlari(data.times);
    };

    fetchNamozVaqtlari();
  }, []);

  return (
    <div className={`time-container ${darkMode ? 'dark' : ''}`}>
      <h1 className="title">Namoz Vaqtlari</h1>
      {namozVaqtlari ? (
        <div className="time-list">
          <div className="time-item">
            <div className="time"><h1>Bomdod: {namozVaqtlari.tong_saharlik}</h1></div>
            <p>Yangi kunni boshlash uchun eng yaxshi vaqt! 🌅 Bomdod namozini o'ta, kuningizni barakali boshlang!</p>
          </div>
          <div className="time-item">
            <div className="time"><h1>Quyosh: {namozVaqtlari.quyosh}</h1></div>
            <p>Quyosh chiqqan vaqtda ibodat qilish tavsiya etilmaydi. 🌞 Ammo bu vaqtni bilish foydali.</p>
          </div>
          <div className="time-item">
            <div className="time"><h1>Peshin: {namozVaqtlari.peshin}</h1></div>
            <p>Tungi tinchlikdan keyin bir oz vaqtni o'zingizga bag'ishlang. 🕊️ Peshin namozini o'qish orqali tana va ruhni yangilang!</p>
          </div>
          <div className="time-item">
            <div className="time"><h1>Asr: {namozVaqtlari.asr}</h1></div>
            <p>Kunning yarmidan o'tib, kuchingizni to'plang! 💪 Asr namozini o'qish — energiyangizni tiklash va zindelikni his qilish vaqti.</p>
          </div>
          <div className="time-item">
            <div className="time"><h1>Shom: {namozVaqtlari.shom_iftor}</h1></div>
            <p>Kunduzgi charchoqdan keyin qaytadan tiklaning. 🌇 Shom namozini o'qish orqali kechqurun tinchlikni toping.</p>
          </div>
          <div className="time-item">
            <div className="time"><h1>Xufton: {namozVaqtlari.hufton}</h1></div>
            <p>Kecha tinchligida ibodat. 🌌 Xufton bilan kunni yakunlang.</p>
          </div>
        </div>
      ) : (
        <p className="loading-text">Vaqtlar yuklanmoqda...</p>
      )}
    </div>
  );
}

export default Time;
