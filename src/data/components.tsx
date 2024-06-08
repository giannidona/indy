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
  },
  {
    name: "Dropdown",
    slug: "dropdown",
    component: <Dropdown />,
    type: "dropdown",
  },
  {
    name: "Pricing",
    slug: "pricing",
    component: <Pricing />,
    type: "pricing",
  },
  {
    name: "Stars",
    slug: "stars",
    component: <Stars />,
    type: "users",
  },
  {
    name: "Users List",
    slug: "users-list",
    component: <UsersList />,
    type: "users",
  },
  {
    name: "Gradient Word",
    slug: "gradient-word",
    component: <GradientWord />,
    type: "texts",
  },
];
