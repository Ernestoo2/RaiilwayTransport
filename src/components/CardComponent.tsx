import React from "react";
import { AiFillStar } from "react-icons/ai";

interface CardProps {
    id: number;
    title: string;
    description: string;
    name: string;
    from: string;
    to: string;
    src: string;

}

export const CardData: CardProps[] = [
    {
        id: 1,
        title: "“A real sense of community, nurtured”",
        description: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        name: "Olga",
        from: "Weave studio",
        to: "Kai tak",
        src: "/Assets/Review1.png",
    },
    {
        id: 2,
        title: "“The facilities are superb. Clean, slick, bright.”",
        description: "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle",
        name: "Thomas",
        from: "Brighton hotel",
        to: "Yangon",
        src: "/Assets/Review2.png",
    },
    {
        id: 3,
        title: "“A real sense of community, nurtured”",
        description: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        name: "Eliot",
        from: "Weave studios",
        to: "Kai Tak",
        src: "/Assets/Review3.png",
    },
    {
        id: 4,
        title: "“A real sense of community, nurtured”",
        description: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        name: "Eliot",
        from: "Weave studios",
        to: "Kai Tak",
        src: "/Assets/Review3.png",
    }

]


export default function CardComponent({
    id,
    title,
    description,
    name,
    from,
    to,
    src
}: CardProps) {
    return (
        <div className="h-auto w-full  mx-auto bg-slate-100 shadow-md  rounded-md p-4">
            <div className="w-full">
                {/* Title and Description */}
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="font-light text-sm text-gray-600 truncate">{description}</p>

                {/* View More Link */}
                <a className="font-medium text-[12px] text-end block mt-2 text-blue-500 hover:underline" href="/src/pages/DetailedPage/">
                    View more
                </a>

                {/* Star Icons */}
                <span className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} className="text-yellow-500" />
                    ))}
                </span>

                {/* Additional Info */}
                <div className="mt-4">
                    <h1 className="font-medium">{name}</h1>
                    <p className="text-sm text-gray-500">{from} - {to}</p>
                    <span className="flex items-center gap-2 mt-2">
                        <img className="w-5 h-5" src="/Assets/google.png" alt="Google" />
                        <h4 className="text-sm font-medium">Google</h4>
                    </span>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full mx-auto mt-4">
                <img className="w-full h-auto rounded-md" src={src} alt={title} />
            </div>
        </div>
    )

}


