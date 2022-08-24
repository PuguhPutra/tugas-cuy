import { Spinner } from "react-bootstrap";

const Loaders = () => {
    return (
        <div>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
        </div>
    )
}

export default Loaders;