import { FormControl, ValidationErrors } from "@angular/forms";

export class ShopValidators {
    // whitespace validation
    static notOnlyWhite(control: FormControl): ValidationErrors{
        //check if string only whitespace

        if ((control.value != null) && (control.value.trim().length === 0)){
            // invalid
            return {'notOnlyWhite': true};
        }
        else{
            // valid
            return null;
        }
    }
}
