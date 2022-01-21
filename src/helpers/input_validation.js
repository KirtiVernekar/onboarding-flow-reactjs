export default (input) => {
    let errors = {};

    for(let field in input) {
        const currentField = input[field];

        if(currentField.required && currentField.value === '') {
            errors[field] = 'We need this info to proceed!';
        }

        if(currentField.required && currentField.value === '' && field === 'planType') {
            errors[field] = 'Please select a plan!';
        }
    }

    return errors;
}