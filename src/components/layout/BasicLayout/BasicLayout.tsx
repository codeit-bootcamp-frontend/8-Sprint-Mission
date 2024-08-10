import { BasicType } from '@/src/types/BasicTypes';
import styles from './BasicLayout.module.scss';

type BasicLayout = Partial<Pick<BasicType, 'children'>>;

const BasicLayout = ({ children }: BasicLayout) => {
  return (
    <>
      <div className={styles['container']}>{children}</div>
    </>
  );
};

export default BasicLayout;
