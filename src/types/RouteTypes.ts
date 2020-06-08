import { RouteComponentProps } from "react-router-dom";

export interface Route {
  path: string;
  redirect?: string;
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | any; // TODO: remove any
  children?: Route[];
}
