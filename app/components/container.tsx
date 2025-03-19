import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
    return <div className="max-w-[64rem] mx-auto">{children}</div>;
}