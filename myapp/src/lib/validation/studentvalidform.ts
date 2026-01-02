import {z} from 'zod'

export const studentSchema = z.object({
    
    // st_id:z.number(),
    st_name:z.string().min(3),
    st_father:z.string().min(3),
    st_grade:z.string(),
    st_email:z.string(),
    
})


export const studentResultSchema = z.object(
    
    {
    
        st_id:z.coerce.number().positive(),    
        st_grade:z.string(),    
        st_marks:z.coerce.number().min(0)
    }
)

