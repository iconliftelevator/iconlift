import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import HeaderThree from "../common/header/HeaderThree";

import FooterOne from "../common/footer/FooterOne";
import { useIconContext } from "../context/Context";

const Product = () => {
  const { slug } = useParams();
  const { fetchPageData, page, lang, productPath } = useIconContext();
  useEffect(() => {
    if (lang === "tr") {
      fetchPageData("urunler");
    } else if (lang === "en") {
      fetchPageData("products");
    }
  }, [lang, slug]);

  const productData = page?.filter(
    (modul) => modul?.modulName === "categories"
  )[0]?.data;

  return (
    <>
      <HeaderThree />
      <section className="blog-one-sec blog-one-sec--two blog-one-sec--two--blog">
        <div className="container">
          <div className="row">
            {productData?.map((e, index) => {
              return (
                <div
                  className="col-xl-4 col-lg-4 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                  key={index}
                >
                  <div className="blog-one__single">
                    <div className="blog-one__single-img">
                      <div className="inner">
                        <img src={e?.image} alt="" />
                      </div>
                      <div className="blog-one__single-content">
                        <div className="inner-content">
                          <h2>
                            <Link to={`/${productPath}/${e?.slug}`}>
                              {e?.title}
                            </Link>
                          </h2>
                          <div className="btn-box">
                            <Link
                              to={`/${productPath}/${e?.slug}`}
                              className="thm-btn"
                              data-text={e?.title}
                            >
                              {e?.title}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Start Blog One Single */}

            {/* End Blog One Single */}
          </div>
        </div>
      </section>
      <FooterOne />
    </>
  );
};

export default Product;
