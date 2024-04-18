import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, DatePicker, Form, Input, Select } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import Spinner from "../../../../consts/Spinner";
import { queryKeys } from "../../../../query/keys";
import { API } from "../../../../services/api";
import { cities } from "../../../../consts";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../consts/routes";

dayjs.extend(buddhistEra);

function EditedMeeting({ id, meetingOrgan }) {
  const [meetingOrganValue, setMeetingOrganValue] = useState("");

  const navigate = useNavigate();

  const {
    mutate,
    isLoading: postUserLoading,
    error: postUserError,
  } = useMutation({
    mutationFn: async (data) => {
      return await API.putMeeting(id, data);
    },
    onSuccess: (data) => {
      navigate(routes.MEETING);
      refetch();
    },
    onError: (data) => {
      console.log("onError", data);
    },
  });
  const { error, data, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.getMeetingsById],
    queryFn: () => API.getMeetingsById(id),
  });
  if (isLoading) return <Spinner />;
  if (error) return "An error has occured: " + error.message;

  function handleSubmit(event) {
    const oldObject = data;
    const newMergedObject = {
      ...oldObject,
      forename: meetingOrganValue,
      city: event.city,
      address: event.address,
      details: event.details,
      time: event.time,
      endTime: event.endTime,
      registerTime: event.registerTime,
      protokolId: event.protokolId,
      organId: event.organId,
    };
    mutate(newMergedObject);
  }

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
  return (
    <>
      <div className="container">
        <Form onFinish={handleSubmit}>
          <div className={"meeting-info-content"}>
            <div className="col">
              <div>
                <div className="label">Uchrashuv organlari</div>
                <Form.Item
                  name="organId"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos organni tekshiring!",
                    },
                  ]}
                >
                  <Select
                    onChange={(value) => setMeetingOrganValue(value)}
                    defaultValue={data.forename}
                    placeholder="Tanlang"
                    allowClear
                  >
                    {meetingOrgan.map((item, id) => (
                      <Select.Option key={id} value={item.forename}>
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
                      message: "Iltimos shaharni tekshiring!",
                    },
                  ]}
                >
                  <Select
                    defaultValue={data.city}
                    placeholder="Tanlang"
                    allowClear
                  >
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
                      message: "Iltimos protokolId tekshiring!",
                    },
                  ]}
                >
                  <Input
                    defaultValue={data.protokolId}
                    type="number"
                    placeholder="Kiriting"
                  />
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
                        message: "Iltimos address tekshiring!",
                      },
                    ]}
                  >
                    <Input defaultValue={data.address} placeholder="Kiriting" />
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
                          message: "Iltimos tavfsilotlarni tekshiring!",
                        },
                      ]}
                      name="details"
                    >
                      <Input.TextArea
                        defaultValue={data.details}
                        placeholder="Kiriting"
                      />
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
                        message: "Iltimos boshlanishini tekshiring!",
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
                  <div className="label">Ro’yxatdan o’tish boshlanishi</div>
                  <Form.Item
                    name="time"
                    rules={[
                      {
                        required: true,
                        message:
                          "Iltimos ro'yxatdan o'tish boshlanishini tekshiring!",
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
                          "Iltimos ro'yxatdan o'tish tugashini tekshiring!",
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
                <Button htmlType="submit">Tasdiqlash</Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default EditedMeeting;
