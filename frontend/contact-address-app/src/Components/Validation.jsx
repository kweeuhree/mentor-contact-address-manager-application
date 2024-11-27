export default function Validation(values) {
    let errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(values.name === '') {
        errors.name = "Name Should Not Be Empty"
    } else if(values.name.length < 3 || values.name.length > 30) {
        errors.name = "Name Should be between 3 and 30 characters"
    } else {
        errors.name = ''
    }
    if(values.email === '') {
        errors.email = "Email Should Not Be Empty"
    } else if(!email_pattern.test(values.email)) {
        errors.email = "Invalid Email"
    } else {
        errors.email = ''
    }
    if(values.password === '') {
        errors.password = "Password Should Not Be Empty"
    } else if(!password_pattern.test(values.password)) {
        errors.password = "Password Should be at least 8 characters and contain at least one letter and one number"
    } else {
        errors.password = ''
    }

    return errors;
}