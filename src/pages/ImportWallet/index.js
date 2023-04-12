import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";
import { createWalletAction, checksumVaildateAction } from "../../store/slice/authSlice";
import { toast } from 'react-toastify';

const [SetPassword, EnteringWord] = [1, 2];

const ImportWallet = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [wordArray, setWordArray] = useState(Array(12).fill(''));
    const [mnemonicArray, setMnemonicArray] = useState([]);

    const nextStep = () => {
        setCurrentStep(currentStep >= EnteringWord ? EnteringWord : currentStep + 1);

        if (currentStep === EnteringWord) {
            dispatch(
                createWalletAction({
                    params: mnemonicArray,
                    password: password,
                    cb: (err, response) => {
                        if (err) {
                            console.log("err", err);
                        }
                        if (response) {
                            navigate(routes.dashboardPage);
                        }
                    }
                })
            )
        }
    }

    const importMnemonic = () => {
        let newMnemonic = wordArray.join(' ');
        let validated = checksumVaildateAction([newMnemonic]);
        if (validated.length > 0) {
            setMnemonicArray([...mnemonicArray, newMnemonic]);
            toast.success('Valid mnemonics', { autoClose: 1500 });
            setWordArray(Array(12).fill(''));
        } else {
            toast.error("Invalid mnemonics! Try other one.", { autoClose: 1500 })
        }
    }

    return (
        <section className="zl_login_section">
            <div className="zl_login_content container">
                <React.Fragment>
                    <SetPasswordStep password={password} setPassword={setPassword} setIsPasswordValid={setIsPasswordValid} currentStep={currentStep} />
                    <EnteringWordStep currentStep={currentStep} setWordArray={setWordArray} wordArray={wordArray} />
                </React.Fragment>

                <div className="zl_login_btn">
                    {<span className="err_text"></span>}
                    {currentStep === EnteringWord ? (
                        <button
                            className="mx-auto zl_login_btn_link"
                            onClick={importMnemonic}
                        >
                            Import
                        </button>
                    ) : ('')}

                    <button
                        className="mx-auto zl_login_btn_link"
                        onClick={nextStep}
                        disabled={((currentStep === SetPassword && isPasswordValid) || (currentStep === EnteringWord && mnemonicArray.length > 0)) ? false : true}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

const SetPasswordStep = (props) => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState('');

    const setPasswordHandler = (e) => {
        let password = e.target.value;
        let isPasswordValid = false;
        if (password.length >= 8) {
            if (password === confirmPassword)
                isPasswordValid = true;
            setPasswordValidation('');
        }
        else if (password.length === 0) setPasswordValidation('');
        else setPasswordValidation('Password not long enough');
        props.setPassword(password);
        props.setIsPasswordValid(isPasswordValid);
    }

    const setConfirmPasswordHandler = (e) => {
        let isPasswordValid = false;
        let confirmPassword = e.target.value;
        if (confirmPassword !== '' && confirmPassword !== props.password) {
            setConfirmPasswordValidation("Passwords don't match");
        } else {
            setConfirmPasswordValidation("");
        }
        if (props.password === confirmPassword && confirmPassword.length >= 8)
            isPasswordValid = true;
        props.setIsPasswordValid(isPasswordValid);
        setConfirmPassword(confirmPassword);
    }

    if (props.currentStep !== SetPassword) {
        return null;
    }

    return (
        <div>
            <h3>Create Password</h3>
            New password (8 characters min)
            <br />
            <input type="password" value={props.password} onChange={setPasswordHandler}></input>
            <br />
            <div>{passwordValidation}</div>
            Confirm password
            <br />
            <input type="password" value={confirmPassword} onChange={setConfirmPasswordHandler}></input>
            <div>{confirmPasswordValidation}</div>
        </div>
    );
}

const EnteringWordStep = (props) => {
    const inputChanged = (value, ind) => {
        let inputArray = value.split(' ');
        let wordArray = [...props.wordArray];
        for (let i = ind; i < 12; i++) {
            if (i === 11) {
                if (inputArray.length > 0)
                    wordArray[i] = inputArray.join(' ');
            } else {
                if (inputArray.length === 0) {
                    break;
                }
                wordArray[i] = inputArray[0];
                inputArray = inputArray.filter((value, index) => (index === 0 ? false : true));
            }
        }
        props.setWordArray(wordArray);
    }

    if (props.currentStep !== EnteringWord) {
        return null;
    }

    return (
        <div>
            <div className="zl_login_heading_text">
                <h3 className="zl_login_heading">Input the Number</h3>
                <p className="zl_login_peregraph">
                    Input the number you append what numbers of secret phrase in each slot.
                </p>
            </div>
            <div className="zl_login_row row">
                {props.wordArray.map((word, i) => (
                    <div className="zl_login_col_3 col-lg-3 col-md-6" key={i}>
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">{i + 1}</p>
                            <input
                                type="string"
                                className="zl_login_input"
                                placeholder="________"
                                value={word}
                                onChange={(e) => inputChanged(e.target.value, i)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImportWallet;
