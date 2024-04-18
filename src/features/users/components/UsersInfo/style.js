import styled from "styled-components";

export const Panel = styled.section`
  margin-top: 40px;
  margin-bottom: 39px;
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
  .row {
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .tab {
      width: 631px;
      height: 280px;
      overflow: auto;
      position: absolute;
      top: 41px;
      border-radius: 8px;
      background: #ffffff;
      z-index: 1;
      padding: 0 30px;
      box-shadow: -5px 10px 25px 0px #0000001a;
      &__search {
        width: 100%;
        height: 80px;
        background: #ddf8f0;
        margin-top: 10px;
        position: absolute;
        left: 0;
        bottom: 0px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        .dates {
          width: 131px;
          height: 40px;
          border-radius: 11px;
          background-color: #208667;
          border: 0;
          outline: 0;
          color: #fff;
          padding: 0 10px;
          margin: 5px 0;
          cursor: pointer;
        }
        .date-line {
          width: 131px;
          border: 2px solid #208667;
          border-radius: 8px;
        }
      }
      .btn-search {
        width: 84px;
        height: 40px;
        margin-left: 20px;
        background-color: #208667;
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
        color: #fff;
        .btn-search:hover {
          border: 0;
        }
      }
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
    .tab-none {
      display: none;
    }
    .search {
      width: 631px;
      height: 40px;
      border-radius: 8px;
      border: 1px solid #208667;
      display: flex;
      align-items: center;
      padding: 0 8px;
      gap: 7px;
      input {
        width: 100%;
        height: 77%;
        padding: 0 15px;
        border: 0;
        outline: 0;
        color: #208667;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        &::placeholder {
          font-family: Inter;
          font-size: 16px;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: 0em;
          color: #9d9d9d;
        }
      }
      img {
        cursor: pointer;
      }
      .destroy-none {
        display: none;
      }
    }
    .create {
      button {
        width: 200px;
        height: 40px;
        padding: 12px, 22px, 12px, 22px;
        border-radius: 8px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
        background-color: #208667;
        border: 0;
        cursor: pointer;
      }
    }
  }
  .meetings {
    width: 100%;
    height: 534px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 2px 25px 0px #00000014;
    position: relative;
    .thead {
      height: 60px;
      background-color: #ddf8f0;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 22px;
      div {
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        color: #208667;
        text-align: center;
      }
      &__id {
        width: 76px;
      }
      &__organ {
        width: 148px;
      }
      &__meet {
        width: 144px;
      }
      &__register {
        width: 149px;
      }
      &__time {
        width: 138px;
      }
      &__city {
        width: 124px;
      }
    }
    .col {
      height: 53px;
      display: flex;
      align-items: center;
      text-align: center;
      padding: 0 15px;
      cursor: pointer;
      position: relative;
      &__id {
        width: 87px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
      }
      &__organ {
        width: 227px;
        margin-left: 20px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
      }
      &__meet {
        width: 150px;
        margin-left: 33px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
      }
      &__register {
        width: 131px;
        margin-left: 103px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
      }
      &__time {
        width: 79px;
        margin-left: 108px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
      }
      &__city {
        width: 151px;
        margin-left: 97px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
      }
      &__line {
        background: #ddf8f0;
        width: 96.5%;
        height: 2px;
        margin: 5px 22px;
      }
    }
    .del-edit {
      display: none;
    }
    .col:hover {
      transition: all 0.3s ease-in-out;
      background: #ebebeb;
      border-radius: 8px;
      .del-edit {
        width: 108px;
        height: 53px;
        right: -107px;
        box-shadow: 4px 4px 15px 0px #00000014;
        position: absolute;
        display: flex;
        align-items: center;
        padding: 0 8px;
        gap: 10px;
        transition: all 0.5s ease-in-out;
        button {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #ddf8f0;
          border: 0;
          cursor: pointer;
        }
      }
    }
  }
  .tab-content {
    width: 100%;
    margin: 10px 0;
    .tab-text {
      font-family: Inter;
      font-size: 18px;
      font-weight: 500;
      line-height: 21.78px;
      cursor: pointer;
      &:hover {
        transition: all 0.5s ease-in-out;
        font-size: 20px;
      }
    }
  }
  .tab-lines {
    margin: 20px 0;
    border: 2px solid #ddf8f0;
  }

  .ant-pagination-next {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #ddf8f0;
    color: red;
  }

  .ant-pagination-prev {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #ddf8f0;
  }
  .anticon {
    color: #208667;
    font-size: 17px;
  }
  .ant-pagination-item {
    width: 48px;
    height: 48px;
    line-height: 48px;
    border: 1px solid #ddf8f0;
    border-radius: 50%;
    a {
      color: #000;
    }
  }
  .ant-pagination-item-active {
    border-radius: 6px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #208667;
  }
  :where(.css-dev-only-do-not-override-1ae8k9u).ant-pagination
    .ant-pagination-prev:hover
    .ant-pagination-item-link {
    background: none;
  }
  .ant-pagination-item .ant-pagination-item-1 .ant-pagination-item-active {
  }

  :where(.css-dev-only-do-not-override-1ae8k9u).ant-pagination
    .ant-pagination-next:hover
    .ant-pagination-item-link {
    background: none;
  }

  .paginate {
    display: flex;
    align-items: center;
    line-height: 48px;
    gap: 22px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .ant-select-selector ~ .ant-select-arrow {
    display: none;
  }
  .ant-select-selector {
    display: none;
  }
`;
