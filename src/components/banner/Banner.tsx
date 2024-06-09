import { FC } from "react";
import Image from "../image/Image";
import { formatTimeAgo } from "../../utils/formatTimeAgo";
import styles from "./styles.module.css";
import { INews } from "../../types";

interface IBannerProps {
  item: INews | undefined;
}

const Banner: FC<IBannerProps> = ({ item }) => {
  if (!item) return null;
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default Banner;
