import { Meta, Story } from "@storybook/react";
import { Test, TestProps } from "./Test";
export default {
    title: "test",
    component: Test
} as Meta<TestProps>

export const testStory: Story<TestProps> = {
    args: {
        msg: "hoge"
    }
}