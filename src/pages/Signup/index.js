import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";

const Signup = () => {
    const navigate = useNavigate();

    const createWalletHandler = () => {
        navigate(routes.createWalletPage);
    }

    const importWalletHandler = () => {
        navigate(routes.importWalletPage);
    }

    return (
        <section className="zl_welcome_slide_section">
            <div className="zl_welcome_slide_content container">
                <h2 className="zl_welcome_slide_heading">Welcome to crypto</h2>
                <p className="zl_welcome_slide_peregraph">
                    DE-Crypto Wallet is a Crypto currency wallet based webapp.
                </p>
                <div className="select-action__select-buttons">
                    <div className="select-action__select-button">
                        <div className="select-action__button-content">
                            <div className="select-action__button-symbol">
                                <i className="fa fa-plus fa-2x"></i>
                            </div>
                            <div className="select-action__button-text-big">Yes, let’s get set up!</div>
                            <div className="select-action__button-text-small">This will create a new wallet and Secret Recovery </div>
                            <button className="button btn--rounded btn-primary first-time-flow__button" role="button" tabIndex="0" onClick={() => createWalletHandler()}>Create a Wallet</button>
                        </div>
                    </div>
                    <div className="select-action__select-button">
                        <div className="select-action__button-content">
                            <div className="select-action__button-symbol">
                                <i className="fa fa-download fa-2x"></i>
                            </div>
                            <div className="select-action__button-text-big">I already have a Secret Recovery Phrase</div>
                            <div className="select-action__button-text-small">Import your existing wallet using a Secret Recovery Phrase</div>
                            <button className="button btn--rounded btn-primary first-time-flow__button" role="button" tabIndex="0" onClick={() => importWalletHandler()}>Import wallet</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;