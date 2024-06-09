import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import { INews } from "../../types";
import NewsList from "../../components/news-list/NewsList";
import Skeleton from "../../components/skeleton/Skeleton";

const MainPage = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getNews();
        setNews(response.news);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <Skeleton count={1} type="banner" />
      ) : (
        <Banner item={news.length > 0 ? news[1] : undefined} />
      )}
      {loading ? <Skeleton count={10} type="item" /> : <NewsList news={news} />}
    </main>
  );
};

export default MainPage;
