export default (input) => {  //input = formData[currentStepData]
    let errors = {
        inValid: false,
        message: {}
    };

    for(let field in input) {
        const currentField = input[field];

        if(currentField.required && currentField.value === '') {
            errors['message'][field] = 'We need this info to proceed!';
            errors['inValid'] = true;
        }

        if(currentField.required && currentField.value === '' && field === 'planType') {
            errors['message'][field] = 'Please select a plan!';
            errors['inValid'] = true;
        }
    }

    return errors;
}