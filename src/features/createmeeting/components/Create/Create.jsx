import React, { useState } from "react";
import { Created } from "./style";
import { NavLink } from "react-router-dom";
import { routes } from "../../../../consts/routes";
import { MeetingsPageArrowImg } from "../../../../assets/icons";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import en from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import Offer from "../Offer/Offer";
import Matter from "../Matter/Matter";
import View from "../View/View";
import { cities } from "../../../../consts";
import { API } from "../../../../services/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../query/keys";
import Spinner from "../../../../consts/Spinner";

dayjs.extend(buddhistEra);

function Create({ meetingsOrgan }) {
  const [activeButton, setActiveButton] = useState(1);

  const [disabled, setDisabled] = useState(true);

  const [meetingOrganId, setMeetingOrganId] = useState("");

  const [postMeeting, setPostMeeting] = useState("");

  const [createdMeetingId, setCreatedMeetingId] = useState(0);

  const [meetingsUsers, setmeetingsUsers] = useState([]);

  const {
    mutate,
    isLoading: postUserLoading,
    error: postUserError,
  } = useMutation({
    mutationFn: async (data) => {
      return await API.postMeeting(data);
    },
    onSuccess: (data) => {
      setCreatedMeetingId(data.id);
    },
    onError: (data) => {
      console.log("onError", data);
    },
  });

  const { error, data, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.offerUsers],
    queryFn: () => API.getUsers(),
  });
  if (isLoading) return <Spinner />;
  if (error) return "An error has occured: " + error.message;

  const buddhistLocale = {
    ...en,
    lang: {
      ...en.lang,
      fieldDateFormat: "BBBB-MM-DD",
      fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
      yearFormat: "BBBB",
      cellYearFormat: "BBBB",
    },
  };

  const Next = ({ children, onClick, isActive, type = "button" }) => (
    <button
      type={type}
      onClick={onClick}
      id="next-btn"
      className={isActive ? "" : ""}
    >
      {children}
    </button>
  );

  const Prev = ({ children, onClick, isActive }) => (
    <button onClick={onClick} className={isActive ? "" : ""}>
      {children}
    </button>
  );

  const Info = ({ children, onClick, isActive }) => (
    <button onClick={onClick} className={isActive ? "active" : "meeting-info"}>
      {children}
    </button>
  );

  const User = ({ children, onClick, isActive }) => (
    <button
      disabled={disabled}
      onClick={onClick}
      className={isActive ? "active" : "meeting-user"}
    >
      {children}
    </button>
  );

  const Issue = ({ children, onClick, isActive }) => (
    <button
      disabled={disabled}
      onClick={onClick}
      className={isActive ? "active" : "meeting-user"}
    >
      {children}
    </button>
  );

  const handleButtonClick = (newButton) => {
    setActiveButton(newButton);
  };

  function handleSubmit(event) {
    handleButtonClick(2);
    setDisabled(false);
    const governName = meetingsOrgan.find((obj) =>
      obj.id == meetingOrganId ? obj : ""
    );
    const oldObject = event;
    const newObject = {
      status: "Ishga tushirish kutilmoqda",
      forename: governName.forename,
      offerUsers: [],
    };
    const mergedObject = { ...oldObject, ...newObject };
    setPostMeeting(mergedObject);
    mutate(mergedObject);
  }

  return (
    <>
      {activeButton === 4 ? (
        ""
      ) : (
        <Created>
          <div className="container">
            <div className="routes">
              <NavLink to={routes.ADMIN}>
                <p className="homepage">Bosh sahifa</p>
              </NavLink>
              <img src={MeetingsPageArrowImg} alt="" />
              <NavLink to={routes.MEETING}>
                <p className="homepage">Yig’ilishlar</p>
              </NavLink>
              <img src={MeetingsPageArrowImg} alt="" />
              <NavLink to={routes.MEETING}>
                <p className="meetingspage">Yig’ilish tashkil etish</p>
              </NavLink>
            </div>
            <div className="create">
              <div>
                <Info
                  className="meeting-info"
                  onClick={(event) => handleButtonClick(1)}
                  isActive={activeButton === 1}
                >
                  Yig’ilish ma’lumotlari
                </Info>
                <User
                  className="meeting-user"
                  onClick={(event) => handleButtonClick(2)}
                  isActive={activeButton === 2}
                >
                  Yig’ilish ishtirokchilari
                </User>
                <Issue
                  className="meeting-issue"
                  onClick={(event) => handleButtonClick(3)}
                  isActive={activeButton === 3}
                >
                  Kun tartibidagi masalalar
                </Issue>
              </div>
              <div className="create-line"></div>
              <div className="row">
                <Form onFinish={handleSubmit}>
                  <div
                    className={
                      activeButton === 2
                        ? "none"
                        : activeButton === 3
                        ? "none"
                        : "meeting-info-content"
                    }
                  >
                    <div className="col">
                      <div>
                        <div className="label">Uchrashuv organlari</div>
                        <Form.Item
                          name="organId"
                          rules={[
                            {
                              required: true,
                              message: "Iltimos organni tanlang!",
                            },
                          ]}
                        >
                          <Select
                            onChange={(value) => setMeetingOrganId(value)}
                            placeholder="Tanlang"
                            allowClear
                          >
                            {meetingsOrgan.map((item, id) => (
                              <Select.Option key={id} value={item.id}>
                                {item.forename}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                      <div>
                        <div className="label">Shahar/Viloyat</div>
                        <Form.Item
                          name="city"
                          rules={[
                            {
                              required: true,
                              message: "Iltimos shaharni tanlang!",
                            },
                          ]}
                        >
                          <Select placeholder="Tanlang" allowClear>
                            <Select.Option value={cities.Tashkent}>
                              {cities.Tashkent}
                            </Select.Option>
                            <Select.Option value={cities.Samarqand}>
                              {cities.Samarqand}
                            </Select.Option>
                            <Select.Option value={cities.Andijon}>
                              {cities.Andijon}
                            </Select.Option>
                            <Select.Option value={cities.Buxoro}>
                              {cities.Buxoro}
                            </Select.Option>
                            <Select.Option value={cities.Jizzax}>
                              {cities.Jizzax}
                            </Select.Option>
                            <Select.Option value={cities.Namangan}>
                              {cities.Namangan}
                            </Select.Option>
                            <Select.Option value={cities.Navoiy}>
                              {cities.Navoiy}
                            </Select.Option>
                            <Select.Option value={cities.Nukus}>
                              {cities.Nukus}
                            </Select.Option>
                            <Select.Option value={cities.Qarshi}>
                              {cities.Qarshi}
                            </Select.Option>
                            <Select.Option value={cities.Urganch}>
                              {cities.Urganch}
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                    <div className="cols">
                      <div>
                        <div className="label">ID Protokol</div>
                        <Form.Item
                          name="protokolId"
                          rules={[
                            {
                              required: true,
                              message: "Iltimos protokolId kiriting!",
                            },
                          ]}
                        >
                          <Input type="number" placeholder="Kiriting" />
                        </Form.Item>
                      </div>
                      <div>
                        <div>
                          <div className="label">Manzil</div>
                          <Form.Item
                            name="address"
                            rules={[
                              {
                                required: true,
                                message: "Iltimos address kiriting!",
                              },
                            ]}
                          >
                            <Input placeholder="Kiriting" />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <div className="explain">
                      <div className="text">
                        <div>
                          <div className="label">Yig'ilish tavsilotlari</div>
                          <div className="rows-time">
                            <Form.Item
                              rules={[
                                {
                                  required: true,
                                  message: "Iltimos tavfsilotlarni kiriting!",
                                },
                              ]}
                              name="details"
                            >
                              <Input.TextArea placeholder="Kiriting" />
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                      <div className="rows">
                        <div>
                          <div className="label">Yig'ilish boshlanishi</div>
                          <Form.Item
                            name="registerTime"
                            rules={[
                              {
                                required: true,
                                message: "Iltimos boshlanishini kiriting!",
                              },
                            ]}
                          >
                            <DatePicker
                              placeholder="__ __ ____            ____ ____"
                              showTime
                              locale={buddhistLocale}
                            />
                          </Form.Item>
                        </div>
                        <div>
                          <div className="label">
                            Ro’yxatdan o’tish boshlanishi
                          </div>
                          <Form.Item
                            name="time"
                            rules={[
                              {
                                required: true,
                                message:
                                  "Iltimos ro'yxatdan o'tish boshlanishini kiriting!",
                              },
                            ]}
                          >
                            <DatePicker
                              placeholder="__ __ ____            ____ ____"
                              showTime
                              locale={buddhistLocale}
                            />
                          </Form.Item>
                        </div>
                        <div>
                          <div className="label">Ro’yxatdan o’tish tugashi</div>
                          <Form.Item
                            name="endTime"
                            rules={[
                              {
                                required: true,
                                message:
                                  "Iltimos ro'yxatdan o'tish tugashini kiriting!",
                              },
                            ]}
                          >
                            <DatePicker
                              showTime
                              locale={buddhistLocale}
                              placeholder="__ __ ____            ____ ____"
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <div className="next-btn">
                      <Form.Item>
                        <Button htmlType="submit">Keyingisi</Button>
                      </Form.Item>
                    </div>
                  </div>
                </Form>
                {meetingOrganId ? (
                  <Offer
                    activeButton={activeButton}
                    handleButtonClick={handleButtonClick}
                    Prev={Prev}
                    meetingsOrganId={meetingOrganId}
                    users={data}
                    setDisabled={setDisabled}
                    postMeeting={postMeeting}
                    createdMeetingId={createdMeetingId}
                    refetch={refetch}
                    setmeetingsUsers={setmeetingsUsers}
                  />
                ) : (
                  ""
                )}

                <Matter
                  activeButton={activeButton}
                  handleButtonClick={handleButtonClick}
                  Prev={Prev}
                  setDisabled={setDisabled}
                  meetingsUsers={meetingsUsers}
                  postMeeting={postMeeting}
                />
              </div>
            </div>
          </div>
        </Created>
      )}

      {activeButton === 4 ? (
        <View
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
          Prev={Prev}
          postMeeting={postMeeting}
          meetingsUsers={meetingsUsers}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Create;
