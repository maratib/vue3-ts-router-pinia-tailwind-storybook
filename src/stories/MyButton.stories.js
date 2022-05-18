import MyButton from "@/components/MyButton.vue";

export default {
  title: "UI/MyButton",
  component: MyButton,
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Hello",
  bgColor: "green",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Bye",
  bgColor: "red",
};
