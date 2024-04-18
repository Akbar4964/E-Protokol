import React from "react";
import { NavLink } from "react-router-dom";
import { Programs } from "./style";
import { routes } from "../../../../consts/routes";
import {
  SecretaryPageCorporativeImg,
  SecretaryPageMeetingImg,
  SecretaryPageMeetingTypeImg,
  SecretaryPageUsersImg,
} from "../../../../assets/icons";

function Program() {
  return (
    <>
      <Programs>
        <div className="container">
          <h1 className="program-title">
            Kuzatuv kengashi yig'ilishlari, ovoz berish hamda yig'ilishni
            bayonotlashtirish jarayonlarining avtomatlashtirilgan elektron
            dasturi
          </h1>
          <div className="program">
            <div className="program-card">
              <img src={SecretaryPageMeetingImg} />
              <p className="program-card_title">
                Yig'ilishlar yaratish va boshqarish
              </p>
              <p className="program-card_text">
                Yig'ilishlar yarating va yig'ilishlarni boshqaring va tahrirlang
              </p>
              <NavLink to={routes.MEETING}>
                <button>Kirish</button>
              </NavLink>
            </div>
            <div className="program-card">
              <img src={SecretaryPageUsersImg} alt="" />
              <p className="program-card_title">
                Foydalanuvchi yaratish va boshqarish
              </p>
              <p className="program-card_text">
                Foydalanuvchi yarating va ularni boshqaring.
              </p>
              <NavLink to={routes.USERS}>
                <button>Kirish</button>
              </NavLink>
            </div>
            <div className="program-card">
              <img src={SecretaryPageMeetingTypeImg} />
              <p className="program-card_title">Yig'ilishlar turlari</p>
              <p className="program-card_text">
                Ushbu bo'limda yig'ilish ko'rinishlarini boshqarishin mumkin
              </p>
              <NavLink to={routes.MEETINGTYPE}>
                <button>Kirish</button>
              </NavLink>
            </div>
            <div className="program-card">
              <img src={SecretaryPageCorporativeImg} />
              <p className="program-card_title">Korporativ kotib</p>
              <p className="program-card_text">Yig'ilishlarda ishtirok etish</p>
              <NavLink to={routes.ATTEND}>
                <button>Kirish</button>
              </NavLink>
            </div>
          </div>
        </div>
      </Programs>
    </>
  );
}

export default Program;
