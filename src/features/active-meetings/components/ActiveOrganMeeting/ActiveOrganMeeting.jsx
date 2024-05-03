import React, { useState } from "react";
import { ActivatedMeetings } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../../../consts/routes";
import {
  AttendPageArrowImg,
  MeetingsTypePageArrowImg,
} from "../../../../assets/icons";
import { NoDataFoundGif } from "../../../../assets/images";
import { getTime } from "../../../../helpers";
import { Button, Form } from "antd";
import { API } from "../../../../services/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../query/keys";
import Spinner from "../../../../consts/Spinner";
import { useSelector } from "react-redux";
import { statusMeetings, userMeetingOrganRoles } from "../../../../consts";
import Backbone from "backbone";

const timeText = (time) =>
  `Uchrashuvda ishtirok etish uchun ro'yxatga olish boshlanadi: ${time.year}-${time.month}-${time.day} ${time.hour}:${time.minute}:${time.second}`;

function ActiveOrganMeeting({ organId, meetings, render, organForeName }) {
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

  function getMeetingStatus(status) {
    if (
      userMeetingOrganRoles.OFFERED == authPosition &&
      status == statusMeetings.kutilmoqda
    ) {
      return "Taklif etilgan";
    } else if (status === statusMeetings.faol) {
      return "Ishtirok etish";
    } else {
      return "Boshlash";
    }
  }

  function handleSubmit() {
    const oldObject = data;
    if (value == "Boshlash") {
      const newObject = {
        ...oldObject,
        status: statusMeetings.faol,
      };
      console.log(newObject, oldObject);
      mutate(newObject);
    }
    if (value == "Ishtirok etish") {
      if (authPosition == userMeetingOrganRoles.SECRETARY) {
        navigate(`${routes.ACTIVE_MEETING_DETAILS}/${id}`);
      } else {
        navigate(`${routes.USER_ACTIVE_MEETING_DETAILS}/${id}`);
      }
    }
    if (authPosition == userMeetingOrganRoles.SECRETARY) {
      navigate(`${routes.ACTIVE_MEETING_DETAILS}/${id}`);
    } else {
      navigate(`${routes.USER_ACTIVE_MEETING_DETAILS}/${id}`);
    }
  }

  function route1() {
    if (authPosition == userMeetingOrganRoles.SECRETARY) {
      return routes.ADMIN;
    } else {
      return routes.ATTEND_USER;
    }
  }

  function route2() {
    if (authPosition == userMeetingOrganRoles.SECRETARY) {
      return routes.ATTEND;
    } else {
      return routes.ATTEND_USER;
    }
  }

  function route3() {
    if (authPosition == userMeetingOrganRoles.SECRETARY) {
      return `${routes.ACTIVE_MEETINGS}/${organId}`;
    } else {
      return `${routes.USER_ACTIVE_MEETINGS}/${organId}`;
    }
  }

  return (
    <>
      <ActivatedMeetings>
        <div className="container">
          <div className="routes">
            <NavLink to={route1()}>
              <p className="homepage">Bosh sahifa</p>
            </NavLink>
            <img src={MeetingsTypePageArrowImg} alt="" />
            <NavLink to={route2()}>
              <p className="homepage">Yig'ilishda ishtirok etish</p>
            </NavLink>
            <img src={MeetingsTypePageArrowImg} alt="" />
            <NavLink to={route2()}>
              <p className="homepage">Aktiv uchrashuvlar</p>
            </NavLink>
            <img src={MeetingsTypePageArrowImg} alt="" />
            <NavLink to={route3()}>
              <p className="meetingspage">{organForeName.forename}</p>
            </NavLink>
          </div>
          <h2 className="organ-title">
            {filteredMeeting.length ? organForeName.forename : ""}
          </h2>
          <Form onFinish={handleSubmit}>
            {filteredMeeting.length ? (
              filteredMeeting.map((item, id) => (
                <div key={id} className="active-meetings">
                  <div className="row">
                    <div className="meeting-protokol">{item.protokolId}</div>
                    <div className="col">
                      <p className="meeting-title">{`${id + 1} ${
                        organForeName.forename
                      }ning rejalashtirilgan majlisi`}</p>
                      <p className="meeting-status">{`Uchrashuv holati: ${item.status}`}</p>
                      {/* <p className="meeting-time">{timeText(time)}</p> */}
                    </div>
                  </div>
                  <div className="meeting-btn">
                    <Form.Item name="status">
                      <Button
                        htmlType="submit"
                        onClick={() => {
                          setValue(
                            item.status == statusMeetings.faol
                              ? "Ishtirok etish"
                              : item.status == statusMeetings.kutilmoqda
                              ? "Boshlash"
                              : "Taklif etilgan"
                          );
                          setId(item.id);
                        }}
                      >
                        {getMeetingStatus(item.status)}
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
