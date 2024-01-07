import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const { Title } = Typography;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  if (!cryptoNews?.data) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.data.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news.thumbnail || demoImage}
                  alt="news"
                />
              </div>
              <p>{news.description}</p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
