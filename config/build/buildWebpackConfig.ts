import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugin } from "./buildPlugin";
import { buildResolves } from "./buildResolves";
import path from "path";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;


    return  {
        mode: mode,
      
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugin(options),
        module: {
            rules: buildLoaders(options)
          },
          resolve: buildResolves(),
          devtool: isDev ? 'inline-source-map' : undefined,
          devServer: isDev ? buildDevServer(options) : undefined,
      }
}