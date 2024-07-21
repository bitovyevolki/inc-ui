import type {ComponentPropsWithoutRef, ElementType} from "react";

import s from "./card.module.scss";
import clsx from "clsx";

const DEFAULT_TYPE = 'div'

type CardProps<T extends ElementType = typeof DEFAULT_TYPE> = {
    as?: T;
} & ComponentPropsWithoutRef<T>;

export const Card = <T extends ElementType = typeof DEFAULT_TYPE>({
                                                        className,
                                                        as,
                                                        ...rest
                                                    }: CardProps<T>) => {
    const Component = as ?? DEFAULT_TYPE;

    return (
        <Component
            {...rest}
            className={clsx(
                s.card,
                className,
            )}
        />
    );
}

Card.displayName = 'Card'