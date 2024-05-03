import React, { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Pagination } from "antd";
import { Panel } from "./style";
import { NavLink } from "react-router-dom";
import { routes } from "../../../../consts/routes";
import {
  MeetingsTypePageArrowImg,
  MeetingsTypePageDeleteImg,
  MeetingsTypePageEditImg,
  MeetingsTypePageSearchImg,
  MeetingsTypePageXImg,
} from "../../../../assets/icons";
import { API } from "../../../../services/api";

function MeetingType({ meetingsOrgan, refetch }) {
  const [focus, setFocus] = useState("destroy-none");

  const inputVal = useRef("");

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const currentData = meetingsOrgan.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const {
    mutate,
    isLoading: postUserLoading,
    error: postUserError,
  } = useMutation({
    mutationFn: async (id) => {
      return await API.deleteMeetingOrgan(id);
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
            <img src={MeetingsTypePageArrowImg} alt="" />
            <NavLink to={routes.MEETINGTYPE}>
              <p className="meetingspage">Yig'ilishlar turi</p>
            </NavLink>
          </div>
          <div className="row">
            <div className={inputVal.current.value ? "tab" : "tab-none"}>
              {meetingsOrgan.map((item, id) => (
                <div key={id}>
                  <div className="tab-content">
                    <p className="tab-text">{`${item.forename}`}</p>
                  </div>
                  <div className="tab-lines"></div>
                </div>
              ))}
            </div>
            <div className="search">
              <img src={MeetingsTypePageSearchImg} alt="" />
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
                src={MeetingsTypePageXImg}
              />
            </div>
            <div className="create">
              <NavLink to={routes.CREATE_MEETINGTYPE}>
                <button>Yig'ilish turini yaratish</button>
              </NavLink>
            </div>
          </div>
          <div className="meetings">
            <div className="thead">
              <div className="thead__id">T/R</div>
              <div className="thead__organ">NOMI</div>
              <div className="thead__meet">EL-POCHTA</div>
              <div className="thead__register">TELEFON</div>
              <div className="thead__time">INN</div>
            </div>
            {currentData.map((item, id) => (
              <div key={id}>
                <div className="col">
                  <div className="col__id">{id + 1}</div>
                  <div className="col__organ">{`${item.forename}`}</div>
                  <div className="col__meet">{item.email}</div>
                  <div className="col__register">{`+998${item.tell}`}</div>
                  <div className="col__time">{item.inn}</div>
                  <div className="del-edit">
                    <button onClick={() => mutate(item.id)}>
                      <img src={MeetingsTypePageDeleteImg} alt="" />
                    </button>
                    <button>
                      <img src={MeetingsTypePageEditImg} alt="" />
                    </button>
                  </div>
                </div>
                <div className="col__line"></div>
              </div>
            ))}
            {meetingsOrgan.length > pageSize && (
              <Pagination
                className="paginate"
                current={currentPage}
                onChange={handlePageChange}
                total={meetingsOrgan.length}
                pageSize={pageSize}
              />
            )}
          </div>
        </div>
      </Panel>
    </>
  );
}

export default MeetingType;
