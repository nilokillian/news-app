import { FC } from "react";
import styles from "./styles.module.css";

interface ISkeletonProps {
  type: "banner" | "item";
  count: number;
}

const Skeleton: FC<ISkeletonProps> = ({ count, type }) => {
  return (
    <ul className={styles.list}>
      {count === 1 ? (
        <li className={styles[type]} />
      ) : (
        <>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={styles[type]} />
          ))}
        </>
      )}
    </ul>
  );
};

export default Skeleton;
