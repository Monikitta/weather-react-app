import { useEffect } from 'react';

const useBodyBlur = (isBlurred) => {
  useEffect(() => {
    if (isBlurred) {
      document.body.classList.add('blurred');
    } else {
      document.body.classList.remove('blurred');
    }
  }, [isBlurred]);
};

export default useBodyBlur;