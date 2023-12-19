import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseHover: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind]

export const useHover = () => {
    const [isHover, setIHover] = useState(false);

    const onMouseHover = useCallback(() => {
        setIHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIHover(false);
    }, []);

    return useMemo<UseHoverResult>(() => [
        isHover,
        {
            onMouseHover,
            onMouseLeave,
        },
    ], [isHover, onMouseHover, onMouseLeave]);
};
