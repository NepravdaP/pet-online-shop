export interface Props {
  isOpen: boolean;
}
export interface SidebarProps extends Props {
  setIsOpen: (value: boolean) => void;
}
