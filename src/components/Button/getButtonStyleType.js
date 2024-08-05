function getbuttonStyling(styleType){
    const primarybuttonStyling="bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900 ";
    const secondarybuttonStyling="bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900";
    const warningbuttonStyling="bg-yellow-500 border border-yellow-700 hover:bg-yellow-600 hover:border-yellow-900";
    const errorbuttonStyling="bg-red-500 border border-red-700 hover:bg-red-600 hover:border-red-900";
   
    if (styleType === "primary") {
        return primarybuttonStyling;
    }else if(styleType === "secondary"){
        return secondarybuttonStyling;
    }else if(styleType === "warning"){
        return warningbuttonStyling
    }else if(styleType === "error"){
        return errorbuttonStyling
    }
};

export default getbuttonStyling;
