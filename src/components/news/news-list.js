import React from "react";
import { NewsItem } from ".";
import { Spinners } from "../../commons";
import { useSelector } from "react-redux";

function NewsList() {
  const data_news = useSelector((state) => state.news);
  const isLoading = data_news.loading;
  const news = data_news.news;

  const List = news
    .slice(0, 24)
    .sort((a, b) => b.publishedDate - a.publishedDate)
    .map((item, index) => <NewsItem key={index} item={item} />);

  return <>{isLoading ? <Spinners /> : List}</>;
}

export default NewsList;
