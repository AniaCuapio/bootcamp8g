import { saveInfo, saveData } from "../ p12_javascript_queryselector/index.js";


describe('Crear objeto con info del nodo', () => {
    test('Primera opción', () => {
        expect(saveInfo()).toBe(typeof (Object));
    });
    test('Segunda opción', () => {
        expect(saveData()).toBe(typeof (Object));
    });
});
