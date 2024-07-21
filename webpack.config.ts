import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public' , 'index.html'),
    workDir: path.resolve(__dirname, 'src'),
}

export default (env: BuildEnv): webpack.Configuration  => {
    const { mode, port } = env;
    const isDev = mode === 'development'; 

    const config = buildWebpackConfig({
        mode: mode || 'development',
        paths,
        isDev,
        port: port || 4001
    });

    return config;
};