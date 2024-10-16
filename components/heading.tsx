import {LucideIcon} from "lucide-react";

interface HeadingProps{
    title: string;
    decription: string;
    icon: LucideIcon;
    iconColor ?: string;
}

export const Heading = () => {
    return (
        <div>
            Heading Component
        </div>
    );
};