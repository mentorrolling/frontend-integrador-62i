import React from "react";

const MessageAlertApp = ({ message }) => {
  return (
    <div className="row mt-3">
      <div className="col">
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setLoginUser(null)}
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default MessageAlertApp;
