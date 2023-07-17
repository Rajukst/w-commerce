import React from "react";
import { Container} from "react-bootstrap";
import "./ProductCarosul.css";
import Slider from "react-slick";
import { useProductsQuery } from "../../../redux/allFeatures/products/productApi";
import { Link } from "react-router-dom";

const ProductCarosul = () => {
  const { data: products, isLoading } = useProductsQuery() || {};

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="headCar">
    <Container className="productCarosul">
      <div>
        <h6 className="pt-5">— New Collection</h6>
        <h1>Best Seller</h1>
        <Slider {...settings}>
          {products?.map((getProduct) => (
            <div className="imagBodyssss">
              <div className="headingsssss">
                <Link className="titleLink" to={`/products/${getProduct?._id}`}>
                  <img
                    className="img-fluid homeImage"
                    src={getProduct?.image}
                    alt="dynamic-image"
                  />
                </Link>
              </div>
              <div className="text">
                <h6>{getProduct?.title}</h6>
              </div>
              <div className="hoversBody">
                <div className="TextBody">
                  <div className="priceOne">
                    <p>Tk {getProduct?.salePrice}</p>
                  </div>
                  <div className="priceOne">
                    <p className="priceOnes">Tk {getProduct?.regularPrice}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
    </div>
  );
};

export default ProductCarosul;
