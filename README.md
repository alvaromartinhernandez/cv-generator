# CV React - Plantilla Personalizable

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Plantilla de CV profesional desarrollada con React que permite:
- Fácil personalización mediante archivo JSON
- Generación de PDF listo para imprimir
- Diseño optimizado para impresión y digital

![Captura del CV](public/cv-screenshot.png) *(Reemplazar con tu propia captura)*

## Características principales

- ✅ 100% responsive y accesible
- ✅ Optimizado para generación de PDF
- ✅ Fácil personalización mediante archivo JSON
- ✅ Diseño limpio y profesional
- ✅ Soporte para múltiples idiomas

## Generación de PDF

Esta aplicación está especialmente diseñada para generar un CV en formato PDF:

1. **Preparación para impresión**:
   - Ejecuta la aplicación en modo desarrollo o producción
   - Abre la vista de impresión de Chrome (`Ctrl+P` o `Cmd+P`)
   - Selecciona "Guardar como PDF"

2. **Configuración recomendada**:
   - Diseño: Vertical
   - Escala: 90%
   - Márgenes: Ninguno
   - Opciones: Marcar "Gráficos de fondo"

3. **Optimizaciones incluidas**:
   - Estilos CSS específicos para impresión
   - Diseño adaptado a tamaño A4
   - Fuentes legibles en papel
   - Espaciado controlado para evitar cortes

## 🚀 Cómo usar esta plantilla

### 1. Clonar el repositorio
```bash
git clone https://github.com/alvaromartinhernandez/cv-generator
cd tu-repositorio
```

### 2. Instalar dependencias
```bash
npm install
# o
yarn install
```

### 3. Configurar tus datos
1. **Copiar el archivo de ejemplo**:
   ```bash
   cp src/data/data.example.json src/data/data.json
   ```

2. **Editar con tu información** (ejemplo):
   ```json
   {
     "personal": {
       "name": "Tu Nombre",
       "title": "Tu Profesión"
     }
   }
   ```

### 4. Generar PDF
1. Abre la app en Chrome
2. Presiona `Ctrl + P` (Windows/Linux) o `Cmd + P` (Mac)
3. Configura:
   - **Destino**: "Guardar como PDF"
   - **Márgenes**: "Ninguno"
   - **Opciones**: Activar "Gráficos de fondo"

## Estructura del proyecto
```
src/app/
├── components/
├── data/
└── page.js
```
