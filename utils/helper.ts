import { v4 as uuidv4 } from 'uuid';

export function generateShortUUID() {
  const uuid = uuidv4().replace(/-/g, '');
  return uuid.slice(0, 2) + uuid.slice(-2);
}