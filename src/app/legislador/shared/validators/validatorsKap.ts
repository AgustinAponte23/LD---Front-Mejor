import {
	ValidatorFn,
	AbstractControl,
	UntypedFormGroup,
	Validators,
  UntypedFormControl,
  ValidationErrors,
} from "@angular/forms";
import { of } from "rxjs";

export default class ValidatorsKap {
	//CUIT
	static cuit(): ValidatorFn {
		return (control: AbstractControl) => {
			const regexCuitStr = "^(20|23|27|30|33)([0-9]{8})([0-9]{1})$"; // expresion regular de cuit sin guiones

			let isValid = true;
			let cuit = <string>control.value; // obtengo el valor del control

			// Si es vacio no hago nada
			if (!cuit) return of(null);
			if (cuit.length === 0) return null;


			cuit = cuit.replace(/-/gi,"");

			// Valido que cumpla con la expresion regular
			let regEx = new RegExp(regexCuitStr);
			if (!regEx.test(cuit)) {
				isValid = false;
			}

			// Valido con el digito verificador
			let mult = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
			let total = 0;
			for (let i = 0; i < mult.length; i++) {
				total += parseInt(cuit[i]) * mult[i];
			}
			let mod = total % 11;
			let digito = mod === 0 ? 0 : mod === 1 ? 9 : 11 - mod;
			if (!(digito === parseInt(cuit[10]))) {
				isValid = false;
			}

			if (!isValid) {
				return ({
					validarCuit: {
						mensaje: "El cuit ingresado es inválido",
					},
				} as ValidationErrors);
			}

			return of(null);
		};
	}

	//PASSWORD POLICY
	static passwordPolicy(): ValidatorFn {
		return (control: AbstractControl) => {
			const regexPasswordPolicyStr =
				"^(?=(.*\\d){1})(?=.*[a-z])(?=.*[A-Z]{1}).{8,}$"; // expresion regular de la policy del idp

			let isValid = true;
			const password = <string>control.value; // obtengo el valor del control

			// Si es vacio no hago nada
			if (!password) return of(null);
			if (password.length === 0) return of(null);

			// Valido que cumpla con la expresion regular
			let regEx = new RegExp(regexPasswordPolicyStr);
			if (!regEx.test(password)) {
				isValid = false;
			}

			if (!isValid) {
				return ({
					validarPasswordPolicy: {
						mensaje: "La contraseña debe cumplir con las politicas",
					},
				} as ValidationErrors);
			}

			return null;
		};
	}

	//DNI
	static dni(): ValidatorFn {
		return (control: AbstractControl) => {
			const regexDniStr = "^[1-9]{1}[0-9]{6,7}$";
			/*---test---
				  passed:
					  36520645
					  8123456
					  1000000
				  failed:
					  08123456
					  00000000
					  0000000
				  */

			let isValid = true;
			const dni = <string>control.value; // obtengo el valor del control

			// Si es vacio no hago nada
			if (!dni) return of(null);
			if (dni.length === 0) return of(null);

			// Valido que cumpla con la expresion regular
			let regEx = new RegExp(regexDniStr);
			if (!regEx.test(dni)) {
				isValid = false;
			}

			if (!isValid) {
				return ({
					validarDni: {
						mensaje: "El DNI ingresado es inválido",
					},
				} as ValidationErrors);
			}

			return of(null);
		};
	}

  static onlyNumber(): ValidatorFn{
    return (control: AbstractControl) => {

			let isValid = true;
			const value = control.value; // obtengo el valor del control

      isValid = !isNaN(value);

			if (!isValid) {
				return ({
					validarSoloNumero: {
						mensaje: "El valor ingresado no es un número",
					},
				} as ValidationErrors);
			}

			return of(null);
		};
  }


	//EQUALS TO
	static equalsTo(controlReference: AbstractControl): ValidatorFn {
		return (control: AbstractControl) => {
			if (!controlReference || !control) return of(null);

			let value1 = <string>control.value;
			let value2 = <string>controlReference.value;

			let isValid = value1 === value2;

			if (!isValid) {
				return ({
					equalsTo: {
						mensaje: `Los campos no son iguales`,
					},
				} as ValidationErrors);
			}

			return of(null);
		};
	}

