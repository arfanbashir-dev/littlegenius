import {z} from 'zod'

export const userSchema = z.object(
    {

        user_name: z.string().min(3),
        user_email: z.string().min(6),
        user_password: z.string().min(8),
        user_role:z.string()
    }
)


export type userformData = z.infer<typeof userSchema>;
export type formErrors= Partial<Record<keyof userformData, string>> 


export const userValidForm = (form:userformData):{isValid:boolean; errors:formErrors} => {

    const newErrors : formErrors = {};

    if(!form.user_name.trim()){
        newErrors.user_name = 'User name is required.'
    } else{
        if(form.user_name.length < 3){
            newErrors.user_name = 'User name must contain atleast 3 characters'
        }
        else if(!/^[A-Z]/.test(form.user_name)){
            newErrors.user_name = 'User name must start with uppercase alphabet'
        }else if(!/[a-z]/.test(form.user_name)){
            newErrors.user_name = 'User name must contain atleast a lowercase alphabet'
        }
    }

    if(!form.user_email.trim()){
        newErrors.user_email = 'User email is required.'
    }else if(form.user_email.length < 6 )
        newErrors.user_email = 'User email must contain atleast 6 characters.'

    
    if(!form.user_password.trim()){
        newErrors.user_password = 'User password must start with uppercase alphabet'
    }else{
        if(!/^[A-Z]/.test(form.user_password)){
            newErrors.user_password = 'User password must start with an uppercase alphabet'
        }else if(!/[a-z]/.test(form.user_password)){
            newErrors.user_password = 'User password must contain a lowercase alphabet.'
        } else if(!/[0-9]/.test(form.user_password)){
            newErrors.user_password = 'User password must contain a digit.'
        }
    }
    return{
        isValid: Object.keys(newErrors).length === 0,
        errors: newErrors,
    }    

}