import { AbstractControl, ValidationErrors } from "@angular/forms"
import { docTypes } from "app/advance-table/advance-table.model";

const documentValidator = () => {
	return (control: AbstractControl) : ValidationErrors | null => {
		const type = control.get('docType')?.value;
		const docValue = control.get('document')?.value;
		switch (type) {
			case docTypes.CC: {
				const regex = /^\d+$/g;
				const validDoc = regex.test(docValue) && (docValue.length === 8 || docValue.length === 10);
				return validDoc ? null : { validDoc: true };
			}
			case docTypes.CE: {
				const regex = /^\d+$/g;
				const validDoc = regex.test(docValue) && (docValue.length === 6 || docValue.length === 7);
				return validDoc ? null : { validDoc: true };
			}
			case docTypes.PASSPORT: {
				const regex = /(?=.*[a-zA-Z])(?=.*\d).+$/g;
				const validDoc = regex.test(docValue) && (docValue.length === 8);
				return validDoc ? null : { validDoc: true };
			}
			case docTypes.NIT: {
				const regex = /^\d+$/g;
				const validDoc = regex.test(docValue) && (docValue.length === 9);
				return validDoc ? null : { validDoc: true };
			}
			default:
				return null;
		}
	}
}
export default documentValidator;