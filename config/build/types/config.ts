export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export type BuildMode = 'development' | 'production';

export interface BuildSettings {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
}

export interface DevServerSettings {
  port: number;
  workDir: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}
