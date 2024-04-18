import React, { useState } from "react";
import { Matters } from "./style";
import { Button, Form, Input, Select, Upload, message } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import { Script } from "../../../../assets/icons";
import { useMutation } from "@tanstack/react-query";
import { API } from "../../../../services/api";
// import { onChange } from "react-toastify/dist/core/store";

function Matter({
  activeButton,
  handleButtonClick,
  Prev,
  setDisabled,
  meetingsUsers,
  postMeeting,
}) {
  const [click, setClick] = useState(false);

  const [divList, setDivList] = useState([]);

  const addDiv = () => {
    setDivList([
      ...divList,
      <div key={divList.length} className="generated-div">
        <div className="label">Kun tartibidagi masala</div>
        <div>
          <Form.Item
            name="ref"
            rules={[
              {
                required: true,
                message: "Kun tartibidagi masalani kiriting!",
              },
            ]}
          >
            <Input className="matter-input" placeholder="Kiriting" />
          </Form.Item>
        </div>
        <div className="speakers">
          <div>
            <div className="label">Spiker</div>
            <Form.Item
              name="speaker"
              rules={[
                {
                  required: true,
                  message: "Iltimos spiker tanlang!",
                },
              ]}
            >
              <Select className="select" placeholder="Tanlang" allowClear>
                {meetingsUsers.map((item, id) => (
                  <Select.Option
                    key={id}
                    value={`${item.name} ${item.surname} ${item.fatherName}`}
                  >
                    {`${item.name} ${item.surname} ${item.fatherName}/${item.position}`}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div>
            <div className="label">Kutish vaqti</div>
            <Form.Item
              name="waitTime"
              rules={[
                {
                  required: true,
                  message: "Iltimos kutish vaqtini tanlang!",
                },
              ]}
            >
              <Select className="select" placeholder="Tanlang" allowClear>
                <Option value="5 minut">5 min</Option>
                <Option value="15 minut">15 min</Option>
                <Option value="30 minut">30 min</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
        <div>
          <div className="label">Reglament vaqti</div>
          <Form.Item
            name="reglamentTime"
            rules={[
              {
                required: true,
                message: "Iltimos reglament vaqtini tanlang!",
              },
            ]}
          >
            <Select className="select" placeholder="Tanlang" allowClear>
              <Option value="10 minut">10 min</Option>
              <Option value="20 minut">20 min</Option>
              <Option value="30 minut">30 min</Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <div className="label">Masala yuzasidan ma’lumot</div>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Iltimos ma'lumot yozing!",
              },
            ]}
          >
            <TextArea placeholder="Kiriting" className="text" />
          </Form.Item>
        </div>
        <div className="matter-line"></div>
        <button onClick={() => deleteDiv(divList.length)}>Delete</button>
      </div>,
    ]);
  };

  const deleteDiv = (index) => {
    const newList = divList.filter((_, i) => i !== index);
    setDivList(newList);
  };

  const {
    mutate,
    isPending: postUserLoading,
    error: postUserError,
  } = useMutation({
    mutationFn: async (data) => {
      return await API.postMeetingMatter(data);
    },
    onSuccess: (data) => {},
    onError: (data) => {
      console.log("onError", data);
    },
  });

  function handleSubmit(event) {
    if (click) {
      handleButtonClick(4);
    }
    const newObject = { ...event, meetingId: postMeeting.organId };
    const newMergedObject = { ...newObject };
    mutate(newMergedObject);
  }

  return (
    <>
      <Matters>
        <div
          className={
            activeButton === 1
              ? "none"
              : activeButton === 2
              ? "none"
              : "meeting-issue-content"
          }
        >
          <Form onFinish={handleSubmit}>
            <div className="inputs">
              <div className="label">Kun tartibidagi masala</div>
              <div>
                <Form.Item
                  name="dayIssue"
                  rules={[
                    {
                      required: true,
                      message: "Kun tartibidagi masalani kiriting!",
                    },
                  ]}
                >
                  <Input className="matter-input" placeholder="Kiriting" />
                </Form.Item>
              </div>
              <div className="speakers">
                <div>
                  <div className="label">Spiker</div>
                  <Form.Item
                    name="speaker"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos spiker tanlang!",
                      },
                    ]}
                  >
                    <Select className="select" placeholder="Tanlang" allowClear>
                      {meetingsUsers.map((item, id) => (
                        <Select.Option
                          key={id}
                          value={`${item.name} ${item.surname} ${item.fatherName}`}
                        >
                          {`${item.name} ${item.surname} ${item.fatherName}/${item.position}`}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <div>
                  <div className="label">Kutish vaqti</div>
                  <Form.Item
                    name="waitTime"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos kutish vaqtini tanlang!",
                      },
                    ]}
                  >
                    <Select className="select" placeholder="Tanlang" allowClear>
                      <Option value="5 minut">5 min</Option>
                      <Option value="15 minut">15 min</Option>
                      <Option value="30 minut">30 min</Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
              <div>
                <div className="label">Reglament vaqti</div>
                <Form.Item
                  name="reglamentTime"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos reglament vaqtini tanlang!",
                    },
                  ]}
                >
                  <Select className="select" placeholder="Tanlang" allowClear>
                    <Option value="10 minut">10 min</Option>
                    <Option value="20 minut">20 min</Option>
                    <Option value="30 minut">30 min</Option>
                  </Select>
                </Form.Item>
              </div>
              <div>
                <div className="label">Masala yuzasidan ma’lumot</div>
                <Form.Item
                  name="infoIssue"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos ma'lumot yozing!",
                    },
                  ]}
                >
                  <TextArea placeholder="Kiriting" className="text" />
                </Form.Item>
              </div>
              <div className="matter-line"></div>
              {divList.map((div, index) => (
                <div className="added-matter" key={index}>
                  {div}
                </div>
              ))}
            </div>
            <button onClick={addDiv} type="button" className="add-matter">
              <div>+</div>
            </button>
            <div className="btns">
              <div className="prev-btn">
                <Prev
                  onClick={(event) => handleButtonClick(2)}
                  isActive={activeButton === 2}
                >
                  Ortga
                </Prev>
              </div>
              <Form.Item className="next-btn">
                <Button onClick={() => setClick(true)} htmlType="submit">
                  Keyingisi
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Matters>
    </>
  );
}

export default Matter;
