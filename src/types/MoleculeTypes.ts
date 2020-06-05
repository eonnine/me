import { AvatarProps } from "./AtomTypes";

export interface ProfileProps extends AvatarProps {
  [key: string]: any;
}

export interface SectionProps {
  sub?: boolean;
  title: string;
  icon?: string;
  content: JSX.Element | string | undefined;
  h?: number;
}
