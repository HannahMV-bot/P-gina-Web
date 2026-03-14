CLEMONT - Tienda Virtual Responsiva

CLEMONT es una aplicación web moderna de comercio electrónico desarrollada con React y Material UI. La plataforma ofrece una experiencia de usuario fluida, permitiendo a los clientes navegar por un catálogo de productos, gestionar favoritos y controlar un carrito de compras interactivo con persistencia de datos.



Características Principales

Interfaz Ultra-Responsiva: Diseño adaptado para dispositivos móviles, tablets y escritorio.
Gestión de Favoritos: Sistema de guardado de productos preferidos mediante localStorage.
Carrito de Compras Dinámico: Contador de productos con estilo "Badge" integrado.
    * Cálculo automático del total de la compra.
    * Ajuste de cantidades (suma/resta) y eliminación individual o total.
Gestión de Cuenta: Formulario de inicio de sesión y registro con validaciones visuales.
Navegación Intuitiva: Barra de navegación fija con indicadores de estado en tiempo real.
Estética Coherente: Uso de una paleta de colores personalizada (Negro y Naranja #FFA726) para fortalecer la identidad de marca.



Interfaz Gráfica

La interfaz se centra en la claridad y la accesibilidad:
1.Home/Artículos: Grid dinámico que muestra 2 columnas en móviles y 4 en escritorio.
2.Favoritos: Vista limpia de productos guardados con acceso rápido al carrito.
3.Carrito: Desglose detallado de productos con bordes destacados y controles de cantidad ergonómicos.



Arquitectura del Proyecto

El proyecto sigue una estructura modular basada en componentes funcionales de React:


src/
├── components/          # Componentes reutilizables (Navbar, Footer, etc.)
├── views/               # Páginas principales del proyecto
│   ├── Articles.jsx     # Catálogo de productos
│   ├── Myfavorite.jsx   # Vista de productos guardados
│   ├── Mycart.jsx       # Lógica y vista del carrito de compras
│   └── Myaccount.jsx    # Autenticación y perfil
├── App.js               # Enrutador y configuración principal
└── main.js              # Punto de entrada de la aplicación