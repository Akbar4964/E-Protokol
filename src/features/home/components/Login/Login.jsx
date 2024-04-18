import React, { useState } from "react";
import { Heros, Section } from "./style";
import { MainPageLoginImg } from "../../../../assets/icons";
import { NavLink } from "react-router-dom";
import Slider from "../../../../components/Slider/Slider";
import { login } from "../../../../redux/reducers/users";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { API } from "../../../../services/api";
import { toast } from "react-toastify";
import { routes } from "../../../../consts/routes";

function Login() {
  const dispatch = useDispatch();

  const [logIn, setLogIn] = useState(null);

  const [password, setPassword] = useState(null);

  const {
    mutate,
    isPending: postUserLoading,
    error: postUserError,
    data,
  } = useMutation({
    mutationFn: async (data) => {
      return await API.loginUser(data);
    },
    onSuccess: (data) => {
      let name;
      let surname;
      data.forEach((user) => {
        name = user.name;
        surname = user.surname;
      });
      if (data?.length > 0) {
        toast.success(`${name} ${surname} xush kelibsiz`, {
          autoClose: 3000,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({ user: data[0], isLogged: true })
        );
        dispatch(login({ user: data[0], isLogged: true }));
      } else if (data?.length === 0) {
        toast.error("Ro'yhatdan o'tmagansiz admin bilan bog'laning @akb_inf!");
      }
    },
    onError: (data) => {
      console.log("onError", data);
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    mutate({ logIn, password });
  }
  return (
    <>
      <Heros>
        <div className="container">
          <ul className="menu">
            <li>
              <NavLink to={routes.HOME}>BOSH SAHIFA</NavLink>
            </li>
            <li>
              <NavLink to="https://navoiyuran.uz/">
                “NAVOIYURAN” DK RASMIY SAYTI
              </NavLink>
            </li>
            <li>
              <NavLink to="https://navoiyuran.uz/page/documents">
                NORMATIV HUJJATLAR
              </NavLink>
            </li>
            <li>
              <NavLink to="https://navoiyuran.uz/page/anticorethics">
                O’QUV QO’LLANMALAR
              </NavLink>
            </li>
          </ul>
        </div>
      </Heros>
      <Section>
        <div className="container">
          <div className="row">
            <div className="row1">
              <Slider />
            </div>
            <div className="login">
              <img src={MainPageLoginImg} alt="" />
              <p>Способ входа</p>
              <div className="btn">
                <button>Регистрация</button>
                <button>Логин</button>
              </div>
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="input">
                  <input
                    type="text"
                    placeholder="| Логин"
                    onChange={(event) => setLogIn(event.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <input
                    type="password"
                    placeholder="| Парол"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
                <button className="enterence">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Login;
