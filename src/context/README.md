# Sistema de Internacionalización (i18n)

## Uso del hook `useLanguage`

Para usar las traducciones en cualquier componente:

```tsx
'use client';

import { useLanguage } from '@/hooks';

export default function MiComponente() {
	const { language, dictionary, changeLanguage } = useLanguage();

	return (
		<div>
			<h1>{dictionary.InformationMain.title}</h1>
			<p>{dictionary.InformationMain.description}</p>
		</div>
	);
}
```

## Propiedades disponibles:

- **`language`**: Idioma actual ('es' | 'en')
- **`dictionary`**: Objeto con todas las traducciones del idioma actual
- **`changeLanguage(lang)`**: Función para cambiar el idioma

## Estructura del diccionario:

Los archivos `es.json` y `en.json` en `src/json/dictionaries/` contienen todas las traducciones organizadas por secciones:

- `Page`: Configuración de página
- `Navigation`: Elementos del menú
- `InformationMain`: Contenido principal
- `Metadata`: Metadatos del sitio
- Y más...

## Características:

✅ Persistencia en localStorage
✅ Actualización automática del atributo `lang` en HTML
✅ Cambio de idioma en tiempo real
✅ TypeScript type-safe
