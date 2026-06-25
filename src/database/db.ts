import * as SQLite from 'expo-sqlite';

// Tipo TypeScript para un contacto
export type Contacto = {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  ciudad: string;
};

// Instancia única de la base de datos
let db: SQLite.SQLiteDatabase | null = null;

// Abre la BD y crea la tabla si no existe
export async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
  if (!db) {
    db = await SQLite.openDatabaseAsync('artisan.db');

    // Crea la tabla con 4 campos + llave primaria
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS contactos (
        id       INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre   TEXT NOT NULL,
        telefono TEXT NOT NULL,
        email    TEXT NOT NULL,
        ciudad   TEXT NOT NULL
      );
    `);
  }
  return db;
}

// ── CRUD ──────────────────────────────────────────────

export async function insertarContacto(
  nombre: string, telefono: string, email: string, ciudad: string
): Promise<void> {
  const database = await getDatabase();
  await database.runAsync(
    'INSERT INTO contactos (nombre, telefono, email, ciudad) VALUES (?, ?, ?, ?)',
    [nombre, telefono, email, ciudad]
  );
}

export async function obtenerContactos(): Promise<Contacto[]> {
  const database = await getDatabase();
  return await database.getAllAsync<Contacto>(
    'SELECT * FROM contactos ORDER BY id DESC'
  );
}

export async function actualizarContacto(
  id: number, nombre: string, telefono: string, email: string, ciudad: string
): Promise<void> {
  const database = await getDatabase();
  await database.runAsync(
    'UPDATE contactos SET nombre = ?, telefono = ?, email = ?, ciudad = ? WHERE id = ?',
    [nombre, telefono, email, ciudad, id]
  );
}

export async function eliminarContacto(id: number): Promise<void> {
  const database = await getDatabase();
  await database.runAsync('DELETE FROM contactos WHERE id = ?', [id]);
}