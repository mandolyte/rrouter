While my Github Action seems to work ok, the code produced/installed does not actually work. I suspect this may be a recent change to capacitor. I debugged their code and found a fix, but then discovered that it is already corrected in the repo, but has not been released to NPM yet. So I asked about it here: https://forum.ionicframework.com/t/deprecation-of-injectcapacitor-method/186779

I also ended up making a PR to fix a minor problem (https://github.com/ionic-team/capacitor/pull/2717) involving how the splash screen works.

It is also possible that something about my little test app causes the bug to manifest, because this was not a problem with either book-package-app or tc-create-app when I tested them. I plan to test my new action with book-package-app next. But think we need to hear back from Ionic before making further use it.

```
$ yarn electron:start
yarn run v1.22.4
$ electron ./

(electron) The default value of app.allowRendererProcessReuse is deprecated, it is currently "false".  It will chan
ge to be "true" in Electron 9.  For more information please check https://github.com/electron/electron/issues/18397
Cannot read property 'SplashScreen' of undefined

WARNING: injectCapacitor method is deprecated and will be removed in next major release. Check release notes for mi
gration instructions

Trace
    at getURLFileContents (C:\Users\mando\Projects\cecil.new\r2\electron\node_modules\@capacitor\electron\index.js:
7:11)
    at injectCapacitor (C:\Users\mando\Projects\cecil.new\r2\electron\node_modules\@capacitor\electron\index.js:20:
33)
    at Timeout._onTimeout (C:\Users\mando\Projects\cecil.new\r2\electron\node_modules\@capacitor\electron\index.js:
156:44)
    at listOnTimeout (internal/timers.js:531:17)
    at processTimers (internal/timers.js:475:7)
error Command failed with exit code 2147483651.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
$
```


```
    ipcMain.on('hideCapacitorSplashScreen', (event, options) => {
      this.hide();
    });
  }

  init(inject = false) { // changed from true to false
    let rootPath = app.getAppPath();

    this.splashWindow = new BrowserWindow({
      width: this.splashOptions.windowWidth,
```

```
$ yarn electron:start
yarn run v1.22.4
$ electron ./

(electron) The default value of app.allowRendererProcessReuse is deprecated, it is currently "false".  It will chan
ge to be "true" in Electron 9.  For more information please check https://github.com/electron/electron/issues/18397
Cannot read property 'SplashScreen' of undefined
Done in 12.76s.
$
```



splash
```
    try {
      let capConfigJson = JSON.parse(fs.readFileSync(`./capacitor.config.json`, 'utf-8'));
      this.splashOptions = Object.assign(
        this.splashOptions,
        capConfigJson.plugins.SplashScreen || {}
      );
    } catch (e) {
      console.error(e.message);
    }
```

```
    try {
      let capConfigJson = JSON.parse(fs.readFileSync(`./capacitor.config.json`, 'utf-8'));
      let ss = {};
      if ( capConfigJson.plugins !== undefined ) {
        if ( capConfigJson.plugins.SplashScreen !== undefined ) {
          ss = capConfigJson.plugins.SplashScreen;
        }
      }
      this.splashOptions = Object.assign(
        this.splashOptions,
        ss
      );
    } catch (e) {
      console.error(e.message);
    }
```

```
$ yarn electron:start
yarn run v1.22.4
$ electron ./

(electron) The default value of app.allowRendererProcessReuse is deprecated, it is currently "false".  It will chan
ge to be "true" in Electron 9.  For more information please check https://github.com/electron/electron/issues/18397
Done in 35.13s.
$
```
