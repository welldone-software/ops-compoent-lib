import * as React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    onClick?: () => void;
    backgroundColor?: string;
    color?: string;
}
export declare const Button: ({ children, primary, onClick, backgroundColor, color, }: ButtonProps) => JSX.Element;
