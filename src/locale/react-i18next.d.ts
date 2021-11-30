import 'react-i18next';

import { ko } from './data';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      ko: typeof ko;
    };
  }
}
