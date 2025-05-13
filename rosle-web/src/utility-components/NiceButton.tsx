type NiceButtonProps = {
    title: string,
    onclick: () => void,
    highlight?: boolean
}

function NiceButton({title, onclick, highlight}: NiceButtonProps) {
  const regularStyle = "cursor-pointer px-6 py-3.5 bg-transparent hover:bg-pink-300 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded";
  const highlightStyle = "cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-semibold rounded text-sm px-5 py-2.5 text-center me-2 mb-2";

    return <button 
        onClick={onclick} 
        className={highlight ? highlightStyle : regularStyle}>
        {addLineBreak(title)}
    </button>
}
const addLineBreak = (str: string) =>
  str.split('\n').map((subStr, key) => {
    return (
      <span key={key}>
        {subStr}
        <br />
      </span>
    );
});

export {NiceButton}