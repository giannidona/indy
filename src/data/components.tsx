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
      "Un componente que muestra una insignia con un icono, útil para destacar información clave o notificaciones.",
  },
  {
    name: "Dropdown",
    slug: "dropdown",
    component: <Dropdown />,
    type: "dropdown",
    description:
      "Un menú desplegable interactivo que permite a los usuarios seleccionar una opción de una lista.",
  },
  {
    name: "Pricing",
    slug: "pricing",
    component: <Pricing />,
    type: "pricing",
    description:
      "Un componente para mostrar planes de precios y detalles de suscripción, ideal para páginas de productos y servicios.",
  },
  {
    name: "Stars",
    slug: "stars",
    component: <Stars />,
    type: "users",
    description:
      "Un componente de calificación con estrellas que permite a los usuarios evaluar productos o servicios.",
  },
  {
    name: "Users List",
    slug: "users-list",
    component: <UsersList />,
    type: "users",
    description:
      "Una lista de usuarios que muestra información básica, ideal para directorios y redes sociales.",
  },
  {
    name: "Gradient Word",
    slug: "gradient-word",
    component: <GradientWord />,
    type: "texts",
    description:
      "Un componente de texto con un efecto de degradado, perfecto para destacar títulos o palabras clave.",
  },
];
