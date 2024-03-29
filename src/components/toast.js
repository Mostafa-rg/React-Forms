import { toast } from 'react-toastify';

const notify = (text, type) => {
    if(type === 'success'){
        toast.success(text)
    }else if(type === 'error'){
        toast.error(text)
    }
};

export default notify