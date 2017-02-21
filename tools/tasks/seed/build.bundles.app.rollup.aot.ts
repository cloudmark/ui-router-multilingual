import Config from '../../config';
import { writeFile } from 'fs';
import { join } from 'path';

const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const includePaths = require('rollup-plugin-includepaths');
// const alias = require('rollup-plugin-alias');
const rollup = require('rollup');

const config = {
  entry: join(Config.TMP_DIR, Config.BOOTSTRAP_FACTORY_PROD_MODULE),
  sourceMap: true,
  treeshake: true,
  moduleName: 'main',
  plugins: [
    includePaths({
      include: {},
      paths: [join(Config.TMP_DIR, 'app')],
      external: [],
      extensions: ['.js', '.json', '.html', '.ts']
    }),
    // alias({
    //   'ui-router-core': '/Users/markgalea/Dev/Source/Suprnation/angular-poc/angular-seed/node_modules/ui-router-core/',
    //   'ui-router-ng2': '/Users/markgalea/Dev/Source/Suprnation/angular-poc/angular-seed/node_modules/ui-router-ng2/'
    // }),
    nodeResolve({
      jsnext: true, module: true, main:true,
      // skip: ['ui-router-core', 'ui-router-ng', 'ui-router-rx']
    }),
    commonjs({
      include: 'node_modules/**',
      // namedExports: {
      //   'node_modules/ui-router-ng2/_bundles/ui-router-ng2.js': ['UIRouterModule','Transition'],
      //   'node_modules/ui-router-core/lib/index.js': [ 'TransitionService', 'extend','UIRouter','flattenR', 'trace','ResolveContext','NATIVE_INJECTOR_TOKEN', 'pick', 'forEach', 'ViewService','services',
      //     'PathFactory','unnestR','tail','Param','anyTrueR','UIRouterGlobals','servicesPlugin','Resolvable','StateRegistry','StateService','UrlMatcherFactory','UrlRouter','UrlService',
      //     'isFunction','isDefined','isString','parseUrl','BaseLocationServices','is'],
      //   'node_modules/ui-router-rx/lib/index.js': ['UIRouterRx']
      // }
    })
  ]
};


export = (done: any) => {
  rollup.rollup(config)
    .then((bundle: any) => {
      const result = bundle.generate({
        format: 'iife'
      });
      const path = join(Config.TMP_DIR, 'bundle.js');
      writeFile(path, result.code, (error: any) => {
        if (error) {
          console.error(error);
          process.exit(0);
        }
        done();
      });
    })
    .catch((error: any) => {
      console.error(error);
      process.exit(0);
    });
};
