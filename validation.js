export const isValidEmail = (email)=>{
    return email.includs("@") && email.inlcluds(".")
}
export const isPasswordStrong=(password)=>{
    return password.length>=6;
}