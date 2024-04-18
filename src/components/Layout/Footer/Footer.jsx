import React from "react";
import { NavLink } from "react-router-dom";
import { Footers } from "./style";
import {
  FooterPageCallImg,
  FooterPageLogoImg,
  FooterPageMailImg,
  FooterPageSocialImg,
} from "../../../assets/icons";
import { routes } from "../../../consts/routes";

function Footer() {
  return (
    <>
      <Footers>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="row1">
                <ul>
                  <li>
                    <img src={FooterPageLogoImg} />
                  </li>
                  <li className="developed">
                    <p>DEVELOPED</p>
                    <h1>
                      <a href="">by akb_inf, AKBAR</a>
                    </h1>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to={routes.HOME}>
                      “Navoiyuarn” DK rasmiy sayti
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={routes.HOME}>Normativ hujjatlar</NavLink>
                  </li>
                  <li>
                    <NavLink to={routes.HOME}>O’quv qo’llanmalar</NavLink>
                  </li>
                  <li>
                    <NavLink to={routes.HOME}>Shaxsiy kabinet</NavLink>
                  </li>
                </ul>
              </div>
              <div className="row2">
                <ul>
                  <li>
                    <a href="">Bizning kontaktlarimiz</a>
                  </li>
                  <li>
                    <img src={FooterPageCallImg} />
                    <a href="tel:+998999954964">+998(99)995-49-64</a>
                  </li>
                  <li>
                    <img src={FooterPageMailImg} />
                    <a href="">akbarshuhratullayev@gmail.com</a>
                  </li>
                  <li>
                    <a href="">
                      <img src={FooterPageSocialImg} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Footers>
    </>
  );
}

export default Footer;
