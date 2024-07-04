"use client";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import surveySchema from "@/schemas/surveys.schemas";
import {Dayjs} from "dayjs";
import {useLazyQuery, useMutation} from "@apollo/client";
import {MUTATION_EXAMPLE} from "@/query";

interface IFormInput {
    name: string;
    selectComponent: string;
    recipients: string;
    isSendRecipients: boolean;
    deadlineDate: Date | null;
    note?: string;
}

const useSurveys = () => {
    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(surveySchema),
    });
    const [updateUser] = useMutation<IFormInput, {
        name: string,
        selectComponent: string,
        recipients: string,
        isSendRecipients: boolean,
        deadlineDate: string,
        note?: string
    }>(MUTATION_EXAMPLE)

    const onSubmit = async (data: IFormInput) => {

        await updateUser({
            variables: {
                name: data.name,
                note: data.note,
                deadlineDate: data.deadlineDate?.toString()!,
                isSendRecipients: data.isSendRecipients,
                recipients: data.recipients,
                selectComponent: data.selectComponent
            },
            onCompleted: () => {
            },
            onError: () => {
            }
        })
    };

    return {
        errors,
        handleSubmit,
        onSubmit,
        control,
    };
};

export default useSurveys;
