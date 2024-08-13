import logoImg from '@/public/images/home/logoAndTypo.png';
import typoImg from '@/public/images/home/typo.png';
import Link from 'next/link';
import CustomImage from './CustomImage';
import { useRouter } from 'next/router';
import useWindowSize from '@/hooks/useWindowSize';
import {
  PATH_ADD_ITEM,
  PATH_BOARDS,
  PATH_HOME,
  PATH_ITEMS,
} from '@/constants/paths';
import classNames from 'classnames';
import styles from './HeaderLinkSection.module.scss';
import { DEVICE_MAX_WIDTH } from '@/constants/mediaQuerySize';

function HeaderLinkSection() {
  const { innerWidth } = useWindowSize();
  const { pathname } = useRouter();
  const needLinkHeaderPaths = [PATH_BOARDS, PATH_ITEMS, PATH_ADD_ITEM];
  const isWiderMobileSize = innerWidth > DEVICE_MAX_WIDTH.mobile;

  return (
    <section className={classNames(styles.linkSection)}>
      <Link href={PATH_HOME}>
        <CustomImage
          src={isWiderMobileSize ? logoImg : typoImg}
          alt={'로고 이미지'}
          height={isWiderMobileSize ? 51 : 40}
          width={isWiderMobileSize ? 153 : 81}
          priority={true}
        />
      </Link>
      {/* 링크가 필요한 페이지에서만 링크들이 나타나도록 */}
      {needLinkHeaderPaths.includes(pathname) && (
        <section>
          <Link
            href={PATH_BOARDS}
            className={classNames(styles.link, {
              [styles.matched]: PATH_BOARDS === pathname,
            })}
          >
            자유게시판
          </Link>
          <Link
            href={`${PATH_ITEMS}?page=1`}
            className={classNames(styles.link, {
              [styles.matched]: [PATH_ITEMS, PATH_ADD_ITEM].includes(pathname),
            })}
          >
            중고마켓
          </Link>
        </section>
      )}
    </section>
  );
}

export default HeaderLinkSection;
