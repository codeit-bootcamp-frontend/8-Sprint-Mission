import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "./Header.module.css";

export default function NavItem({ href, children }: { href: string, children: ReactNode }) {
  const router = useRouter();

  const isOnPath = (router.pathname === href) || (router.pathname.slice(0, href.length + 1) === (href + '/'));

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <li className={isOnPath ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        {children}
      </li>
    </Link>
  )
}