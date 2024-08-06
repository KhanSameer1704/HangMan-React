import getbuttonStyling from "./getButtonStyleType";

function Button({buttontype , text, styleType, onclickHandler}){

    
return (
        <button
           type={buttontype}
           onClick={onclickHandler}
          className={`px-4 py-2 ${getbuttonStyling(styleType)} text-white rounded-md transition-all`}>
            
        {text}
    </button>
    );
}

export default Button;