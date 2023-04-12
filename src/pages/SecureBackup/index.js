import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeadingModule from "../../component/Layout/Header";

const SecureBackup = () => {
  const inputField = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const currentAccount = useSelector(state => state.auth.currentAccount);
  const recWords = JSON.parse(localStorage.getItem("mnemonics"))[currentAccount].split(" ");

  const [value, setValue] = useState([]);
  const [recState, setRecState] = useState(false);

  useEffect(() => {
    setValue(recWords);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAccount]);

  return (
    <section className="zl_securebackup_page">
      <HeadingModule name={"Secure Backup"} />
      <div className="zl_SecureBackup_heading">
        <h3>recovery words</h3>
      </div>
      <div className="zl_securebackup_row row">
        {inputField.map((inputValue, i) => (
          <div
            className="zl_securebackup_col_3 col-lg-3 col-md-6"
            key={inputValue}
          >
            <div className="zl_securebackup_input_content position-relative">
              <p className="zl_securebackup_input_text">{inputValue}</p>
              <input
                type="text"
                className="zl_securebackup_input"
                name={`input${inputValue}`}
                placeholder="_____"
                defaultValue={value && recState ? value[i] : ""}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="zl_securebackup_btn">
        {!recState ? (
          <Link
            to={"#"}
            onClick={() => {
              setValue(recWords);
              setRecState(true);
            }}
            className="mx-auto"
          >
            Show
          </Link>
        ) : (
          <Link
            to={"#"}
            onClick={() => {
              setValue("");
              setRecState(false);
            }}
            className="mx-auto"
          >
            Hide
          </Link>
        )}
      </div>
    </section>
  );
};

export default SecureBackup;
