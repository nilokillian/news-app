import { FC } from "react";
import styles from "./styles.module.css";

interface IImageProps {
  image: string;
}

const Image: FC<IImageProps> = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default Image;
