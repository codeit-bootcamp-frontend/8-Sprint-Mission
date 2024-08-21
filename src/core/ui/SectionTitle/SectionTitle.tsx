import { BasicType } from '@type/BasicTypes';
import styles from './SectionTitle.module.scss';

type SectionTitleProps = Pick<BasicType, 'title'>;

const SectionTitle = ({ ...props }: SectionTitleProps) => {
  return (
    <>
      <div className={styles['title']}>{props.title}</div>
    </>
  );
};

export default SectionTitle;
