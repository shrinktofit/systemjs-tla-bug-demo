import { reporter } from './dep-c.js';
import './dep-a.js';

reporter('b');
await new Promise(resolve => setTimeout(resolve, 20)).then(() => {
    reporter('b');
});

export {};