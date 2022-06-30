import { reporter } from './dep-c.js';
import './dep-b.js';

reporter('a');
await new Promise(resolve => setTimeout(resolve, 10)).then(() => {
    reporter('a');
});

export {};