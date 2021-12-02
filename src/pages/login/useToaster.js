import { useState } from 'react';

const useToaster = (...messages) => {
  const [isToasterOpen, seIsToasterOpen] = useState(false);
  const [alertMessages, setAlertMessages] = useState([...messages]);

  const addToast = (...newMessages) => {
    setAlertMessages([...newMessages])
    seIsToasterOpen(true)
  }

  const handleCloseToaster = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    seIsToasterOpen(false);
  };

  return { isToasterOpen, handleCloseToaster, alertMessages, addToast };
}

export default useToaster;
