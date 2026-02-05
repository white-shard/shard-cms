import * as migration_20250929_110046_v0_1 from './20250929_110046_v0_1';
import * as migration_20260205_181418 from './20260205_181418';

export const migrations = [
  {
    up: migration_20250929_110046_v0_1.up,
    down: migration_20250929_110046_v0_1.down,
    name: '20250929_110046_v0_1',
  },
  {
    up: migration_20260205_181418.up,
    down: migration_20260205_181418.down,
    name: '20260205_181418'
  },
];
