import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import { INews } from "../../types";
import NewsList from "../../components/news-list/NewsList";

const MainPage = () => {
  const [news, setNews] = useState<INews[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <Banner item={news.length > 0 ? news[1] : undefined} />
      <NewsList news={news} />
    </main>
  );
};

export default MainPage;
