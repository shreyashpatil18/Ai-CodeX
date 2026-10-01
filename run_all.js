import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const backendDir = path.resolve(__dirname, '..', 'Ai Customer', 'backend');
const pythonExe = path.join(backendDir, 'venv', 'Scripts', 'python.exe');
const viteBin = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

console.log('[Runner] Starting FastAPI Backend on http://127.0.0.1:8000 ...');
const backend = spawn(pythonExe, ['-m', 'uvicorn', 'app.main:app', '--host', '127.0.0.1', '--port', '8000'], {
  cwd: backendDir,
  stdio: 'inherit',
  shell: false,
});

console.log('[Runner] Starting Vite Frontend on http://127.0.0.1:5173 ...');
const frontend = spawn(process.execPath, [viteBin, '--host', '127.0.0.1', '--port', '5173'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: false,
});

backend.on('error', (err) => console.error('[Backend Error]:', err));
frontend.on('error', (err) => console.error('[Frontend Error]:', err));

process.on('SIGINT', () => {
  backend.kill();
  frontend.kill();
  process.exit();
});
