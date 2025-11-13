import * as YUP from  'yup';
import axios from 'axios';
import { API_URL } from '../config/API';

let SignupSchema = YUP.object({
    name : YUP
            .string()
            /*
            .test("capital_name", "Your Name First Letter Should be Capital", (value)=>{
                // tanya
                // Tanya
                let arr = value.split(""); // ["t", "a", "n"....]
                let x = arr[0].toUpperCase(); // T
                if(x == arr[0])
                {
                    return true;
                }else{
                    return false;
                }

            })*/
            .required("Insert Your Full Name"),



    email : YUP
    .string()
    .email("Email Id is Not Correct")
    .test("check_email", "This Email Id already exists !", async(value)=>{
        let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(reg.test(value)==true){
            let response = await axios.get(`${API_URL}/userauth/checkemail/${value}`);
            // console.log(response.data);
            return response.data.success;

        }
    })
    .required("Insert Your Email Id"),
    password : YUP
        .string()
        // .test("strong_pass", "Incorrect", (value)=>{
        //     let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        //     if(reg.test(value)==true){
        //         return true;
        //     }else{
                
        //         return false;
        //         // James@1234
        //     }
        // })
        .required("Insert Your Password"),
    repassword : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Insert Numbers Only").min(999999999, "Contact Number Should be 10 Digits").max(10000000000, "Contact Number Should be 10 Digits").required("Insert Your Contact Number"),
    gender : YUP.string().required("Select Your Gender"),
    address : YUP.string().required("Insert Your Address"),
    city : YUP.string().required("Select Your City"),
});

export default SignupSchema;

/*
    name : YUP.string().test("uniquename", "err msg", (a)=>{ 

        
        }).required("")


    Regular Expressions 

*/