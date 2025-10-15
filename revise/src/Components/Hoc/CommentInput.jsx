import React from "react";
import WithInputTracker from "./WithInputTracker";

function CommentInput({text,handleChange}){
    return (
        <div style={{margin:"20px",textAlign:"Center"}}>
            <><h3>Leave a Comment:</h3><textarea rows={4} cols={30} placeholder="Write Your Comment"
                value={text} onChange={handleChange} /></>
                <p>Character Count:{text.length}</p>
        </div>
    );
}
export default WithInputTracker(CommentInput);