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
    const svg: string;
    export default svg;
}

declare module "*.png" {
    const value: any;
    export default value;
  }