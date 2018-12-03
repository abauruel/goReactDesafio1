import React from "react";

const PostHeader = props => (
    <>
        <div className="profile">
            <div className="avatar">
                <img src="" alt="Avatar" />
            </div>
            <div className="provider">
                {props.nome} <br />
                {props.time}
            </div>
        </div>
    </>
);

export default PostHeader;
