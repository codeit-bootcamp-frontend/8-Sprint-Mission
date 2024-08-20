import Link from "next/link";
import NAVIGATION_LIST from "@/utils/NAVIGATION_LIST";
import styles from "./NavList.module.css";

export default function NavList() {
  return (
    <div className={styles.navList}>
      <ul>
        {NAVIGATION_LIST.map((list) => (
          <li key={list.name}>
            <Link href={list.path}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
