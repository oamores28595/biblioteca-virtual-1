async function loginViaApi(page, correo, password) {
    // Perform API login and set localStorage before navigation
    const res = await page.request.post('http://localhost:3000/api/auth/login', {
        data: { correo, password }
    });
    if (res.status() !== 200) {
        throw new Error(`API login failed with status ${res.status()}`);
    }
    const body = await res.json();
    const token = body.token;
    const bibliotecario = body.bibliotecario;

    // Add init script so that localStorage is set before page.goto
    await page.addInitScript(({ token, bibliotecario }) => {
        window.localStorage.setItem('bv_token', token);
        window.localStorage.setItem('bv_bibliotecario', JSON.stringify(bibliotecario));
    }, { token, bibliotecario });

    return { token, bibliotecario };
}

module.exports = { loginViaApi };