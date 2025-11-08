para importar la base de datos 
🖥️ Importar Datos Usando MongoDB Compass (en el Otro PC)
En el otro PC donde clonaste el proyecto:

Abre MongoDB Compass y conéctate a tu instancia local de MongoDB.

Crea la base de datos: Si no existe, puedes crearla haciendo clic en el botón + y nombrando tu base de datos (ej., fastparking_db).

Selecciona la DB y Crea la Colección: Haz clic en tu base de datos y luego en el botón + Create Collection. Nombra la colección (ej., usuarios).

Ve a la pestaña "Importar": Haz clic en la colección que acabas de crear (ej., usuarios). En la parte superior, haz clic en la pestaña "Import Data" (o "Importar Datos").

Importa el Archivo:

Haz clic en "Select File" (Seleccionar Archivo) y navega hasta el archivo JSON que descargaste de GitHub (ej., usuarios.json).

Verifica que el formato sea JSON.

Haz clic en "Import".

Repite el paso 3 y 4 para todas las colecciones que exportaste. Esto crea la estructura de tu base de datos y carga todos los datos, dejándola lista para que tu backend se conecte.
