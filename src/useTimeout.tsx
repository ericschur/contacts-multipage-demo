import React from 'react';

const useTimeout = (callback: () => void, interval: number) => {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      callbackRef.current && callbackRef.current();
    }, interval);
    return () => {
      clearTimeout(timeoutHandle);
    }
  }, [interval]);

  return null;
};

export default useTimeout;
