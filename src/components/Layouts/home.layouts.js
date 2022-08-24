import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "animate.css";


const HomeLayouts = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250 - Math.random() * 90);
    const [index, setIndex] = useState(1);
    const toRotate = ["Salam Kenal", "Nama Saya", "PuguhPutra"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="home">
            <Container>
                <Row>
                    <Col>
                        <div className="animate_animated animate_fadeIn">
                            <p className="tagline mt-4">Welcome Tugas Cuy</p>
                            <h1 className="mt-2">{`Halo Bree`}</h1>
                            <h2 className="txt.rotate" data-rotate='[ "Salam Kenal", "Nama Saya", "PuguhPutra" ]'><span className="wrap">{text}</span></h2>
                            <p className="mt-4"> Tugas Cuy dibuat untuk menyelesaikan Quest dari Course DeaAfrizal. Mohon Kritik dan Saran Teman-teman sekalian yang mampir. <br /> Terima Kasih</p>
                            <Card>
                                <Card.Body className="card">Tugas Cuy Berisi
                                    <br/>
                                    <br /> 1. Routing URL POST dengan isian component dari API POST diatas (dengan data title saja) ✔
                                    <br /> 2. Modif UI HOMEPAGE ✔
                                    <br /> 3. Validasi Active Navigation Bar ✔
                                    <br /> 4. Ketika POST Title di klik, munculkan modal popup deskripsi detail dari api tersebut (deskripsi) ✔
                                    <br /> 5. Kreatifitas ✔
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeLayouts;