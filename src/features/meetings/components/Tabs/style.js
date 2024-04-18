import styled from "styled-components";

export const TabStyle = styled.div`
  .ant-tabs-ink-bar {
    background-color: #208667;
    padding: 1.5px;
    border-radius: 8px;
  }
  :where(.css-dev-only-do-not-override-1ae8k9u).ant-tabs-top
    > .ant-tabs-nav::before {
    display: none;
  }
  .ant-tabs-nav-list {
    width: 631px;
    justify-content: center;
  }
  .ant-tabs-tab {
    width: 168px;
  }
  .ant-tabs-tab-btn {
    color: #208667;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    padding: 0 47px;
  }
  :where(.css-dev-only-do-not-override-1ae8k9u).ant-tabs
    .ant-tabs-tab.ant-tabs-tab-active
    .ant-tabs-tab-btn {
    color: #208667;
  }
  .ant-tabs-content {
    margin-top: 17px;
    font-family: Public Sans;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    color: #000;
  }
  .tabs-none {
    display: none;
  }
  .tab__line {
    margin-top: 33px;
    border: 3px solid #ddf8f0;
    height: 1.5px;
    border-radius: 8px;
  }
  .empty {
    text-align: center;
    img {
      width: 200px;
    }
  }
  .tab-meeting {
    height: 30px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 22px;
    border: 1px solid #208667;
  }
  .tab-meeting-id {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.36px;
    color: #208667;
  }
  .tab-meeting-govern {
    font-family: Public Sans;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.15px;
  }
`;
