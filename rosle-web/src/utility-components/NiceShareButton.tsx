function NiceShareButton({output}: {output:string}) {

    const share = () => {
        const isMobile =
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i) ||
            navigator.userAgent.match(/IEMobile/i) ||
            navigator.userAgent.match(/Opera Mini/i);

        if (isMobile) {
            // @ts-ignore
            if (navigator.canShare) {
            navigator
                .share({
                title: "Rosle",
                text: output,
                url: "https://rosle.pages.dev/",
                })
                .catch((error) => console.error("Share failed:", error));
            }
        } else {
            output += "\n\nhttps://rosle.pages.dev/";
            navigator.clipboard.writeText(output);
            alert("Results copied to clipboard");
        }
    }

    return <button 
        onClick={share} type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Share</button>
;
}

export {NiceShareButton};