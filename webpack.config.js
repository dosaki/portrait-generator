import {resolve} from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, 'app', 'js'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  resolve: {
    fallback: {
      "crypto": false
    }
  }
};