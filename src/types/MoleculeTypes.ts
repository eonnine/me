import { AvatarProps, TagProps } from "./AtomTypes";

export interface ProfileProps extends AvatarProps {
  [key: string]: any;
}

export interface SectionProps {
  sub?: boolean;
  title: string | undefined;
  icon?: string;
  content: JSX.Element | string | undefined;
  h?: number;
}

export interface StepProps {
  label: string;
  title: string;
  link?: string;
  tags: Array<TagProps>;
  content: string;
}
