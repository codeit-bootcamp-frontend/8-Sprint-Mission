import AddBoardForm from '@components/board/AddBoardForm/AddBoardForm';
import BasicLayout from '@components/layout/BasicLayout/BasicLayout';

type AddBoardPageProps = {};

const AddBoardPage = ({}: AddBoardPageProps) => {
  return (
    <>
      <BasicLayout>
        <AddBoardForm />
      </BasicLayout>
    </>
  );
};

export default AddBoardPage;
