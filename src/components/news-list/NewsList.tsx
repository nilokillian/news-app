import { FC } from "react";
import styles from "./styles.module.css";
import { INews } from "../../types";
import NewsItem from "../news-item/NewsItem";

interface INewsListProps {
  news: INews[];
}

const NewsList: FC<INewsListProps> = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
