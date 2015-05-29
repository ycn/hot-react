// fis-conf.js

var LOCAL_HOME = "/Users/andy";


fis.config.merge({
    deploy: {
        //本地环境
        local: {
            //from参数省略，表示从发布后的根目录开始上传
            to: LOCAL_HOME + '/.fis-pure-tmp/www/hot-react',
            replace: {
                from: 'http://s.hotdev.cn',
                to: 'http://127.0.0.1:8080/hot-react'
            }
        },
        test: {
            to: LOCAL_HOME + '/www/html/hot-react',
            replace: {
                from: 'http://s.hotdev.cn',
                to: 'http://127.0.0.1/hot-react'
            }
        },
        prod: {
            to: '/www/html/hot-react',
            replace: {
                from: 'http://s.hotdev.cn/static/',
                to: 'http://s.hotdev.cn/'
            }
        }
    },
    project: {
        md5Length: 8,
        exclude: [
            '**.sh',
            '**/bower.json',
            '**/component.json',
            '**/composer.json',
            '**.min.js',
            '**/LICENSE',
            '**/PATENTS',
            'lib/**.html',
            'modules/**.html',
            'webapp/**'
        ],
        fileType: {
            text: 'tpl, js, css, jsx'
        }
    },
    pack: {
        'js/post_lib.js': [
            '/post_lib/**.js'
        ],
        'js/lib.js': [
            '/lib/**.js'
        ],
        'js/app.js': [
            '/modules/**.js'
        ],
        'css/app.css': [
            '/css/**.css',
            '/modules/**.css'
        ]
    },
    roadmap: {
        domain: "http://s.hotdev.cn",
        path: [
            {
                reg: 'favicon.ico',
                useHash: false,
                release: '/favicon.ico'
            }
        ]
        //ext: {
        //    //md后缀的文件将输出为html文件
        //    //并且在parser之后的其他处理流程中被当做html文件处理
        //    //md: 'html',
        //    //coffee后缀的文件将输出为js文件
        //    //并且在parser之后的其他处理流程中被当做js文件处理
        //    coffee: 'js',
        //    //less后缀的文件将输出为css后缀
        //    //并且在parser之后的其他处理流程中被当做css文件处理
        //    less: 'css',
        //    //sass,scss后缀的文件将输出为css后缀
        //    //并且在parser之后的其他处理流程中被当做css文件处理
        //    sass: 'css',
        //    scss: 'css',
        //    jsx: 'js'
        //}
    },
    modules: {
        parser: {
            ////md后缀的文件使用fis-parser-marked插件编译
            ////md: 'marked',
            ////coffee后缀的文件使用fis-parser-coffee-script插件编译
            //coffee: 'coffee-script',
            ////less后缀的文件使用fis-parser-less插件编译
            ////处理器支持数组，或者逗号分隔的字符串配置
            //less: ['less'],
            ////sass,scss后缀的文件使用fis-parser-sass插件编译
            //sass: 'sass',
            //scss: 'sass',
            js: 'react'
        },
        preprocessor: {
            //css后缀文件会经过fis-preprocessor-image-set插件的预处理
            css: 'image-set'
        },
        lint: {
            //js后缀文件会经过fis-lint-jshint插件的代码校验检查
            js: 'jshint'
        },
        spriter: 'csssprites',
        optimizer: {
            //html: 'html-minifier',
            //js: 'shutup, uglify-js',
            js: 'uglify-js',
            css: 'clean-css',
            png: 'png-compressor'
        },
        postprocessor: {
            js: 'jswrapper'
        },
        postpackager: ['autoload', 'simple']
    },
    settings: {
        postprocessor: {
            jswrapper: {
                //wrap type. if omitted, it will wrap js file with '(function(){...})();'.
                type: 'amd',
                //you can use template also, ${content} means the file content
                //template : '!function(){${content}}();',
                //wrap all js file, default is false, wrap modular js file only.
                wrapAll: false
            }
        }
    }
});


//设置jshint插件要排除检查的文件，默认不检查lib、jquery、backbone、underscore等文件
//使用pure release命令时，添加--lint或-l参数即可生效
fis.config.set('settings.lint.jshint.ignored', ['lib/**', 'post_lib/**', '**.jsx', '**.react.js']);

//csssprite处理时图片之间的边距，默认是3px
fis.config.set('settings.spriter.csssprites.margin', 20);


//开始autoCombine可以将零散资源进行自动打包
fis.config.set('settings.postpackager.simple.autoCombine', true);
//开启autoReflow使得在关闭autoCombine的情况下，依然会优化脚本与样式资源引用位置
fis.config.set('settings.postpackager.simple.autoReflow', true);

//使用pngquant进行压缩，png图片压缩后均为png8
fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');

