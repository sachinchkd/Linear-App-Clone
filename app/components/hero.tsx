interface HeroProps {
    children: React.ReactNode;
}

interface HeroElemnetProps {
    children : React.ReactNode;
}

export const HeroTitle = ({children}:HeroElemnetProps)=> {
    return <h1 className="text-5xl font-extrabold text-primary">{children}</h1>
    
};

export const HeroSubtitle = ({children}:HeroElemnetProps) => {
    return <p className="text-lg font-bold text-tertiary">{children}</p>
}

export const Hero = ({children }: HeroProps)=>{
    return (
        <div className="text-center">
            {children}
        </div>
    );
}