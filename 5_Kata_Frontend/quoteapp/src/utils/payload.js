export default function() {
    const token = window.localStorage.getItem('token');
    if( token ) {
        // eslint-disable-next-line no-unused-vars
        const [header, payload, signature] = token.split('.');
        const base64 = payload.replace('-','+').replace('_', '/');
        const payloadObject = JSON.parse(window.atob(base64));
        return payloadObject;
    } else {
        null
    }
}