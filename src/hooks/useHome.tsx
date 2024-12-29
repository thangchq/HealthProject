import { getDataMeal, getDataMenu } from '@/services/homeApi';

const useHome = () => {
  const dataMenu = getDataMenu()
  const dataMeal = getDataMeal()

  return {
    dataMenu,
    dataMeal
  };
};

export default useHome;
