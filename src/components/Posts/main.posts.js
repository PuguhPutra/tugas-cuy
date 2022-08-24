import React from "react";
import { Container } from "react-bootstrap";
import Contents from "./contents.posts";

const Posts = (propps) => {
    const  {title, description} = propps

    return (
        <React.Fragment>
            <Container className="mt-2">
                <h1>{title}</h1>
                <i>{description}</i>
                <Contents />
            </Container>
        </React.Fragment>
    )
}

export default Posts;