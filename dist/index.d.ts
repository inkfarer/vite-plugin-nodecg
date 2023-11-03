import type { Plugin } from 'vite';
export interface PluginConfig {
    /** Use to map input files to template paths
     *
     * @default {
        './src/graphics/*.ts': './src/graphics/template.html',
        './src/dashboard/*.ts': './src/dashboard/template.html',
    }
    */
    inputs: {
        [key: string]: string;
    };
}
export default function viteNodeCGPlugin(pluginConfig: PluginConfig): Plugin;
