import type { CapacitorConfig } from '@capacitor/cli';

// 当前文件：Folia Capacitor 容器的构建与 WebView 配置（Android / iOS）。

const config: CapacitorConfig = {
  appId: 'top.izuna.foliamajor.cc122ss',
  appName: 'Folia',
  webDir: 'dist',
  loggingBehavior: 'debug',
  backgroundColor: '#09090b',
  server: {
    androidScheme: 'https',
    // iOS 侧用 capacitor:// 这个自定义 scheme 加载本地资源。
    // 不用 https:// 是因为 iOS 的 ATS 与 WKWebView 对本地文件加载的默认行为
    // 配合自定义 scheme 最稳，Capacitor 官方模板也是这个配置。
    iosScheme: 'capacitor',
    hostname: 'localhost',
    cleartext: false,
  },
  ios: {
    // 内容延伸到刘海屏区域，配合 StatusBar 的 overlaysWebView 做全沉浸。
    contentInset: 'never',
    // 允许横屏：播放器是横屏视觉更舒服，但竖屏也得能用，所以两个都开。
    // 'both' 表示同时支持竖屏与横屏并自动旋转。
    orientation: 'both',
    // 背景色跟应用主题一致，避免启动瞬间的白屏闪烁。
    backgroundColor: '#09090b',
    // WKWebView 的滚动条跟桌面端行为一致，沉浸式界面不需要系统滚动条。
    scrollEnabled: true,
    limitsNavigationsToAppBoundDomains: false,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 900,
      backgroundColor: '#09090b',
      showSpinner: false,
    },
    StatusBar: {
      // overlaysWebView: true 让网页内容铺到状态栏后面，播放器才够沉浸。
      // StatusBar 插件在 iOS 上就是靠这个实现状态栏浮在内容之上。
      overlaysWebView: true,
      style: 'LIGHT',
      backgroundColor: '#09090b',
    },
  },
};

export default config;
