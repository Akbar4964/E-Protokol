import React, { useMemo, useRef, useState } from "react";
import { Panel } from "./style";
import { NavLink } from "react-router-dom";
import { routes } from "../../../../consts/routes";
import {
  UsersInfoPageArrowImg,
  UsersInfoPageDeleteImg,
  UsersInfoPageEditImg,
  UsersInfoPageSearchImg,
  UsersInfoPageXImg,
} from "../../../../assets/icons";
import { API } from "../../../../services/api";
import { useMutation } from "@tanstack/react-query";
import { Pagination } from "antd";

function UsersInfo({ data, refetch }) {
  const [focus, setFocus] = useState("destroy-none");

  const inputVal = useRef("");

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;

  const totalPage = Math.ceil(data.length / pageSize);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const currentData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const {
    mutate,
    isLoading: postUserLoading,
    error: postUserError,
  } = useMutation({
    mutationFn: async (id) => {
      return await API.deleteUser(id);
    },
    onSuccess: (data) => {
      refetch();
    },
    onError: (data) => {
      console.log("onError", data);
    },
  });

  function handleFocus() {
    setFocus("destroy-none");
    inputVal.current.value = "";
  }
  return (
    <>
      <Panel>
        <div className="container">
          <div className="routes">
            <NavLink to={routes.ADMIN}>
              <p className="homepage">Bosh sahifa</p>
            </NavLink>
            <img src={UsersInfoPageArrowImg} alt="" />
            <NavLink to={routes.USERS}>
              <p className="meetingspage">Foydalanuvchilar</p>
            </NavLink>
          </div>
          <div className="row">
            <div className={inputVal.current.value ? "tab" : "tab-none"}>
              {[].map((item, id) => (
                <div key={id}>
                  <div className="tab-content">
                    <p className="tab-text">{`${item.name} ${item.surname} ${item.fatherName}`}</p>
                  </div>
                  <div className="tab-lines"></div>
                </div>
              ))}
            </div>
            <div className="search">
              <img src={UsersInfoPageSearchImg} alt="" />
              <input
                ref={inputVal}
                onChange={(event) => {
                  if (event.target.value === "") {
                    setFocus("destroy-none");
                  } else {
                    setFocus("destroy");
                  }
                }}
                type="text"
                placeholder="Qidirish"
              />
              <img
                onClick={() => handleFocus()}
                className={focus}
                src={UsersInfoPageXImg}
                alt=""
              />
            </div>
            <div className="create">
              <NavLink to={routes.CREATEUSER}>
                <button>Foydalanuvchi yaratish</button>
              </NavLink>
            </div>
          </div>
          <div className="meetings">
            <div className="thead">
              <div className="thead__id">T/R</div>
              <div className="thead__organ">FIO</div>
              <div className="thead__meet">EL-POCHTA</div>
              <div className="thead__register">TELEFON</div>
              <div className="thead__time">SHAXS TURI</div>
              <div className="thead__city">ROLI</div>
            </div>
            {currentData.map((item, id) => (
              <div key={id}>
                <div className="col">
                  <div className="col__id">{id + 1}</div>
                  <div className="col__organ">
                    {`${item.name} ${item.surname} ${item.fatherName}`}
                  </div>
                  <div className="col__meet">{item.email}</div>
                  <div className="col__register">{`+998${item.tell}`}</div>
                  <div className="col__time">{item.personType}</div>
                  <div className="col__city">{item.position}</div>
                  <div className="del-edit">
                    <button onClick={() => mutate(item.id)}>
                      <img src={UsersInfoPageDeleteImg} alt="" />
                    </button>
                    <button>
                      <img src={UsersInfoPageEditImg} alt="" />
                    </button>
                  </div>
                </div>
                <div className="col__line"></div>
              </div>
            ))}
            {data.length > pageSize && (
              <Pagination
                className="paginate"
                current={currentPage}
                onChange={handlePageChange}
                total={data.length}
                pageSize={pageSize}
              />
            )}
          </div>
        </div>
      </Panel>
    </>
  );
}

export default UsersInfo;
