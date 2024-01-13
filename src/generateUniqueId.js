export default function generateUniqueId() {
    const array = new Uint32Array(2);
    window.crypto.getRandomValues(array);

    const randomValue = array[0] * Math.pow(2, 32) + array[1];

    return `${Date.now()}${randomValue}`;
}