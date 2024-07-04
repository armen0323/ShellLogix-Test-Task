import {Meta, StoryFn} from "@storybook/react";
import DatePickerComponent from "./index";
import {IDatePicker} from "./types";

export default {
    title: "components/date-picker-component",
    component: DatePickerComponent,
} as Meta<typeof DatePickerComponent>;

const Template: StoryFn<IDatePicker> = (args) => (
    <DatePickerComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
    label: 'Select date'
};