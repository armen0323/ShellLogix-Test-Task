import * as Yup from 'yup';

const surveySchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),

    selectComponent: Yup.string()
        .required('Select one of the options'),

    recipients: Yup.mixed()
        .oneOf(['per_user', 'per_contributor'], 'Select a valid option')
        .required('Recipients category is required'),

    isSendRecipients: Yup.boolean()
        .oneOf([true], 'Checkbox must be checked'),

    deadlineDate: Yup.date()
        .required('Deadline date is required')
        .nullable(),

    note: Yup.string()
});

export default surveySchema;
