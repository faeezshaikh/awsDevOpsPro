# AWSDevOpsPro


sudo ionic build android --prod --release
rm *.apk
cp /Users/faeezshaikh/git/awsSolArchPro/platforms/android/build/outputs/apk/android-release-unsigned.apk .
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore awsArch-key.keystore android-release-unsigned.apk awsArch-
/Users/faeezshaikh/Library/Android/sdk/build-tools/23.0.2/zipalign -v 4 android-release-unsigned.apk AWS-Certified-Pro-Arch.apk


For iOS Release:
https://ionicframework.com/docs/v1/guide/publishing.html
For Signing certs error (Udemy vid) & 
https://stackoverflow.com/questions/37806538/code-signing-is-required-for-product-type-application-in-sdk-ios-10-0-stic#answer-39498874


SimpleTimer
==========
npm install ng2-simple-timer

Ionic Native Uninstall & Reinstall
====================================
https://stackoverflow.com/questions/43652515/module-has-no-exported-member-ionicnativeplugin-ionic2-for-facebook



Troubleshooting:
===============
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb kill-server
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb start-server
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb devices

=======

TypeError: Cannot read property 'substr' of undefined
    at Function.<anonymous> (/Users/faeezshaikh/git/awsDevOpsPro/node_modules/source-map/lib/source-node.js:115:26)
    at Array.forEach (native)
    at BasicSourceMapConsumer.SourceMapConsumer_eachMapping [as eachMapping] (/Users/faeezshaikh/git/awsDevOpsPro/node_modules/source-map/lib/source-map-consumer.js:155:14)
    at Function.SourceNode_fromStringWithSourceMap [as fromStringWithSourceMap] (/Users/faeezshaikh/git/awsDevOpsPro/node_modules/source-map/lib/source-node.js:80:24)
    at SourceMapSource.node (/Users/faeezshaikh/git/awsDevOpsPro/node_modules/webpack-sources/lib/SourceMapSource.js:42:20)
    at ReplaceSource.node (/Users/faeezshaikh/git/awsDevOpsPro/node_modules/webpack-sources/lib/ReplaceSource.js:69:29)
    at CachedSource.node (/Users/faeezshaikh/git/awsDevOpsPro/node_modules/webpack-sources/lib/CachedSource.js:12:23)
    at /Users/faeezshaikh/git/awsDevOpsPro/node_modules/webpack-sources/lib/ConcatSource.js:40:49
    at Array.map (native)
    at ConcatSource.node (/Users/faeezshaikh/git/awsDevOpsPro/node_modules/webpack-sources/lib/ConcatSource.js:39:60)

npm ERR! Darwin 16.4.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "ionic:serve" "--" "--v2" "--address" "0.0.0.0" "--port" "8102" "--livereload-port" "35731"
npm ERR! node v7.8.0
npm ERR! npm  v4.2.0
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! awsDevOpsPro@ ionic:serve: `ionic-app-scripts serve "--v2" "--address" "0.0.0.0" "--port" "8102" "--livereload-port" "35731"`
npm ERR! Exit status 1



Solution:
--------

https://stackoverflow.com/questions/41907409/typeerror-cannot-read-property-substr-of-undefined-source-node-js

And exchanging all 2 times this appears:

var nextLine = remainingLines[0];
To this

var nextLine = remainingLines[0] || '';



Update to lastes version of node
==============================
sudo npm cache clean -f
sudo npm install -g n
sudo n stable


Error:
Node Sass does not yet support your current environment (macOS 10.12.1, Node 7.0.0)
https://github.com/sass/node-sass/issues/1764

    npm rebuild node-sass


=========







Known Issues:
0. Change icon. too think text
1. Reset Password , enter invalid email..nothing happened (Get 400 Bad Request) - Reset Password when tested with invalid or unpresent email does a 400 bad request with no response to user on UI.
2. Error Msg on Registration (blank Emails)..very ugly msg..But dont change since its dynamic
3. . Update links in Social sharing -? 
4. Randomize Questions and within questions randomize options


bug: Timer up causes page to crash when scrollToTop fails on menu list home page.
Bug: going back to list while timer is running will elapse timer on the lists page









Nice to have:
1. Ionic Cloud - Push Notification
3. Slides on login to walk through

Cross-promotion (in-house ads)
chat with author
Chat with other users
Comment on a question


Till ! # 70 from pdf


FB Mobile App Ads:
https://developers.facebook.com/videos/f8-2016/driving-growth-with-mobile-app-ads/


