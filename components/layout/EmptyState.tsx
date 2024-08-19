import s from './EmptyState.module.scss';

type emptyState = {
  text: string;
};

function EmptyState({ text }: emptyState) {
  return (
    <div className={s.wrap}>
      <p>{text}</p>
    </div>
  );
}

export default EmptyState;
