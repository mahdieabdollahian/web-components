import { html, TemplateResult } from "lit";
import "./index.js";
import "../pinwheel"

export default {
  title: "Pinwheel",
  component: "tap-pinwheel-group",
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const items = ['عنوان ۱', 'عنوان ۲', 'عنوان ۳', 'عنوان ۴', 'عنوان ۵', 'عنوان ۶', 'عنوان ۷', 'عنوان ۸', 'عنوان ۹']

const Template: Story<ArgTypes> = ({}: ArgTypes) => html`
  <tap-pinwheel-group>
    <tap-pinwheel .items=${items}></tap-pinwheel>
    <tap-pinwheel .items=${items}></tap-pinwheel>
    <tap-pinwheel .items=${items}></tap-pinwheel>
  </tap-pinwheel-group>
`;

export const PinwheelGroup = Template.bind({});

PinwheelGroup.args = {};
