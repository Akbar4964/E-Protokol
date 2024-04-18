import styled from "styled-components";

export const Created = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
  .routes {
    display: flex;
    justify-content: end;
    gap: 7px;
    .homepage {
      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;
      color: #20866780;
    }
    .meetingspage {
      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;
      color: #208667;
    }
  }
  .create {
    width: 100%;
    height: auto;
    margin-top: 44px;
    border-radius: 12px;
    box-shadow: 0px 2px 25px 0px #00000014;
    background-color: #fff;
    display: flex;
    padding: 30px;
    .meeting-info {
      width: 289px;
      height: 44px;
      background: #ddf8f0;
      border: 0;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      color: #5d857980;
      cursor: pointer;
    }
    .meeting-user {
      margin-top: 2px;
      width: 289px;
      height: 44px;
      background: #ddf8f0;
      border: 0;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      color: #5d857980;
      cursor: pointer;
    }
    .meeting-issue {
      margin-top: 2px;
      width: 289px;
      height: 44px;
      background: #ddf8f0;
      border: 0;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      color: #5d857980;
      cursor: pointer;
    }
    .active {
      width: 289px;
      height: 44px;
      background: #ddf8f0;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      color: #208667;
      border-left-color: #208667;
      border-left-width: 4px;
      border-top-width: 0;
      border-bottom-width: 0;
      border-right-width: 0;
      border-left-style: solid;
      cursor: pointer;
      margin-top: 2px;
    }
    .none {
      display: none;
    }
    .create-line {
      width: 2px;
      height: auto;
      border: 3px solid #ddf8f0;
      border-radius: 8px;
      margin-left: 30px;
    }
    .meeting-info-content {
      margin-left: 30px;
      margin-right: 30px;
      .label {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color: #000;
      }
      .ant-select-selection-search {
        width: 100%;
      }
      .ant-select-selector {
        width: 350px;
        height: 48px;
        border-radius: 6px;
        border: 1px solid #208667;
        outline: 0;
        margin-top: 5px;
        color: #9d9d9d;
        cursor: pointer;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
      }
      .ant-input:focus {
        box-shadow: none;
      }
      :where(.css-dev-only-do-not-override-1ae8k9u).ant-select-single {
        height: auto;
      }
      input {
        width: 350px;
        height: 48px;
        border-radius: 6px;
        border: 1px solid #208667;
        outline: 0;
        margin-top: 5px;
        color: #208667;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        padding: 0 12px;
        ::placeholder {
          color: #9d9d9d;
        }
      }
      textarea {
        width: 350px;
        max-width: 350px;
        min-width: 350px;
        height: 235px;
        max-height: 235px;
        min-height: 235px;
        border-radius: 6px;
        border: 1px solid #208667;
        outline: 0;
        margin-top: 5px;
        color: #208667;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        padding: 10px 12px;
        ::placeholder {
          color: #9d9d9d;
        }
      }
      .ant-picker-outlined {
        border: 0;
        box-shadow: none;
        padding: 0;
      }
      .ant-picker-outlined:focus {
        box-shadow: none;
        border-color: 0;
      }
      .ant-picker {
        :focus {
          box-shadow: none;
        }
      }
      .ant-picker-input {
        border: 0;
        box-shadow: none;
        outline: 0;
      }
    }
    .explain {
      display: flex;
      gap: 44px;
    }
    .col {
      display: flex;
      gap: 44px;
    }

    .cols {
      margin-top: 20px;
      display: flex;
      gap: 44px;
    }
    .next-btn {
      text-align: right;
      button {
        width: 105px;
        height: 40px;
        margin-top: -25px;
        border-radius: 8px;
        background: #208667;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        border: 0;
        cursor: pointer;
        color: #fff;
      }
      .ant-btn:hover {
        background-color: #208667;
        color: #fff;
      }
    }
  }
`;
