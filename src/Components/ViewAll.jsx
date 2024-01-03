import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {
  const [newsData, changeNewsData] = useState({
    status: "ok",
    totalResults: 38,
    articles: [],
  });

  const fetchData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=cb46f6973d234eb99778e9509755c224"
      )
      .then((response) => {
        changeNewsData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {newsData.articles.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex allign-items-stretch">
                    <div class="card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src={value.urlToImage}
                            class="img-fluid rounded-start"
                            alt="image"
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">{value.title}</h5>
                            <p class="card-text">{value.description}</p>
                            <p class="card-text">
                              <small class="text-body-secondary">
                                Last updated at {value.publishedAt}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
