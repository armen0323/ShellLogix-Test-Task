"use client";
import type { ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { Controller } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  DatePickerComponent,
  CheckboxComponent,
  InputComponent,
  RadioInput,
  SelectComponent,
  TextareaComponent,
  ButtonComponent,
} from "@/components";

import useSurveys from "./_services/useSurveys";
import {selectData} from "./utils";
import dayjs from "dayjs";

const SurveysScreen = () => {
  const { errors, handleSubmit, onSubmit, control } = useSurveys();

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Create a survey</p>
      <form className={styles.form_wrapper} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              error={errors?.name?.message}
              label="Survey name"
              warning="This will be presented to recipients"
              onChange={onChange}
              value={value || ""}
            />
          )}
        />

        <Controller
          control={control}
          name="selectComponent"
          render={({ field: { onChange, value } }) => (
            <SelectComponent
              data={selectData}
              onChange={onChange}
              value={value || ""}
              warning="Your survey recipients will be asked to fill in these form"
              label="Form"
              error={errors?.selectComponent?.message}
            />
          )}
        />

        <label className={styles.gender}>
          <p className={styles.label}>Recipients</p>
          <div className={styles.gender_group_wrapper}>
            <Controller
              name="recipients"
              control={control}
              render={({ field }) => (
                <div className={styles.gender_group}>
                  <RadioInput
                    {...field}
                    label="One survey per user"
                    value="per_user"
                    checked={field.value === "per_user"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      field.onChange(e.target.value)
                    }
                  />
                  <RadioInput
                    {...field}
                    label="One survey per contributor"
                    value="per_contributor"
                    checked={field.value === "per_contributor"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      field.onChange(e.target.value)
                    }
                  />
                </div>
              )}
            />
            {errors.recipients && (
              <p className={styles.error}>{errors.recipients.message}</p>
            )}
          </div>
        </label>

        <label className={styles.sendRecipients}>
          <Controller
            name="isSendRecipients"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                label={""}
                control={
                  <CheckboxComponent
                    label="Send to all listed contributors and users via email"
                    {...field}
                  />
                }
              />
            )}
          />
          {errors.isSendRecipients && (
            <p className={styles.error}>{errors.isSendRecipients.message}</p>
          )}
        </label>

        <Controller
          name="deadlineDate"
          control={control}
          render={({ field: { value, onChange } }) => (
            <DatePickerComponent
              error={errors?.deadlineDate?.message}
              label="Deadline for responses"
              value={value ? dayjs(value) : null}
              onChange={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="note"
          render={({ field: { onChange, value } }) => (
            <TextareaComponent
              label="Survey name"
              warning="This will be presented to recipients"
              onChange={onChange}
              value={value || ""}
            />
          )}
        />

        <div>
          <ButtonComponent variant="contained" type="submit">
            Create survey
          </ButtonComponent>
          <p className={styles.button_text}>
            This will send the survey to your recipients
          </p>
        </div>
      </form>
    </div>
  );
};

export default SurveysScreen;
