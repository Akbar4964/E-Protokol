import styled from "styled-components";

export const Matters = styled.div`
  margin: 0 15px;
  .meeting-issue-content {
    .inputs {
      background-color: #f6fcff;
      height: 450px;
      overflow: auto;
      padding: 0 15px;
    }
    ::-webkit-scrollbar {
      width: 4px;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #ddf8f0;
    }

    ::-webkit-scrollbar-thumb {
      background: #208667;
      border-radius: 8px;
    }
    .matter-input {
      width: 750px;
      height: 48px;
      border-radius: 6px;
      border: 1px solid #208667;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 19.36px;
      text-align: left;
      color: #5d8579;
      margin-top: 5px;
    }
  }
  .label {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: left;
    color: #000;
  }
  .select {
    width: 319px;
    height: 48px;
    border-radius: 6px;
    border: 1px solid #208667;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.36px;
    text-align: left;
    color: #5d8579;
    margin-top: 5px;
  }
  .speakers {
    display: flex;
    justify-content: space-between;
  }
  .text {
    width: 750px;
    max-width: 750px;
    min-width: 750px;
    height: 120px;
    max-height: 120px;
    min-height: 120px;
    border-radius: 6px;
    margin-top: 5px;
    border: 1px solid #208667;
    ::placeholder {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.36px;
      text-align: left;
      color: #9d9d9d;
    }
  }
  .file {
    width: 650px;
    height: 48px;
    border-radius: 6px;
    border: 1px solid #208667;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.36px;
    text-align: left;
    color: #208667;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: 5px;
    position: relative;
  }
  .upload {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .load {
    cursor: pointer;
  }
  .script {
    position: absolute;
    left: 610px;
    top: 16px;
    cursor: pointer;
  }
  :where(.css-dev-only-do-not-override-1ae8k9u).ant-upload-wrapper
    .ant-upload-list
    .ant-upload-list-item
    .ant-upload-icon
    .anticon {
    display: none;
  }
  :where(.css-dev-only-do-not-override-1ae8k9u).ant-upload-wrapper
    .ant-upload-list
    .ant-upload-list-item
    .ant-upload-list-item-name {
    position: absolute;
    right: 555px;
    bottom: 50px;
    font-family: Public Sans;
    font-size: 20px;
    font-weight: 500;
    line-height: 16.45px;
  }
  .btns {
    display: flex;
    justify-content: end;
    gap: 20px;
  }
  .prev-btn {
    button {
      width: 83px;
      height: 40px;
      border-radius: 8px;
      border: 1px solid #208667;
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 16.94px;
      background-color: #fff;
      color: #208667;
      cursor: pointer;
      margin-top: 20px;
    }
  }
  .next-btn {
    margin-top: 28px;
    button {
      width: 100px;
      height: 40px;
      border-radius: 8px;
      border: 1px solid #208667;
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 16.94px;
      background-color: #208667;
      color: #fff;
      :hover {
        background-color: #208667;
        color: #fff;
      }
    }
  }
  .anticon-delete > svg {
    color: #208667;
  }
  :where(.css-dev-only-do-not-override-1ae8k9u).ant-upload-wrapper
    .ant-upload-list
    .ant-upload-list-item:hover {
  }
  :where(.css-dev-only-do-not-override-1ae8k9u).ant-upload-wrapper
    .ant-upload-list
    .ant-upload-list-item {
    background: none;
  }
  .add-matter {
    width: 100%;
    height: 48px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #208667;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    div {
      background-color: #208667;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: #fff;
      line-height: 20px;
    }
  }
  .add-matter:active {
    background-color: #208667;
    div {
      background-color: #fff;
      color: #208667;
    }
  }
  .matter-line {
    width: 100%;
    border: 3px solid #208667;
    border-radius: 6px;
  }
  .added-matter{
    margin-top: 15px;
  }
`;
