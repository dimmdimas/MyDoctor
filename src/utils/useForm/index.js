import {useState} from 'react';

export const useForm = initialValue => {
  const [value, setValue] = useState (initialValue);
  return [
    value,
    params => {
      return setValue ({...value, fullName: params});
    },
  ];
};
