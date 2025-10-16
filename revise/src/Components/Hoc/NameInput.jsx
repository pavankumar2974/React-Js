import React from "react";
import WithInputTracker from "./WithInputTracker";

function NameInput({ text, handleChange }) {
    return (
        <div style={{ margin: "20px", textAlign: "center" }}>
            <h3>Enter Your Name:</h3>
            <input type="text" placeholder="Type Your Name" value={text} onChange={handleChange} />
            <p>Length:{text.length}</p>
        </div>
    );
}
export default WithInputTracker(NameInput);
