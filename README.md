# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# API NASA Asteroids Dashboard

El Dashboard web que consume datos de la API pública de NASA para visualizar información sobre asteroides cercanos a la Tierra.

## Características

- Consumo de API pública de NASA (Near Earth Objects).
- Filtro por rango de fechas.
- Visualización de datos mediante gráficos.
- Métricas rápidas de asteroides.
- Dashboard interactivo.

## API utilizada

NASA Near Earth Object Web Service (NeoWs)

https://api.nasa.gov/

Endpoint utilizado:

https://api.nasa.gov/neo/rest/v1/feed

## Tecnologías utilizadas

- React
- Vite
- Axios
- Recharts
- JavaScript

## Estructura del proyecto

src/

components/
charts/
AsteroidsChart.jsx
HazardousChart.jsx

dashboard/
MetricCard.jsx

filters/
DateFilter.jsx

services/
nasaApi.js

utils/
transformAsteroidData.js
hazardousAsteroidsData.js
dashboardMetrics.js

App.jsx

## Capturas del Proyecto 

En la carpeta con la ubicación 
public/
screenshots/ 

Se encontrarán las capturas del proceso de que llevo del proyecto desde que se añadió la primera gráfica, se añadió el filtro, se agregó la segunda gráfica y se añadió un contenedor con información total de asteroides, los que eran peligroso y los que no lo eran. 

## Instalación

Clonar el repositorio:

```bash
git clone <repository-url>
