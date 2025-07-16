import { Carousel } from "react-bootstrap";
import banner1 from "../assets/images/banner/banner1.jpg";
import banner2 from "../assets/images/banner/banner2.jpg";
import banner3 from "../assets/images/banner/banner3.jpg";
import "../assets/css/Banner.css"
import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/find");
    }

    return (
        <>
            <Carousel fade className="position-relative" controls={false} indicators={false}>
                <Carousel.Item>
    <div className="carousel-image position-relative">
        <img
            className="d-block w-100"
            src={banner1}
            alt="Luxury Apartment 1"
            style={{ height: "100vh", objectFit: "cover" }}
        />
        <div className="carousel-overlay"></div>
    </div>
    <Carousel.Caption className="carousel-text">
        <h3>Khởi Đầu Đẳng Cấp Sống Trọn Khoảnh Khắc</h3>
        <p>Không gian sống hiện đại giữa trung tâm thành phố năng động</p>
    </Carousel.Caption>
</Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-image">
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Luxury Apartment 2"
                            style={{ height: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <div className="carousel-overlay"></div>
                    <Carousel.Caption className="carousel-text" style={{ top: "30%" }}>
                        <h3>Kiến Tạo Tương Lai  Gắn Kết Cộng Đồng</h3>
                          <p>Căn hộ thông minh, tiện nghi vượt trội cho mọi thế hệ</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Luxury Apartment 3"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <Carousel.Caption className="carousel-text" style={{ top: "30%" }}>
                        <h3>Phong Cách Hiện Đại</h3>
                        <p>
                            Thiết kế đẳng cấp, tiện nghi hoàn hảo
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="search-container z-1 bg-white">
                <input type="text" className="search-input" placeholder="Tìm kiếm căn hộ..." value={searchText} onChange={(e) => setSearchText(e.target.value)} required />
                <button className="search-btn" onClick={handleSearch}>
                    <Search />
                </button>
            </div>
        </>
    );
};

export default Banner;
