import React, { useState } from "react";
import { ActivatedMeetings } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../../../consts/routes";
import { AttendPageArrowImg } from "../../../../assets/icons";
import { NoDataFoundGif } from "../../../../assets/images";
import { getTime } from "../../../../helpers";
import { Button, Form } from "antd";
import { API } from "../../../../services/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../query/keys";
import Spinner from "../../../../consts/Spinner";
import { useSelector } from "react-redux";
import { userMeetingOrganRoles } from "../../../../consts";

function ActiveOrganMeeting({ organId, organForeName, meetings, render }) {
  const [value, setValue] = useState("");

  const [id, setId] = useState(0);

  const navigate = useNavigate();

  const [test, setTest] = useState({});

  const authUser = useSelector((store) => store.users.authUser);

  const authPosition = authUser.user.position;

  const {
    mutate,
    isLoading: postUserLoading,
    error: postUserError,
  } = useMutation({
    mutationFn: async (data) => {
      return await API.putMeeting(id, data);
    },
    onSuccess: (data) => {
      render();
    },
    onError: (data) => {
      console.log("onError", data);
    },
  });

  let defaultId;

  meetings.forEach((item) => {
    defaultId = item.id;
  });

  const { error, data, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.getMeetingsById],
    queryFn: () => API.getMeetingsById(id ? id : defaultId),
  });

  if (isLoading) return <Spinner />;
  if (error) return "An error has occured: " + error.message;

  const filteredMeeting = meetings.filter((item) => item.organId == organId);

  function handleSubmit() {
    const oldObject = data;
    if (value == "Boshlash") {
      const newObject = {
        ...oldObject,
        status: "Jadval bo'yicha faol",
      };
      console.log(newObject, oldObject);
      mutate(newObject);
    }
    if (value == "Ishtirok etish") {
      if (authPosition == userMeetingOrganRoles.SECRETARY) {
        navigate(`${routes.ACTIVEMEETINGDETAILS}/${id}`);
      }
      if (authPosition == userMeetingOrganRoles.CHAIRMAN) {
        navigate(`${routes.ACTIVEMEETINGDETAILSCHAIRMAN}/${id}`);
      }
      if (authPosition == userMeetingOrganRoles.USER) {
        navigate(`${routes.ACTIVEMEETINGDETAILS}/${id}`);
      }
      if (authPosition == userMeetingOrganRoles.OFFERED) {
        navigate(`${routes.ACTIVEMEETINGDETAILS}/${id}`);
      }
    }
  }

  return (
    <>
      <ActivatedMeetings>
        <div className="container">
          <h2 className="organ-title">
            {filteredMeeting.length ? organForeName : ""}
          </h2>

          <Form onFinish={handleSubmit}>
            {filteredMeeting.length ? (
              filteredMeeting.map((item, id) => (
                <div key={id} className="active-meetings">
                  <div className="row">
                    <div className="meeting-protokol">{item.protokolId}</div>
                    <div className="col">
                      <p className="meeting-title">{`${
                        id + 1
                      } ${organForeName}ning rejalashtirilgan majlisi`}</p>
                      <p className="meeting-status">{`Uchrashuv holati: ${item.status}`}</p>
                      <p className="meeting-time">{`Uchrashuvda ishtirok etish uchun ro'yxatga olish boshlanadi: ${
                        getTime(item.registerTime).year
                      }-${getTime(item.registerTime).month}-${
                        getTime(item.registerTime).day
                      } ${getTime(item.registerTime).hour}:${
                        getTime(item.registerTime).minute
                      }:${getTime(item.registerTime).second}`}</p>
                    </div>
                  </div>
                  <div className="meeting-btn">
                    <Form.Item name="status">
                      <Button
                        htmlType="submit"
                        onClick={() => {
                          setValue(
                            item.status == "Jadval bo'yicha faol"
                              ? "Ishtirok etish"
                              : item.status == "Ishga tushirish kutilmoqda"
                              ? "Boshlash"
                              : "Taklif etilgan"
                          );
                          setId(item.id);
                        }}
                      >
                        {item.status == "Jadval bo'yicha faol"
                          ? "Ishtirok etish"
                          : item.status == "Ishga tushirish kutilmoqda"
                          ? "Boshlash"
                          : "Taklif etilgan"}
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              ))
            ) : (
              <div className="nodata">
                <img src={NoDataFoundGif} />
              </div>
            )}
          </Form>
        </div>
      </ActivatedMeetings>
    </>
  );
}

export default ActiveOrganMeeting;
