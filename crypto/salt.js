// Salt is a random string that is prepended to generate a hash.

const { scyptSync, randomBytes } = require('crypto');

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scyptSync(password, salt, 64);

    // Store salt with hashed password. 
    const user = { email, password: `${salt}${hashedPassword}`}

    return {
        email,
        password: hash,
        salt
    };
}

function login(email, password) {
    const user = users.find(user => user.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scyptSync(password, salt, 64);

    const keybuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keybuffer);
    
    if (match) {
        return 'login successful'
    } else {
        return 'login failed'
    }
}