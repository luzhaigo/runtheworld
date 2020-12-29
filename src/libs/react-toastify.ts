import { toast, ToastOptions } from 'react-toastify';

export * from 'react-toastify';
export const errToast = (mgs: string, options?: ToastOptions) => {
  toast.error(mgs, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...options,
  });
};
