import { getDataTop, getDataColumnList } from '@/services/columnApi';

const useColumn = () => {
  const dataTop = getDataTop()

  const dataColumn = getDataColumnList()

  return {
    dataTop,
    dataColumn
  };
};

export default useColumn;
