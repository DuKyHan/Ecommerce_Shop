import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';

import subconfigs from './subconfigs';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  cache: true,
  expandVariables: true,
  envFilePath: '.env',
  load: subconfigs,
};
