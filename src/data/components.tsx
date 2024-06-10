import {
  IconBadge,
  UsersList,
  Dropdown,
  Pricing,
  Stars,
  GradientWord,
} from "@/_components";

export const COMPONENTS = [
  {
    name: "Icon Badge",
    slug: "icon-badge",
    component: <IconBadge />,
    type: "badges",
    description:
      "A component that displays a badge with an icon, useful for highlighting key information or notifications.",
  },
  {
    name: "Dropdown",
    slug: "dropdown",
    component: <Dropdown />,
    type: "dropdown",
    description:
      "An interactive dropdown menu that allows users to select an option from a list.",
  },
  {
    name: "Pricing",
    slug: "pricing",
    component: <Pricing />,
    type: "pricing",
    description:
      "A component for displaying pricing plans and subscription details, ideal for product and service pages.",
  },
  {
    name: "Stars",
    slug: "stars",
    component: <Stars />,
    type: "users",
    description:
      "A star rating component that allows users to rate products or services.",
  },
  {
    name: "Users List",
    slug: "users-list",
    component: <UsersList />,
    type: "users",
    description:
      "A user list that displays basic information, ideal for directories and social networks.",
  },
  {
    name: "Gradient Word",
    slug: "gradient-word",
    component: <GradientWord />,
    type: "texts",
    description:
      "A text component with a gradient effect, perfect for highlighting titles or keywords.",
  },
];
