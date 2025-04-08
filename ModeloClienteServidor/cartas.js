// A continuacion se hara una informacion de las cartas de Clash Royal
let infoCartas = {
    'comunes': [
        {
            'nombre': 'Caballero',
            'tipo': 'Tierra',
            'costo': 3,
            'daño': 100,
            'vida': 800,
            'velocidad': 1.2,
            'alcance': 1
        },
        {
            'nombre': 'Esbirros',
            'tipo': 'Aéreo',
            'costo': 3,
            'daño': 50,
            'vida': 200,
            'velocidad': 1.5,
            'alcance': 2
        },
    ],
    'especiales': [
        {
            'nombre': 'Mago',
            'tipo': 'Tierra',
            'costo': 5,
            'daño': 150,
            'vida': 600,
            'velocidad': 1.2,
            'alcance': 5
        },
        {
            'nombre': 'Dragón',
            'tipo': 'Aéreo',
            'costo': 4,
            'daño': 120,
            'vida': 500,
            'velocidad': 1.5,
            'alcance': 3
        },
    ],
    'legendarias': [
        {
            'nombre': 'Princesa',
            'tipo': 'Tierra',
            'costo': 3,
            'daño': 200,
            'vida': 400,
            'velocidad': 1.2,
            'alcance': 6
        },
        {
            'nombre': 'Chispitas',
            'tipo': 'Tierra',
            'costo': 6,
            'daño': 300,
            'vida': 800,
            'velocidad': 1.5,
            'alcance': 5
        },
    ],
};
module.exports = {
    infoCartas: infoCartas,
}