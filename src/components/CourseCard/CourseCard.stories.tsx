import type { Meta, StoryObj } from "@storybook/react";
import { CourseCard } from "./CourseCard";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../global.styles";
import { StylesCardWrapper } from "./CourseCard.styles";
import { ICourseItem } from "./CourseCard.interface";

const mockItem: ICourseItem = {
  id: "1",
  name: "Sample Course",
  state: "published",
  finished: 3,
  level: "beginner",
  currency: "$",
  price: "99.99",
  numberOfModules: 5,
  numberOfLessons: 20,
  duration: 120,
  avatar: {
    link: "https://149357281.v2.pressablecdn.com/wp-content/uploads/2023/07/GettyImages-1306184112-scaled.jpg",
  },
  coaches: [{ firstName: "John", lastName: "Doe" }],
  groups: [{ name: "Group 1" }],
  video: true,
  isBought: false,
};

const mockFunctions = {
  getCourseLevel: (level: string) => level,
  formatDuration: (duration: number) => `${duration} mins`,
  actionHandler: (action: string, item: ICourseItem | string) => {
    console.log(action, item);
  },
  navigate: (url: string) => console.log(`Navigating to ${url}`),
  RedirectToCourse: (item: { id: string }) =>
    console.log(`Redirecting to course ${item.id}`),
  selectItem: (id: string) => console.log(`Selected item ${id}`),
  getCourseState: (state: string) => state,
};

const meta: Meta<typeof CourseCard> = {
  title: "Components/CourseCard",
  component: CourseCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StylesCardWrapper $canOpen={true}>
          <Story />
        </StylesCardWrapper>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    $canOpen: { control: "boolean" },
    fromCertificateBuilder: { control: "boolean" },
    fromWizard: { control: "boolean" },
    actions: { control: "object" },
    groupId: { control: "text" },
    user: { control: "object" },
    selectedItem: { control: "object" },
    courseoriginalid: { control: "text" },
    gridStyle: { control: "text" },
    companyMode: { control: "boolean" },
    activeTab: { control: "number" },
    withTooltips: { control: "boolean" },
    state: { control: "object" },
  },
  args: {
    item: mockItem,
    $canOpen: true,
    fromCertificateBuilder: false,
    fromWizard: false,
    actions: [],
    groupId: "",
    user: undefined,
    selectedItem: [],
    courseoriginalid: "123",
    gridStyle: "card",
    companyMode: false,
    activeTab: 0,
    withTooltips: true,
    state: {},
    ...mockFunctions,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: mockItem,
    $canOpen: true,
    fromCertificateBuilder: false,
    fromWizard: false,
    actions: [],
    groupId: "",
    user: undefined,
    selectedItem: [],
    courseoriginalid: "123",
    gridStyle: "card",
    companyMode: false,
    activeTab: 0,
    withTooltips: true,
    state: {},
    ...mockFunctions,
  },
};
