
export class Validations {

    static nameRegex: RegExp = /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:[\s'-][A-ZÁÉÍÓÚÑa-záéíóúñ]+)+$/
    static emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    static movilRegex: RegExp = /^(\+34\s?|34\s?|0)?[6-9]\d{2}([-.\s]?\d{3}){2}$/

    static nameValidation(name: string) {
        if (!this.nameRegex.test(name)) {
            return false;
        }
        return true;
    }

    static emailValidation(email: string) {
        if (!this.emailRegex.test(email)) {
            return false
        }
        return true
    }

    static movilValidation(movil: string) {
        if (!this.movilRegex.test(movil)) {
            return false;
        }
        return true;
    }


}



