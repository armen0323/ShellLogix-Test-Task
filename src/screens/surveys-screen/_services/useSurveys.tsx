"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import surveySchema from "@/schemas/surveys.schemas";
import dayjs, { Dayjs } from "dayjs";

interface IFormInput {
  name: string;
  selectComponent: "Ten" | "Twenty" | "Thirty";
  recipients: "per_user" | "per_contributor";
  isSendRecipients: boolean;
  deadlineDate: Dayjs | null;
  note: string;
}

const useSurveys = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(surveySchema),
  });

  const onSubmit = (data: any) => {
    console.log(data, "gago");
  };

  return {
    errors,
    handleSubmit,
    onSubmit,
    control,
  };
};

export default useSurveys;
