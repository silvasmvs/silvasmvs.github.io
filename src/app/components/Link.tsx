import NextLink from "next/link";
import React from "react";

export interface LabelProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    href: string;
    children: React.ReactNode;
}

export function Link({ href, children, ...rest }: LabelProps) {
    return (
        <NextLink className="hover:underline" href={href} {...rest}>{children}</NextLink>
    )
}