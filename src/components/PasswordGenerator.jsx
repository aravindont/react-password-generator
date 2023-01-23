import { useState } from "react";
export const PasswordGenerator = () => {
  const [state, setState] = useState({
    generatedPassword: "",
    passwordLength: 20,
    symbols: false,
    numbers: false,
    lower: false,
    upper: false,
  });
  const updateInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const updateCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <>
      <pre>{JSON.stringify(state)}</pre>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-header bg-warning">
                <p className="h4">Password Generator</p>
              </div>
              <div className="card-body bg-warning">
                <form>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">Password</span>
                      <input
                        type="text"
                        value={state.generatedPassword}
                        name="generatedPassword"
                        className="form-control"
                        placeholder="Generated Password"
                      />
                      <span className="input-group-text">
                        <i className="fa fa-clipboard" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <input
                        required={true}
                        value={state.passwordLength}
                        name="passwordLength"
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="password length"
                      />
                      <span className="input-group-text">Password Length</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">
                        <input
                          onChange={updateCheck}
                          name="symbols"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        disabled={true}
                        className="form-control"
                        placeholder="Symbols"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">
                        <input
                          onChange={updateCheck}
                          name="numbers"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        disabled={true}
                        className="form-control"
                        placeholder="Numbers"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">
                        <input
                          onChange={updateCheck}
                          name="lower"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        disabled={true}
                        className="form-control"
                        placeholder="Lowercase Letters"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="input-group">
                      <span className="input-group-text">
                        <input
                          onChange={updateCheck}
                          name="upper"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        disabled={true}
                        className="form-control"
                        placeholder="Uppercase Letters"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      value="Generate"
                      className="btn btn-outline-dark"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
