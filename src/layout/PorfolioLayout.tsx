import { Navbar } from "../components/Navbar";

interface PorfilioProps {
    children?: any;
    className?: string;
}

export const PorfolioLayout = ({ children, className }: PorfilioProps) => {
    return (
        <div
            className={className}
        >
            <Navbar />
            {children}
        </div>
    )
}
