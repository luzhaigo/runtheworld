import { toast as originalToast, ToastOptions } from 'react-toastify';

export * from 'react-toastify';
export const errToast = (mgs: string, options?: ToastOptions) => {
  originalToast.error(mgs, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...options,
  });
};

export const toast = (mgs: string, options?: ToastOptions) => {
  originalToast(mgs, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...options,
  });
};
