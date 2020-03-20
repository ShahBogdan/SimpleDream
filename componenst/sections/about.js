import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
    return (

        <Row className="about">
            <Col sm={12} md={6} className="aboutText border">
                <div className="one">
                    <span>
                        <h3>Основные достоинства сатина:</h3>
                    </span>
                </div>
                <ul>
                    <li>Ткань гигиенична, хорошо поглощает влагу. Тело человека под такой тканью «дышит».</li>
                    <li>Невысокая теплопроводность позволяет летом в одежде из сатина не перегреваться. Зимой сатиновое полотно сохраняет приятную физиологическую температуру тела.</li>
                    <li>Материя легкая, мягкая, воздушная, создает чувство комфорта.</li>
                    <li>Прочность ткани позволяет ее многократно стирать. Только на четвертой сотне стирок глянец может начать исчезать.</li>
                    <li>Материя не мнется, образует естественные драпированные складки.</li>
                    <li>Сатиновое полотно из натуральных волокон экологично, не вызывает аллергических реакций.</li>
                </ul>

                <p>
                    Про недостатки сатина что-либо сказать сложно, т.к. явных минусов нет. Некоторым потребителям не нравятся скользящие свойства материи. В шелковой пижаме на сатиновой простыне, возможно, спать не очень комфортно. В таком случае стоит сменить пижаму или выбрать другое постельное белье.
                    Располагая информацией обо всех видах, типах, особенностях материалов, можно выбрать максимально подходящий вариант. Сатиновые ткани окружают человека на протяжении многих веков. Это вызывает доверие.
            </p>
            </Col>
            <Col sm={12} md={6}>
                <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
            </Col>

        </Row>







    )
}

export default About;