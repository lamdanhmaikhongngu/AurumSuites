import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../assets/css/AppFooter.css";

const AppFooter = () => {
    return (
        <footer className="footer bg-gradient text-light pt-5 pb-3">
            <Container>
                <Row className="mb-4">
                    <Col md={4} className="mb-4">
                        <h4 className="fw-bold text-primary">Aurum Suites</h4>
                        <p className="small opacity-75">
                            Giải pháp quản lý tòa nhà hiện đại, tối ưu chi phí, nâng cao trải nghiệm cư dân.
                        </p>
                    </Col>

                    <Col md={4} className="mb-4">
                        <h5 className="fw-semibold mb-3">Liên kết nhanh</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><Link to="/" className="footer-link">Trang Chủ</Link></li>
                            <li><Link to="/about" className="footer-link">Giới Thiệu</Link></li>
                            <li><Link to="/contact" className="footer-link">Liên Hệ</Link></li>
                            <li><Link to="/faq" className="footer-link">Hỏi Đáp</Link></li>
                        </ul>
                    </Col>

                    <Col md={4} className="mb-4">
                        <h5 className="fw-semibold mb-3">Kết nối với chúng tôi</h5>
                        <p className="mb-1 small">support@aurumsuites.com</p>
                        <p className="small">+84 123 456 789</p>
                        <div className="d-flex gap-3 mt-2">
                            <a href="#" className="footer-social"><FaFacebookF /></a>
                            <a href="#" className="footer-social"><FaTwitter /></a>
                            <a href="#" className="footer-social"><FaInstagram /></a>
                            <a href="#" className="footer-social"><FaLinkedinIn /></a>
                        </div>
                    </Col>
                </Row>

                <hr className="border-light opacity-25" />

                <Row>
                    <Col className="text-center">
                        <p className="mb-0 small text-muted">
                            &copy; {new Date().getFullYear()} Aurum Suites. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default AppFooter;
