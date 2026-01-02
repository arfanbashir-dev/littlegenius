import {z} from 'zod'

export const userSchema = z.object({
    user_name: z.string().min(3),
    user_email: z.string().email(),
    user_password: z.string().min(8),
    user_role: z.string(),
});

export type userSchemaType = z.infer<typeof userSchema>

export type formData = z.infer<typeof userSchema>;
export type formErrors = Partial<Record<keyof formData, string>>;

export const userValidForm = (form: formData): {isValid: boolean, errors: formErrors} => {
    const newErrors: formErrors = {};
    
    // Validate user_name - FIXED REGEX
    if (!form.user_name.trim()) {
        newErrors.user_name = "User name is required";
    } else if (form.user_name.length < 3) {
        newErrors.user_name = "User name must be at least 3 characters";
    } else {
        // Remove all lookahead patterns - use simple regex
        if (!/^[A-Z]/.test(form.user_name)) {
            newErrors.user_name = 'User name must start with uppercase alphabet.';
        } else if (!/[a-z]/.test(form.user_name)) {
            // Checks if contains lowercase anywhere (no ^ anchor)
            newErrors.user_name = 'User name must contain at least one lowercase alphabet.';
        }
    }
    
    // Validate user_email - FIXED Zod usage
    if (!form.user_email.trim()) {
        newErrors.user_email = 'User email is required';
    } else {
        // Create email schema and check properly
        const emailSchema = z.string().email();
        const emailResult = emailSchema.safeParse(form.user_email);
        
        // FIXED: Check the .success property
        if (!emailResult.success) {
            newErrors.user_email = 'It must be a valid email.';
        }
    }
    
    // Validate user_password - FIXED REGEX
    if (!form.user_password) {
        newErrors.user_password = 'User password is required.';
    } else if (form.user_password.length < 8) {
        newErrors.user_password = 'Password must be at least 8 characters.';
    } else {
        // Remove lookahead patterns
        if (!/^[A-Z]/.test(form.user_password)) {
            newErrors.user_password = 'Password must start with uppercase alphabet.';
        } else if (!/[a-z]/.test(form.user_password)) {
            // Checks if contains lowercase anywhere
            newErrors.user_password = 'Password must contain at least one lowercase alphabet.';
        } else if (!/[0-9]/.test(form.user_password)) {
            // Checks if contains digit anywhere
            newErrors.user_password = 'Password must contain at least one digit.';
        }
    }
    
    return {
        isValid: Object.keys(newErrors).length === 0,
        errors: newErrors,
    };
};