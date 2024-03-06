export class ValidatorService{
    static min(inputValud, min) {
        if(inputValud.length < min) return `Can't be less than ${min} characters`
    }

    static max(inputValud, max) {
        if(inputValud.length > max) return `Can't be more than ${max} characters`
    }
}