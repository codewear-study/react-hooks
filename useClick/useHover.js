export const useHover = onHover => {
    if(typeof onHover !== "function")
        return;

    const element = useRef();
    useEffect(() => {
        if(element.current)
            element.current.addEventListener("moseenter", onHover);

        return () => {
            if(element.current)
                element.current.removeEventListenr("moseenter", onHover)
        }
    }, []);
    return element;
};