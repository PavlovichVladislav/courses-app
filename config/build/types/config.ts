export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}
  
export interface BuildSettings { 
  mode: 'development' | 'production';
  paths: BuildPaths;
  isDev: boolean;
}