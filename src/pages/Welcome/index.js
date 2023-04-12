import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";

const Welcome = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();
  const _next = () => {
    setCurrentStep(currentStep >= 1 ? 2 : currentStep + 1);
    if (currentStep === 2) {
      navigate(routes.signupPage);
    }
  };

  // const _prev = () => {
  //   setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1);
  // };

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          className="zl_welcome_slide_step_btns"
          type="button"
          onClick={() => _next()}
        >
          Next
        </button>
      );
    }
    return null;
  };

  return (
    <section className="zl_welcome_slide_section">
      <div className="zl_welcome_slide_content container">
        <h2 className="zl_welcome_slide_heading">Welcome to crypto</h2>
        <p className="zl_welcome_slide_peregraph">
          DE-Crypto Wallet is a Crypto currency wallet based webapp.
        </p>
        {/* <img
          src="assets/image/welcome-round-shap1.svg"
          alt="round-shap"
          className="round_shap_img_one"
        />
        <img
          src="assets/image/welcome-round-shap2.svg"
          alt="round-shap"
          className="round_shap_img_two"
        />
        <img
          src="assets/image/light-welcome-round-shap1.png"
          alt="round-shap"
          className="round_shap_light_img_one"
        />
        <img
          src="assets/image/light-welcome-round-shap2.png"
          alt="round-shap"
          className="round_shap_light_img_two"
        /> */}
        <React.Fragment>
          {/*render the form steps and pass required props in*/}
          <Step1 currentStep={currentStep} />
          <Step2 currentStep={currentStep} />
          {/* {previousButton()} */}
          <ul className="zl_welcome_slide_indicator">
            <li
              className="zl_welcome_slide_indicator_items"
              title={currentStep}
            ></li>
            <li
              className="zl_welcome_slide_indicator_items"
              title={currentStep}
            ></li>
          </ul>

          {nextButton()}
        </React.Fragment>
      </div>
    </section>
  );
};

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="zl_welcome_slide_img">
      <img
        src="assets/image/welcome-slider1.png"
        alt="wizard-img"
        className="img-fluid zl_dark_theme_slide_img"
      />
      <img
        src="assets/image/light-welcome-slider1.png"
        alt="wizard-img"
        className="img-fluid zl_light_theme_slide_img"
      />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="zl_welcome_slide_img">
      <img
        src="assets/image/welcome-slider2.png"
        alt="wizard-img"
        className="img-fluid zl_dark_theme_slide_img"
      />
      <img
        src="assets/image/light-welcome-slider2.png"
        alt="wizard-img"
        className="img-fluid zl_light_theme_slide_img"
      />
    </div>
  );
}

export default Welcome;
