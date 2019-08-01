/// <reference types="react" />
declare const wInfo: (text?: string | undefined) => (storyFn: import("@storybook/react").RenderFunction) => (context?: object | undefined) => import("react").ReactElement<import("@storybook/addon-info").WrapStoryProps, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>;
export default wInfo;
