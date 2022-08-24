import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loaders from "../Utilities/loaders";
import { Alert, Card } from "react-bootstrap";
import ModalPost from "../Utilities/modals";

const Contents = () => {
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(3);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isCancelled = false;
        if (isCancelled === false) {
            setLoading(true);
            Axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false));
        }

        return () => {
            isCancelled = true;
        };
    }, [limit]);

    const handleLimit = (option) => {
        option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
    };

    if (loading) return <Loaders />

    return (
        <React.Fragment>
            <Alert variant={"info"}>
                Currently showing "{limit}" {limit > 1 && "posts"}{" "}
                {limit === 1 && "post"}
            </Alert>
            <div className="d-flex flex-column justify-content-center align-items-center">
                {datas.map((data, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Card style={{ width: "22rem", border: "none" }}>
                                <Card.Body>
                                    <ModalPost activator={({ setShow }) => (
                                        <button className="btn btn-outline-primary text-truncate w-100" type="button" onClick={() => setShow(true)}>
                                            {data.title}
                                        </button>
                                    )}>
                                        <h3>Post ID: {data.id}</h3>
                                        <strong>User ID</strong>: {data.userId}
                                        <hr />
                                        <p>
                                            <strong>Title</strong>: {data.title}
                                            <br />
                                            <br />
                                            <strong>Description</strong>: {data.body}
                                        </p>
                                    </ModalPost>
                                </Card.Body>
                            </Card>
                        </React.Fragment>
                    )
                })}
                <div className="mt-2 mx-3">
                    <button className="btn btn-primary me-2" onClick={() => handleLimit("+")}>
                        Add Items
                    </button>
                    {limit > 1 && (<button className="btn btn-danger" onClick={() => handleLimit("-")}>Remove Items</button>)}
                </div>
            </div>
        </React.Fragment>
    )
}


export default Contents;