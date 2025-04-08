// A continuacion se hara una informacion de las cartas de Clash Royal
let infoCartas = {
    'comunes': [
        {
            'nombre': 'Caballero',
            'tipo': 'tierra',
            'costo': 3,
            'daño': 100,
            'vida': 800,
            'velocidad': 1.2,
            'alcance': 1
        },
        {
            'nombre': 'Esbirros',
            'tipo': 'aereo',
            'costo': 3,
            'daño': 50,
            'vida': 200,
            'velocidad': 1.5,
            'alcance': 2
        },
        {
            'nombre': 'Esqueleto',
            'tipo': 'tierra',
            'costo': 3,
            'daño': 30,
            'vida': 100,
            'velocidad': 1.5,
            'alcance': 1
        },

    ],
    'especiales': [
        {
            'nombre': 'Mago',
            'tipo': 'tierra',
            'costo': 5,
            'daño': 150,
            'vida': 600,
            'velocidad': 1.2,
            'alcance': 5
        },
        {
            'nombre': 'Montapuercos',
            'tipo': 'tierra',
            'costo': 4,
            'daño': 200,
            'vida': 600,
            'velocidad': 1.8,
            'alcance': 1
        },
        {
            'nombre': 'Lapida',
            'tipo': 'tierra',
            'costo': 3,
            'daño': 0,
            'vida': 800,
            'velocidad': 0,
            'alcance': 4
        },

    ],
    'epicas': [
        {
            'nombre': 'Golem',
            'tipo': 'tierra',
            'costo': 8,
            'daño': 300,
            'vida': 3000,
            'velocidad': 0.5,
            'alcance': 1
        },
        {
            'nombre': 'Torre Tesla',
            'tipo': 'tierra',
            'costo': 3,
            'daño': 1000,
            'vida': 900,
            'velocidad': 1.2,
            'alcance': 5
        },
        {
            'nombre': 'Baby Dragón',
            'tipo': 'aereo',
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
            'tipo': 'tierra',
            'costo': 3,
            'daño': 200,
            'vida': 400,
            'velocidad': 1.2,
            'alcance': 6
        },
        {
            'nombre': 'Chispitas',
            'tipo': 'tierra',
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