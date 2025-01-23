import { css } from "styled-components";
export declare const Typography: ({ fontStyle, }: {
    fontStyle: keyof typeof theme.typography;
}) => ReturnType<typeof css>;
export declare const theme: {
    typography: {
        titleL: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        titleB: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        titleM: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        titleS: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        bodyB: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        bodyM: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        bodyS: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        labelL: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        labelM: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        labelS: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        descriptor: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
};
export declare const GlobalStyle: import("react").NamedExoticComponent<import("styled-components").ExecutionProps & object>;
