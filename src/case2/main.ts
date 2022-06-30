import './dep-a.js';
import './dep-b.js';
import { reporter } from './dep-c.js';

export { reporter };

reporter('main');
await new Promise(resolve => setTimeout(resolve, 100)).then(() => {
    reporter('main');
});