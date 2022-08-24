import React, { useEffect, useState } from "react";
import { Alert, Button, ButtonGroup, Carousel } from "react-bootstrap";
import Axios from "axios";
import Loaders from "../Utilities/loaders";


const Collection = () => {
    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(3)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isCancelled = false
        if (isCancelled === false)
            Axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))

        return () => { isCancelled = true }
    }, [limit])

    const handlelimit = (option) => {
        option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
    }

    if (loading) return <Loaders />

    return (
        <section className="collection">
            <React.Fragment>
                <Alert variant={"info"}>
                Memperlihatkan API "{limit}" {limit > 1 && "photos"}{" "}
                {limit === 1 && "photo"}
                </Alert>
                <Carousel>
                    {datas.map((data, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <img
                                    className="d-block w-100"
                                    src={data.url}
                                    alt="First slide"
                                    height={450}
                                    width={450}
                                />
                                <Carousel.Caption>
                                    <h3>{data.title}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <ButtonGroup className="d-flex justify-content-center align-item-center mt-2">
                    <Button className="btn btn-primary" onClick={() => handlelimit("+")}>⁜ Add</Button>
                    {limit > 1 &&
                        <Button className="btn btn-danger" onClick={() => handlelimit("-")}>※ Remove</Button>
                    }
                </ButtonGroup>
            </React.Fragment>
        </section>
    )
}

export default Collection;