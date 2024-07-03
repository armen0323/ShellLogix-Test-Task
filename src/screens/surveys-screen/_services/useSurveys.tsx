"use client"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import surveySchema from "@/schemas/surveys.schemas";

interface IFormInput {
    name: string;
    selectComponent: 'Ten' | 'Twenty' | 'Thirty';
    recipients: 'per_user' | 'per_contributor';
    isSendRecipients: boolean;
    deadlineDate: Date | null;
    note: string;
}

const useSurveys = () => {
    const {handleSubmit, control, formState: {errors}} = useForm({
        mode: 'onSubmit',
        resolver: yupResolver<IFormInput>(surveySchema)
    })

    const onSubmit = (data: any) => {
        console.log(data,'gago')
    }

    return {
        errors,
        handleSubmit,
        onSubmit,
        control
    }
}

export default useSurveys