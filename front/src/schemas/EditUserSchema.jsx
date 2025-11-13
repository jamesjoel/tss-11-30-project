import * as YUP from  'yup';

let EditUserSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    contact : YUP.number().typeError("Insert Numbers Only").required("Insert Your Contact Number"),
    gender : YUP.string().required("Select Your Gender"),
    address : YUP.string().required("Insert Your Address"),
    city : YUP.string().required("Select Your City"),
});

export default EditUserSchema;