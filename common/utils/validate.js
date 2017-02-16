export function onValidate(value, states) {
        return (value !== null && value.length > 3) ? states[0] : states[1];
}