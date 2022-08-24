import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";


const ModalPost = ({ children, activator }) => {
    const [show, setShow] = useState(false);

    const content = show && (
        <div>
            <div className="overlay">
                <div>
                    <div className="modal-body">
                        {children}
                        <hr />
                        <button className="btn btn-outline-danger" type="button" onClick={() => setShow(false)}>⨉</button>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <React.Fragment>
            {activator({ setShow })}
            {createPortal(
                <CSSTransition
                    in={show}
                    timeout={200}
                    classNames="modal-transition"
                    unmountOnExit >
                    {() => <div>{content}</div>}
                </CSSTransition>, document.body
            )}
        </React.Fragment>
    )
}

export default ModalPost;