export interface AvatarProps {
  src: string;
  style?: Object;
  className?: string;
}

export interface IconProps {
  src: string;
  alt?: string;
  size?: string;
  onClick?: Function;
}

export interface TitleProps {
  // is subtitle
  sub?: boolean;
  // heading size
  h?: number;
  value: string;
  prefix?: JSX.Element | string;
}

export interface CardProps {
  label: JSX.Element | string;
  body: JSX.Element;
}

export interface TagProps {
  label: string;
  color?: string;
  onClick?: Function;
}
