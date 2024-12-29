import { getDataDiary, getDataExercise, getDataList } from '@/services/recordApi';

const useColumn = () => {
  const dataDiary= getDataDiary()
  const dataExercise = getDataExercise()
  const dataList = getDataList()

  return {
    dataExercise,
    dataDiary,
    dataList
  };
};

export default useColumn;