	static requiredIfValidator(predicate:any) {
		return (formControl: any) => {
			if (!formControl.parent) {
				return of(null);
			}
			if (predicate()) {
				return Validators.required(formControl);
			}
			return of(null);
		};
	}

	//GENERICS
  static getErrorMessage(form: UntypedFormGroup, field: string, fieldName?: string): string{
		let message;
		let campo = form.get(field);
    		// Si no recibo el nombre del label tomo el nombre del campo del formulario
		if(!fieldName)
      fieldName = field;

    return this.getErrorMessageGeneric(campo as UntypedFormControl, fieldName);

  }
  static getErrorMessageByFormControl(formControl: UntypedFormControl, fieldName: string){
    return this.getErrorMessageGeneric(formControl, fieldName);
  }
  private static getErrorMessageGeneric(formControl: AbstractControl, fieldName?: string): string{
		let message;
		let campo = formControl;


		let friendlyName: string= "";

		if (fieldName?.startsWith("id") || fieldName?.startsWith("codigo"))
			friendlyName = fieldName.replace("id", "").replace("codigo", "");
		else
			friendlyName = fieldName? fieldName.toString(): "";


		let result:string = "";
    result = friendlyName.replace(/([A-Z])/g, " $1");
		friendlyName = (result.charAt(0) + result.slice(1)).toLowerCase();

		/*=====================================================================================================
		  Validaciones default de Angular
	  =======================================================================================================*/
		if (campo.hasError("required")) {
			message = "El campo " + friendlyName + " es requerido";
		}

		if (campo.hasError("minlength")) {
			let minLength;
			if (campo.errors)
				minLength = campo.errors["minlength"].requiredLength;

			message =
				"El campo " +
				friendlyName +
				" debe tener al menos " +
				minLength +
				"  caracteres";
		}

		if (campo.hasError("maxlength")) {
			let maxLength;
			if (campo.errors)
				maxLength = campo.errors["maxlength"].requiredLength;

			message =
				"El campo " +
				friendlyName +
				" debe tener menos de " +
				maxLength +
				"  caracteres";
		}

		if (campo.hasError("pattern")) {
			message = "El campo " + friendlyName + " no tiene el formato correcto";
		}
		if(campo.hasError('max')){
	        let maxValue;
	        if (campo.errors)
	            maxValue = campo.errors["max"].max;

	        message = "El campo " + friendlyName + " no puede ser mayor a " + maxValue;
	    }

	    if(campo.hasError('min')){
	        let minValue;
	        if (campo.errors)
	            minValue = campo.errors["min"].min;

	        message = "El campo " + friendlyName + " no puede ser menor a " + minValue;
	    }

		if (campo.hasError("email")) {
			message = "El campo " + friendlyName + " no tiene el formato correcto";
		}

		/*=====================================================================================================
			Custom Validations
		=======================================================================================================*/
		if (campo.hasError("validarCuit")) {
			message = campo.getError("validarCuit").mensaje;
		}

		if (campo.hasError("validarPasswordPolicy")) {
			message = campo.getError("validarPasswordPolicy").mensaje;
		}

		if (campo.hasError("validarDni")) {
			message = campo.getError("validarDni").mensaje;
		}
		if (campo.hasError("equalsTo")) {
			message = campo.getError("equalsTo").mensaje;
		}
		return message;
	}



	static getErrorMessageForRadioButton(form: UntypedFormGroup, field: string, fieldName?: string): string {

		let message = "";
		let campo = form.get(field);

		// Si no recibo el nombre del label tomo el nombre del campo del formulario
		if(!fieldName)
        	fieldName = field;


		let friendlyName;

		if (fieldName.startsWith("id") || fieldName.startsWith("codigo"))
			friendlyName = fieldName.replace("id", "").replace("codigo", "");
		else
			friendlyName = fieldName;

		/*=====================================================================================================
		  Validaciones default de Angular
	  =======================================================================================================*/
		if (campo?.hasError("required") && campo?.touched) {
			message = "El campo " + friendlyName + " es requerido";
		}
		return message;
	}
}
