import React from "react";
import { Tabs } from "antd";
import { TabStyle } from "./style";
import { NoDataFound } from "../../../../assets/images";

function Tab() {
  const items = [
    {
      key: "1",
      label: "Xammasi",
      children: "",
    },
    {
      key: "2",
      label: "Yig’ilishlar",
      children: "",
    },
    {
      key: "3",
      label: "Fayllar",
      children: "",
    },
  ];

  return (
    <>
      <TabStyle>
        <Tabs
          className={
            items[0].children || items[1].children || items[2].children
              ? "tabs"
              : "tabs-none"
          }
          defaultActiveKey="1"
          items={items}
        />
        <div
          className={
            items[0].children || items[1].children || items[2].children
              ? "tab__line"
              : "tabs-none"
          }
        ></div>
        <div
          className={
            items[0].children || items[1].children || items[2].children
              ? "tabs-none"
              : "empty"
          }
        >
          <img src={NoDataFound} alt="" />
        </div>
      </TabStyle>
    </>
  );
}

export default Tab;
