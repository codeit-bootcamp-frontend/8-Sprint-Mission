import styles from "@/styles/Boards.module.css";
import BestArticles from "@/components/BestArticles";
import Articles from "@/components/Articles";
import useMediaWidth from "@/lib/hooks/useMediaWidth";
import Header from "@/components/Header";

export default function Boards() {
  const mediaWidth = useMediaWidth();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <BestArticles mediaWidth={mediaWidth} />
        <Articles mediaWidth={mediaWidth} />
      </main>
    </>
  )
}