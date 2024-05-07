export function extractUsername(email) {
    var match = email.match(/^([^@]+)/);

    if (match) {
        return match[1];
    } else {
        return 'Test';
    }
};