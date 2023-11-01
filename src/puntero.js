export const puntero = () => {
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.puntero');
        if (cursor) {
            if (e.target.classList.contains('puntero')) {
                // Aquí puedes realizar acciones específicas para el elemento con la clase .puntero
                console.log("Mouse moved over .puntero");
            }
        }
    });
};