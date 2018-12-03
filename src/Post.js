import React, { Fragment } from "react";
import PostHeader from "./PostHeader";
const Post = props => (
    <>
        <div className="container">
            <div className="conteudo">
                <PostHeader nome={props.nome} time={props.time} />
                <p>{props.conteudo}</p>
            </div>
        </div>
    </>
);
export default Post;
