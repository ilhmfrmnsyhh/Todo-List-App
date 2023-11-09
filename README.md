
### Dokumentasi API - CRUD To-Do List

#### 1. Daftar Semua To-Do List

- **Endpoint:** `GET /api/todos`
- **Deskripsi:** Mendapatkan semua daftar To-Do List.
- **Authorization:** Diperlukan (Token JWT)

**Response 200 OK:**
```json
[
  {
    "id": "12345",
    "title": "Beli Bahan Makanan",
    "completed": false
  },
  {
    "id": "67890",
    "title": "Buat Presentasi",
    "completed": true
  }
]
```

#### 2. Mendapatkan To-Do by ID

- **Endpoint:** `GET /api/todos/:id`
- **Deskripsi:** Mendapatkan To-Do berdasarkan ID.
- **Authorization:** Diperlukan (Token JWT)

**Response 200 OK:**
```json
{
  "_id": "654bc6605309a92bf3c0abc5",
  "createdBy": "654bbf282de5d0df6d9e0bf8",
  "title": "Membuat contoh asd",
  "progress": false,
  "completed": false,
  "createdAt": "2023-11-08T17:33:20.523Z",
  "updatedAt": "2023-11-08T17:33:20.523Z",
  "__v": 0
}
```

#### 3. Membuat To-Do Baru

- **Endpoint:** `POST /api/todos`
- **Deskripsi:** Membuat To-Do baru.
- **Authorization:** Diperlukan (Token JWT)

**Request Body:**
```json
{
  "title": "Membuat contoh asd",
  "progress": true,
  "completed": false
}
```

**Response 201 Created:**
```json
{
  "createdBy": "654bbf282de5d0df6d9e0bf8",
  "title": "Membuat contoh asd",
  "progress": false,
  "completed": false,
  "_id": "654bc6605309a92bf3c0abc5",
  "createdAt": "2023-11-08T17:33:20.523Z",
  "updatedAt": "2023-11-08T17:33:20.523Z",
  "__v": 0
}
```

#### 4. Memperbarui To-Do

- **Endpoint:** `PUT /api/todos/:id`
- **Deskripsi:** Memperbarui To-Do berdasarkan ID.
- **Authorization:** Diperlukan (Token JWT)

**Request Body:**
```json
{
  "title": "Tugas Baru yang Diubah s23",
  "progress": false,
  "completed": true
}
```

**Response 200 OK:**
```json
{
  "_id": "654bbf342de5d0df6d9e0bfb",
  "createdBy": "654bbf282de5d0df6d9e0bf8",
  "title": "Tugas Baru yang Diubah s23",
  "progress": false,
  "completed": true,
  "createdAt": "2023-11-08T17:02:44.028Z",
  "updatedAt": "2023-11-08T17:16:24.618Z",
  "__v": 0
}
```

#### 5. Hapus To-Do by ID

- **Endpoint:** `DELETE /api/todos/:id`
- **Deskripsi:** Hapus To-Do berdasarkan ID.
- **Authorization:** Diperlukan (Token JWT)

**Response 200 OK:**
```json
{
  "message": "Todo berhasil dihapus",
  "deletedTodo": {
    "_id": "654bc4de383475e0ea374993",
    "createdBy": "654bbf282de5d0df6d9e0bf8",
    "title": "Membuat contoh asd",
    "progress": false,
    "completed": false,
    "createdAt": "2023-11-08T17:26:54.356Z",
    "updatedAt": "2023-11-08T17:26:54.356Z",
    "__v": 0
  }
}
```

#### 6. Hapus Semua To-Do Pengguna

- **Endpoint:** `DELETE /api/todos`
- **Deskripsi:** Hapus semua To-Do spesifik pengguna.
- **Authorization:** Diperlukan (Token JWT)

**Response 200 OK:**
```json
{
  "message": "Semua Todo pengguna berhasil dihapus"
}
```

### Dokumentasi API - Sign Up dan Sign In

#### 1. Registrasi Pengguna (Sign Up)

- **Endpoint:** `POST /api/auth/signup`
- **Deskripsi:** Mendaftarkan pengguna baru.

**Request Body:**
```json
{
  "username": "contohuser2",
  "email": "contohuser2@example.com",
  "password": "passwordku"
}
```

**Response 201 Created:**
```json
{
  "_id": "654bc22f8b07ae85351c54e7",
  "email": "contohuser2@example.com"
}
```

#### 2. Masuk (Sign In) dan Dapatkan Token JWT

- **Endpoint:** `POST /api/auth/signin`
- **Deskripsi:** Memungkinkan pengguna masuk dan mendapatkan token JWT.

**Request Body:**
```json
{
  "email": "contohuser@example.com",
  "password": "passwordku"
}
```

**Response 200 OK:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

