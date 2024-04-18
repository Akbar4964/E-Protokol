import React, { useState } from "react";
import { Nav } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "../../../../consts/routes";
import {
  NavbarPageBellImg,
  NavbarPageLogoImg,
  NavbarPageEProtocolImg,
  NavbarPageGlobalImg,
  NavbarPageSelectImg,
  NavbarPageHomeImg,
} from "../../../../assets/icons";
import { logout } from "../../../../redux/reducers/users";
import { toast } from "react-toastify";

function Navbar() {
  const [changeLang, setChangeLang] = useState("Uz");

  const authUser = useSelector((store) => store.users.authUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const data = useSelector((store) => store.users.authUser.user);

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    toast.success(
      "Muvaffaqiyatli chiqildi qaytib kirish uchun login kiriting!",
      {
        autoClose: 3000,
      }
    );
    navigate(routes.HOME);
  };

  function handleClick(event) {
    if (event.target.textContent == "Uz") {
      setChangeLang("Uz");
    } else if (event.target.textContent == "Ru") {
      setChangeLang("Ru");
    }
  }
  return (
    <>
      <Nav>
        <div className="container">
          <div className="row">
            <div>
              <NavLink to={routes.HOME}>
                <img className="navbar-logo" src={NavbarPageLogoImg} />
              </NavLink>
              <NavLink to={routes.HOME}>
                <img className="navbar-logo" src={NavbarPageEProtocolImg} />
              </NavLink>
            </div>
            <div className="row-messages">
              <div className="select">
                <div className="uz">
                  <img src={NavbarPageGlobalImg} alt="" />
                  <p>{changeLang}</p>
                  <img src={NavbarPageSelectImg} alt="" />
                </div>
                <div className="select-none">
                  <div>
                    <div className="ru">
                      <img src={NavbarPageGlobalImg} />
                      <p onClick={handleClick}>Uz</p>
                    </div>
                    <div className="ru">
                      <img src={NavbarPageGlobalImg} />
                      <p onClick={handleClick}>Ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={`${
                  !authUser.isLogged && !authUser.user ? "item-none" : "ring"
                }`}
              >
                <NavLink to={routes.HOME}>
                  <img src={NavbarPageBellImg} alt="" />
                </NavLink>
              </button>
              {authUser.isLogged && authUser.user ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className={`${
                      !authUser.isLogged && !authUser.user
                        ? "item-none"
                        : "home"
                    }`}
                  >
                    <NavLink to={routes.HOME}>
                      <img src={NavbarPageHomeImg} alt="" />
                    </NavLink>
                  </button>
                  <button
                    className={`${
                      !authUser.isLogged && !authUser.user
                        ? "item-none"
                        : "user"
                    }`}
                  >
                    <NavLink to={routes.PROFILE}>
                      {data.name.charAt(0)}.{data.fatherName.charAt(0)}.
                      {data.surname}
                    </NavLink>
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
