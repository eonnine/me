import { TagProps } from "./AtomTypes";

export interface Navigation {
  key: string;
  icon: string;
  alt?: string;
  value: string;
}
export interface Profile {
  name: string;
  position: string;
  img: string;
  navigations: Array<Navigation>;
}

export interface ProfileProps {
  profile: Profile;
}

export interface SectionProps {
  sub?: boolean;
  title?: string | undefined;
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
