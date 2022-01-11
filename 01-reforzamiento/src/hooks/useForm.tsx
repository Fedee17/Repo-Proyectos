import { useState } from "react";

export const useForm = <T extends object>(formulario: T ) => {

    const [state, setState] = useState( formulario );

    const onChange = (value: string, campo: string) => {
        setState ({
            ...state,
            [campo]: value
        });

    }


    return (
        ...state,
        formulario: state, 
        onChange,
    )
}
