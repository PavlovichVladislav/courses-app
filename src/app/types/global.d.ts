// declaration.d.ts
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

// declaration.d.ts
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare var IS_DEV: boolean;