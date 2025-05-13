type NiceButtonProps = {
    title: string,
    onclick: () => void
}

function NiceUtilityButton({title, onclick}: NiceButtonProps) {
    return <button 
        onClick={onclick} 
        className="cursor-pointer text-white hover:text-green-600 bg-emerald-800 hover:bg-emerald-950 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600">
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

export {NiceUtilityButton}
