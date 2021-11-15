const Validate = (data, type )=> {

    const errors = {}
    
    if(!data.email){
        errors.email = 'Email required'
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = 'Email adrress is invalid'
    } else{
        delete errors.email
    }

    if(!data.password){
        errors.password = 'Password required'
    }else if(data.password.length < 6){
        errors.password = 'Password need to be 6 characters or more'
    }else{
        delete errors.password
    }

    if(type === 'signup'){
        if(!data.username.trim()){
            errors.username = 'Username required'
        } else {
            delete errors.username
        }
        if(!data.confirmPassword){
            errors.confirmPassword = 'Confirm password required'
        }else if(data.confirmPassword !== data.password){
            errors.confirmPassword = 'Password do not match'
        }else{
            delete errors.confirmPassword
        }
    
        if(data.isAccepted){
            delete errors.isAccepted
        } else{
            errors.isAccepted = 'Accept our regulation'
        }
    }

    return errors

};

export default Validate;