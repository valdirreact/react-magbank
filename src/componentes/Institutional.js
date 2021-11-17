import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
    faMobileAlt,
    faMobile,
    faGlobe,
    faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText";
import "./Institutional.scss";

const Institutional = () => (
    <section className="Institutional text-light py-5">

    <Container className="my-lg-3">
        <Row>
            <Col xs={12} lg={5} />
            <Col xs={12} lg={7} >
                <h2 className="display-4 py-5">Já nascemos digital</h2>
                <p className="mb-5">
                    O contexto pode ser explícito, quando é expresso por palavras (o texto em que se encontra a frase ou a frase em que se encontra a palavra), ou implícito, quando está embutido na situação em que o texto é produzido.Logo, a simples mudança de contexto faz com que a palavra “madeira” seja interpretada de maneiras diferentes. Na primeira situação, embora a palavra esteja dentro de um.</p>
                    <IconText icon={faMobileAlt} color="#fff" className="mb-2">
                        Sem fila e sem buracracia
                        </IconText>

                        <IconText icon={faMobile} color="#fff" className="mb-2">
                        Simples e prático
                        </IconText>

                        <IconText icon={faGlobe} color="#fff" className="mb-2">
                        Abertura de conta 100% online
                        </IconText>

                        <IconText icon={faShieldAlt} color="#fff" className="mb-2">
                        Transações mais seguras
                        </IconText>
                    <Button variables="outline-dark" className="mt-5">Abra sua conta</Button>
            </Col>
        </Row>
    </Container>
    </section>
);

export default Institutional;