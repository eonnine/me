import { RouteComponentProps } from "react-router-dom";

export interface IRoute {
  path: string;
  redirect?: string;
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | any; // TODO: remove any
  children?: IRoute[];
}
