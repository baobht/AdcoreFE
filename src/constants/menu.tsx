export type MenuProps = {
  id: number;
  label: string;
  path: string;
  section?: boolean;
};

export const MENU_ITEMS: MenuProps[] = [
  {
    id: 0,
    label: "Home",
    path: "/",
  },
  {
    id: 1,
    label: "Courses",
    path: "/courses",
  },
];
