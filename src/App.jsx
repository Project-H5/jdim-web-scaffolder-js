import darkModeHelper, { DragonReporter, useDarkMode, getRadiusByHeight } from "@jd/jdimwebutilskit"
import { useEffect } from "react";
import './App.css';

export const App = () => {

    const dra = new DragonReporter();

    let isDarkMode = useDarkMode();

    const switchMode = () => {
        isDarkMode = !isDarkMode;
        darkModeHelper.setDarkTheme(isDarkMode);
    }

    useEffect(() => {
        dra.report({
            code: '0',
            subCode: '0',
            biz: 'jdim-web-scaffolder-ts',
            operation: 'useEffect',
            result: true,
            elapsed: 0
        });
    }, []);

    return <div className="App">
        <header className="center-header">
            <h1>咚咚H5脚手架-TypeScript版</h1>
        </header>
        <div className="content">
            <div className="section1">
                <h2>业务功能</h2>
                <ol className="split-list left-list">
                    <li>
                        暗黑模式
                        <ul>
                            <li>预置暗黑适配相关接口</li>
                            <li>预置暗黑适配相关资源</li>
                        </ul>
                        <button className="switch-button" onClick={() => switchMode()}>点击切换</button>
                    </li>
                    <li>
                        烛龙监控
                        <ul>
                            <li>性能监控（自动采集）</li>
                            <li>请求监控（自动采集）</li>
                            <li>白屏监控（自动采集）</li>
                            <li>JS错误（自动采集）</li>
                            <li>静态资源监控（自动采集）</li>
                            <li>业务监控相关接口</li>
                        </ul>
                        <a className="dragon-entrance" href="http://dra.jd.com/platform/h5Monitor/flag/1192/newH5/page/overview" target="_blank">咚咚H5监控平台入口</a>
                    </li>
                    <li>
                        圆角适配
                        <ul>
                            <li>圆角大小获取接口</li>
                        </ul>
                        <div className="radius-div" style={{ borderRadius: getRadiusByHeight(20), height: '20px' }}>高度20</div>
                        <div className="radius-div" style={{ borderRadius: getRadiusByHeight(40), height: '40px' }}>高度40</div>
                        <div className="radius-div" style={{ borderRadius: getRadiusByHeight(60), height: '60px' }}>高度60</div>
                    </li>
                </ol>
            </div>
            <div className="section2">
                <h2>配置功能</h2>
                <div className="split-list-container">
                    <ol className="split-list left-list">
                        <li>
                            React 环境
                            <ul>
                                <li>预装最新版本的 React 和 ReactDOM</li>
                                <li>支持所有现代 React 特性，如 Hooks</li>
                            </ul>
                        </li>
                        <li>
                            Webpack 构建系统
                            <ul>
                                <li>自动配置的生产和开发构建过程</li>
                                <li>代码分割和打包优化</li>
                            </ul>
                        </li>
                        <li>
                            Babel 转译
                            <ul>
                                <li>支持最新的 JavaScript 特性</li>
                                <li>JSX 转译</li>
                                <li>可配置的浏览器兼容性</li>
                            </ul>
                        </li>
                        <li>
                            CSS 支持
                            <ul>
                                <li>支持 CSS 模块</li>
                                <li>支持 Sass（需要安装 node-sass）</li>
                                <li>PostCSS 处理（如自动添加浏览器前缀）</li>
                            </ul>
                        </li>
                        <li>
                            开发服务器
                            <ul>
                                <li>内置的开发服务器，支持热模块替换（HMR）</li>
                                <li>自动刷新浏览器</li>
                            </ul>
                        </li>
                        <li>
                            代码优化
                            <ul>
                                <li>生产环境下的代码压缩和优化</li>
                                <li>移除无用代码</li>
                            </ul>
                        </li>
                    </ol>
                    <ol className="split-list right-list">
                        <li>
                            ESLint
                            <ul>
                                <li>预配置的 ESLint 设置</li>
                                <li>在开发过程中提供实时的代码质量反馈</li>
                            </ul>
                        </li>
                        <li>
                            测试环境
                            <ul>
                                <li>Jest 测试框架</li>
                                <li>内置的测试运行器</li>
                            </ul>
                        </li>
                        <li>
                            环境变量
                            <ul>
                                <li>内置支持 .env 文件</li>
                                <li>区分开发和生产环境的环境变量</li>
                            </ul>
                        </li>
                        <li>
                            PWA 支持
                            <ul>
                                <li>可选的 Progressive Web App 功能</li>
                                <li>包括 Service Worker 和 Web App Manifest
                                </li>
                            </ul>
                        </li>
                        <li>
                            文件处理
                            <ul>
                                <li>支持图片、字体等静态资源的导入</li>
                                <li>文件指纹（文件名哈希）用于缓存破坏</li>
                            </ul>
                        </li>
                        <li>
                            错误处理
                            <ul>
                                <li>开发环境下的错误覆盖层</li>
                                <li>生产环境下的错误报告</li>
                            </ul>
                        </li>
                        <li>
                            代码分割
                            <ul>
                                <li>支持动态 import() 语法</li>
                                <li>自动生成代码分割点</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
}