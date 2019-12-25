export const useFullScreen = callback => {
    const elemnt = useRef();
    const runCb = isFull => {
        if(callback && typeof callback === "function")
            callback(isFull);
    }
    const triggerFull = () => {
        if(elemnt.current){
            if(elemnt.current.requestFullScreen)
                elemnt.current.requestFullscreen();
            else if(elemnt.current.mozRequestFullScreen)
                elemnt.current.mozRequestFullScreen();
            else if(elemnt.current.webkitRequestFullScreen)
                elemnt.current.webkitRequestFullScreen();
            else if(elemnt.current.msRequestFullScreen)
                elemnt.current.msRequestFullScreen();

            runCb(true);
        }
    }
    const exitFull = () => {
        document.exitFullscreen();
        if(document.exitFullscreen)
            document.exitFullscreen();
        else if(document.mozRequestFullScreen)
            document.mozCancelFullscreen();
        else if(document.webkitExitFullScreen)
            document.webkitExitFullscreen();
        else if (document.msExitFullscreen)
            document.msExitFullscreen();

        runCb(false);
    }
    return { element, triggerFull, exitFull};
};