let useUserDate = (isoString)=>{
    
const dateObject = new Date(isoString);

// 2. Convert to a user-friendly, locale-specific string
const userFriendlyDate = dateObject.toLocaleString();
const Arr = userFriendlyDate.split(",");
return Arr[0]
}

export default useUserDate;