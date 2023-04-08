import Navigation from "@/components/navbar";
import { useState } from "react";

export default function Start() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [explanationLevel, setExplanationLevel] = useState("");

  const codeChangeHandler = (e: any) => {
    e.preventDefault();
    setCode(e.target.value);
  };

  const explanationChangeHandler = (e: any) => {
    e.preventDefault();
    setExplanationLevel(e.target.value);
  };

  const submitCode = (e: any) => {
    e.preventDefault();

    let explanationParam = "standard";

    if (explanationLevel === "simple") {
      explanationParam = "easy";
    } else {
      explanationParam = "standard";
    }

    (async () => {
      const res = await fetch(
        `http://localhost:3000/api/analyze?code=${code}&explanation=${explanationParam}`
      );

      const data = await res.json();

      setCode((prev) => {
        setFormattedCode(prev);
        return "";
      });

      setExplanation(data.explanation);
    })();
  };

  return (
    <div className="container-fluid">
      <Navigation />

      <div className="row mt-5">
        <div className="col">
          <form>
            <div className="mb-3">
              <h3 htmlFor="exampleFormControlTextarea1" className="form-label">
                Paste your code here!
              </h3>

              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                onChange={codeChangeHandler}
                value={code}
              />
            </div>

            <h5 className={"mt-4"}>Choose your explanation complexity</h5>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={"simple"}
                onChange={explanationChangeHandler}
                checked={explanationLevel === "simple"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Simple
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={explanationChangeHandler}
                value={"in-depth"}
                checked={explanationLevel === "in-depth"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                In-Depth
              </label>
            </div>

            <button type={"submit"} onClick={submitCode} className={"mt-3"}>
              Submit Code
            </button>
          </form>
        </div>
      </div>

      <div className={"row mt-5"}>
        <div className={"col"}>
          <h1>Code Input</h1>
          <pre>
            <code>{formattedCode}</code>
          </pre>
        </div>
      </div>

      <div className={"row mt-5"}>
        <div className={"col"}>
          <h1>Code Analysis</h1>
          <h6>Explanation Level: {explanationLevel}</h6>
          <p>{explanation}</p>
        </div>
      </div>

      <footer className={"container mt-5"}>
        <div className={"text-center"}>
          <p>
            <i>ExplainThis</i> is a project by Deyby, Vadim & Tahir
          </p>
        </div>
      </footer>
    </div>
  );
}
