export interface AvatarProps {
  src: string;
  style?: Object;
  className?: string;
}

export interface IconProps {
  src: string;
}

export interface TitleProps {
  /** is subtitle **/
  sub?: boolean;
  value: string;
  prefix?: JSX.Element;
}
