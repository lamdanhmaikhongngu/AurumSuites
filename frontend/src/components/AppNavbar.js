import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    Navbar,
    Nav,
    Container,
    Button,
    Dropdown,
    Image,
} from "react-bootstrap";
import avatarImage from "../assets/images/avatar/avatar.jpg";
import { logoutUser } from "../redux/authSlice";
import "../assets/css/AppNavbar.css";

const AppNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const backendUrl = "http://localhost:5000";
    const avatarUrl = user?.images?.[0]?.url
        ? `${backendUrl}${user.images[0].url}`
        : avatarImage;

    const isAuthenticated = user !== null;
    const userRole = user?.role || "Guest";

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/");
    };

    return (
<Navbar expand="lg" className="custom-navbar fixed-top">
    <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
            🏛️ Aurum Suites
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home" active={location.pathname === "/home"}>
                    Trang Chủ
                </Nav.Link>
                <Nav.Link as={Link} to="/find" active={location.pathname === "/find"}>
                    Căn Hộ
                </Nav.Link>
                {userRole === "User" && (
                    <>
                        <Nav.Link as={Link} to="/view-payment">Thanh Toán</Nav.Link>
                        <Nav.Link as={Link} to="/profile/transactions">Giao Dịch</Nav.Link>
                        <Nav.Link as={Link} to="/myapartment">Dịch Vụ</Nav.Link>
                    </>
                )}
                {userRole === "Manager" && (
                    <Nav.Link as={Link} to="/admin">Thống Kê</Nav.Link>
                )}
            </Nav>

            <Nav className="align-items-center gap-2">
                {isAuthenticated ? (
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="white" id="user-dropdown" className="user-dropdown">
                            <Image src={avatarUrl} roundedCircle width="36" height="36" className="avatar-img me-2" />
                            <span className="user-name">{user?.name}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/profile">Hồ Sơ</Dropdown.Item>
                            {userRole === "Manager" && (
                                <Dropdown.Item as={Link} to="/admin">Quản lý</Dropdown.Item>
                            )}
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleLogout}>Đăng Xuất</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <>
                        <Button variant="dark" as={Link} to="/login">Đăng Nhập</Button>
                        <Button variant="dark" as={Link} to="/register">Đăng Ký</Button>
                    </>
                )}
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    );
};

export default AppNavbar;
