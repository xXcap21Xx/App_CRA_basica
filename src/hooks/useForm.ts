import { useState } from 'react';

type FormState<T> = {
    values: T;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    resetForm: () => void;
};

export const useForm = <T extends Record<string, any>>(initialValues: T): FormState<T> => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return { values, handleChange, resetForm };
};
