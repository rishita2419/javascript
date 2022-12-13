import { AbstractControl,ValidationErrors } from "@angular/forms";

export function passwordMisMatch(control:AbstractControl):ValidationErrors | null{

    const password = control.get('password')?.value;
    const confirm = control.get('confirm')?.value;

    if(password !== confirm){
        return {'passwordMisMatch':true}
    }
    return null
}