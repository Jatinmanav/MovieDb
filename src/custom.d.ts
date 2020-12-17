declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: (
    props: React.SVGProps<SVGSVGElement>
  ) => React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
