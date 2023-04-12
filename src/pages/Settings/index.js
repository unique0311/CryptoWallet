import React, { useEffect, useState } from "react";
import HeadingModule from "../../component/Layout/Header";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { routes } from "../../constants";

const Setting = ({ themHandler }) => {
  const [color, setColor] = useState(true);

  const curVal = localStorage.getItem("currency");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setColor(
        localStorage.getItem("themColor") === "zl_light_theme_active"
          ? false
          : localStorage.getItem("themColor") !== null && true
      );
    }
  }, []);

  return (
    <>
      <section className="zl_settings_page">
        <HeadingModule name={"Settings"} />
        <div className="zl_setting_list">
          {/* <div className="zl_setting_list_items">
            <div className="zl_setting_items_heading_peregraph">
              <h3>Notification</h3>
              <p>Show a notification when funds are received</p>
            </div>
            <Form.Check
              type="switch"
              id="checkbox1"
              label=""
              className="zl_custom_currency_checkbox"
              defaultChecked
            />
          </div> */}
          <Link to={routes.currencyPage} className="zl_setting_list_items">
            <div className="zl_setting_items_heading_peregraph">
              <h3>Currency</h3>
              <p>Set your preferred local currency.</p>
            </div>
            <div className="zl_setting_items_right_text">
              <h3>{curVal?.toUpperCase()}</h3>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6.08833 6L1 11"
                  stroke="#828CAE"
                  strokeWidth="2.4"
                />
              </svg>
            </div>
          </Link>
          <Link to={routes.addWalletPage} className="zl_setting_list_items">
            <div className="zl_setting_items_heading_peregraph">
              <h3>Add Wallet</h3>
              <p>
                Add your current wallet using a 12-word recovery
                pharse.
              </p>
            </div>
            <div className="zl_setting_items_right_text">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6.08833 6L1 11"
                  stroke="#828CAE"
                  strokeWidth="2.4"
                />
              </svg>
            </div>
          </Link>
          <div className="zl_setting_list_items">
            <div className="zl_setting_items_heading_peregraph">
              <h3>Change Theme Mode</h3>
              <p>Change the default color theme to light mode.</p>
            </div>
            <Form.Check
              type="switch"
              id="checkbox2"
              label=""
              className="zl_custom_currency_checkbox custom-switch"
              checked={!color}
              onChange={() => {
                setColor(!color);
                themHandler(color);
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
