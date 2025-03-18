import React, { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
    return <div className="w-[1248px]">{children}</div>;
}