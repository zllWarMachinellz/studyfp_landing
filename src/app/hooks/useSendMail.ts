import { useState} from "react";
import { sendEmailContact } from "../actions/sendEmail/sendEmail";

export interface EmailParams{
    name: string,
    email: string,
    movil: string,
    courseName?: string,
}


export const useSendMail = () => {

    const [mailStatus, setMailStatus] = useState({status: false, message: ''});


    const sendMail = async ({email,movil,name,courseName}: EmailParams) =>{


            const res = await sendEmailContact({email,movil,name,courseName});
            console.log(res.message)
            res.succes ? setMailStatus({ status: true, message: res.message }) : setMailStatus({status: false, message: res.message })
       
    }
    
    return { sendMail,  mailStatus}
}
