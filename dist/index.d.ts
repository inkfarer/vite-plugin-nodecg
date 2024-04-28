import type { Plugin } from 'vite';
export interface PluginConfig {
    /** Use to map input files to template paths
     *
     * @default {
        'graphics/*.{js,ts}': './src/graphics/template.html',
        'dashboard/*.{js,ts}': './src/dashboard/template.html',
    }
    */
    inputs?: {
        [key: string]: string;
    } | undefined;
    /** Base directory for input-file paths
     * @default './src'
     */
    srcDir?: string | undefined;
}
export default function viteNodeCGPlugin(pluginConfig: PluginConfig): Plugin;
