import { useSelector } from 'react-redux';

import {
  selectNeededCaloriesForDesiredWeight,
  selectIsLoading,
  selectModalIsOpen,
  selectNeededCalories,
  selectIsError,
  selectNonRecCategories,
} from '../features/dailyCalories/selectors.js';

export const useDailyCalories = () => {
  const neededCaloriesForDesiredWeight = useSelector(
    selectNeededCaloriesForDesiredWeight
  );
  const isLoading = useSelector(selectIsLoading);
  const modalIsOpen = useSelector(selectModalIsOpen);
  const neededCalories = useSelector(selectNeededCalories);
  const isError = useSelector(selectIsError);
  const nonRecCategories = useSelector(selectNonRecCategories);

  return {
    neededCalories,
    neededCaloriesForDesiredWeight,
    isLoading,
    modalIsOpen,
    isError,
    nonRecCategories,
  };
};
