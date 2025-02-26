import { useState } from "react";

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return { values, handleChange };
};
