import { IconBadge } from "@/_components";
import { Dropdown } from "@/_components";
import { Pricing } from "@/_components";
import { Stars } from "@/_components";

export const COMPONENTS = [
  {
    name: "Icon Badge",
    slug: "icon-badge",
    component: <IconBadge />,
    type: "badges",
  },
  {
    name: "Dropwdown",
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
];
