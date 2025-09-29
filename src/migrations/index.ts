import * as migration_20250929_110046_v0_1 from './20250929_110046_v0_1';

export const migrations = [
  {
    up: migration_20250929_110046_v0_1.up,
    down: migration_20250929_110046_v0_1.down,
    name: '20250929_110046_v0_1'
  },
];
