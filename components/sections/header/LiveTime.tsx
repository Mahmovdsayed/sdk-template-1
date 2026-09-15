"use client";

import { useEffect, useState } from "react";

type Props = {
    timeZone?: string;
    className?: string;
};

export default function LiveTime({
    timeZone = "Europe/Madrid",
    className,
}: Props) {
    const [time, setTime] = useState<string>("");
    const [offset, setOffset] = useState<string>("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const formattedTime = new Intl.DateTimeFormat("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone,
            }).format(now);

            const offsetPart = new Intl.DateTimeFormat("en-US", {
                timeZone,
                timeZoneName: "shortOffset",
            })
                .formatToParts(now)
                .find((p) => p.type === "timeZoneName")?.value;

            setTime(formattedTime);
            setOffset(offsetPart ?? "");
        };

        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, [timeZone]);

    if (!time) return <span className={className}>--:--</span>;


    return (
        <span className={className}>
            {time} {offset}
        </span>
    );
}