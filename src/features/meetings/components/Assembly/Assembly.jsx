import React, { useRef, useState } from "react";
import Tab from "../Tabs/Tab";
import { NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Pagination } from "antd";
import { Panel } from "./style";
import { routes } from "../../../../consts/routes";
import {
  MeetingsPageArrowImg,
  MeetingsPageDeleteImg,
  MeetingsPageEditImg,
  MeetingsPageSearchImg,
  MeetingsPageXImg,
} from "../../../../assets/icons";
import { API } from "../../../../services/api";
import { getTime } from "../../../../helpers";
import { toast } from "react-toastify";
import { Create } from "../../../createmeeting";

function Assembly({ meetings, refetch }) {
  const [focus, setFocus] = useState("destroy-none");

  const [meetingEditId, setMeetingEditId] = useState(0);

  const inputVal = useRef("");

  const [currentPage, setCurrentPage] = useState(1);

  const {
    mutate,
    isLoading: meetingDeleteLoading,
    error: meetingDeleteError,
  } = useMutation({
    mutationFn: async (id) => {
      return await API.deleteMeeting(id);
    },
    onSuccess: () => {
      toast.success(`Ma'lumot muvaffaqiyatli o'chirildi`);
      refetch();
    },
    onError: (data) => {
      toast.error("Ma'lumot o'chirilmadi");
      console.log("onError", data);
    },
  });

  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = meetings.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
            <img src={MeetingsPageArrowImg} />
            <NavLink to={routes.MEETING}>
              <p className="meetingspage">Yig'ilishlar</p>
            </NavLink>
          </div>
          <div className="row">
            <div className={inputVal.current.value ? "tab" : "tab-none"}>
              <Tab />
              <Form>
                <div className="tab__search">
                  <div>
                    <div className="date-line"></div>
                    <input type="date" className="dates" />
                    <div className="date-line"></div>
                  </div>
                  <Button className="btn-search" htmlType="submit">
                    Qidirish
                  </Button>
                </div>
              </Form>
            </div>
            <div className="search">
              <img src={MeetingsPageSearchImg} />
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
                src={MeetingsPageXImg}
              />
            </div>
            <div className="create">
              <NavLink to={routes.CREATEMEETING}>
                <button>Yig'ilish yaratish</button>
              </NavLink>
            </div>
          </div>
          <div className="meetings">
            <div className="thead">
              <div className="thead__id">ID PROTOKOL</div>
              <div className="thead__organ">BOSHQARUV ORGANI</div>
              <div className="thead__meet">UCHRASHUV XOLATI</div>
              <div className="thead__register">
                RO'YXATDAN O'TISH BOSHLANISHI
              </div>
              <div className="thead__time">UCHRASHUV BOSHLANISH VAQTI</div>
              <div className="thead__city">SHAHAR/VILOYAT</div>
            </div>
            {currentData.map((item, id) => (
              <div key={id}>
                <div className="col">
                  <div className="col__id">{item.protokolId}</div>
                  <div className="col__organ">{item.forename}</div>
                  <div
                    className={
                      item.status == "Ishga tushirish kutilmoqda"
                        ? "col__meet2"
                        : item.status == "Jadval bo'yicha faol"
                        ? "col__meet3"
                        : "col__meet"
                    }
                  >
                    {item.status}
                  </div>
                  <div className="col__register">
                    {`${getTime(item.registerTime).year}-${
                      getTime(item.registerTime).month
                    }-${getTime(item.registerTime).day} ${
                      getTime(item.registerTime).hour
                    }:${getTime(item.registerTime).minute}:${
                      getTime(item.registerTime).second
                    }`}
                  </div>
                  <div className="col__time">{`${getTime(item.time).year}-${
                    getTime(item.time).month
                  }-${getTime(item.time).day} ${getTime(item.time).hour}:${
                    getTime(item.time).minute
                  }:${getTime(item.time).second}`}</div>
                  <div className="col__city">{item.city}</div>
                  <div className="del-edit">
                    <button
                      onClick={() => {
                        const coniform = window.confirm(
                          `${item.protokolId} ${item.forename}ni o'chirishni xohlaysizmi`
                        );
                        if (coniform) {
                          mutate(item.id);
                        }
                      }}
                    >
                      <img src={MeetingsPageDeleteImg} alt="" />
                    </button>
                    <NavLink to={`${routes.EDITMEETING}/${item.id}`}>
                      <button onClick={() => setMeetingEditId(item.id)}>
                        <img src={MeetingsPageEditImg} alt="" />
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col__line"></div>
              </div>
            ))}
            {meetings.length > pageSize && (
              <Pagination
                className="paginate"
                current={currentPage}
                onChange={handlePageChange}
                total={meetings.length}
                pageSize={pageSize}
              />
            )}
          </div>
        </div>
      </Panel>
    </>
  );
}

export default Assembly;
