declare const _default: {
    title: string;
    component: {
        (props: any): import("react/jsx-runtime").JSX.Element;
        propTypes: {
            url: import("prop-types").Requireable<string>;
            thumbnail: import("prop-types").Requireable<string>;
            subtitle: import("prop-types").Requireable<string>;
            downloadLink: import("prop-types").Requireable<string>;
        };
    };
    tags: string[];
    parameters: {
        layout: string;
        controls: {
            matchers: {
                color: RegExp;
                date: RegExp;
            };
        };
    };
};
export default _default;
export declare const Default: import("@storybook/core/types").AnnotatedStoryFn<import("@storybook/react/*").ReactRenderer, any>;
export declare const WithoutSubtitles: import("@storybook/core/types").AnnotatedStoryFn<import("@storybook/react/*").ReactRenderer, any>;
export declare const WithoutDownload: import("@storybook/core/types").AnnotatedStoryFn<import("@storybook/react/*").ReactRenderer, any>;
