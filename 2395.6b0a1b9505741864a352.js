"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2395],{2395:function(e,a,t){t.r(a),t(7378);var n=t(2682);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",o({components:a},t),(0,n.kt)("p",null,"Because JavaScript can be written for both server and browser, webpack offers multiple deployment ",(0,n.kt)("em",{parentName:"p"},"targets")," that you can set in your webpack ",(0,n.kt)("a",{href:"/configuration",parentName:"p"},"configuration"),"."),(0,n.kt)("aside",{className:"warning"},(0,n.kt)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,n.kt)("p",{parentName:"aside"},"The webpack ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," property is not to be confused with the ",(0,n.kt)("inlineCode",{parentName:"p"},"output.libraryTarget")," property. For more information see ",(0,n.kt)("a",{href:"/concepts/output/",parentName:"p"},"our guide")," on the ",(0,n.kt)("inlineCode",{parentName:"p"},"output")," property.")),(0,n.kt)("h2",{id:"usage"},"Usage",(0,n.kt)("a",{href:"#usage","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"To set the ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," property, you set the target value in your webpack config:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  target",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'node'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"In the example above, using ",(0,n.kt)("inlineCode",{parentName:"p"},"node")," webpack will compile for usage in a Node.js-like environment (uses Node.js ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," to load chunks and not touch any built in modules like ",(0,n.kt)("inlineCode",{parentName:"p"},"fs")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"path"),")."),(0,n.kt)("p",null,"Each ",(0,n.kt)("em",{parentName:"p"},"target")," has a variety of deployment/environment specific additions, support to fit its needs. See what ",(0,n.kt)("a",{href:"/configuration/target/",parentName:"p"},"targets are available"),"."),(0,n.kt)("aside",{className:"todo"},(0,n.kt)("h6",{className:"todo__prefix",parentName:"aside"},"todo"),(0,n.kt)("p",{parentName:"aside"},"Further expansion for other popular target values")),(0,n.kt)("h2",{id:"multiple-targets"},"Multiple Targets",(0,n.kt)("a",{href:"#multiple-targets","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Although webpack does ",(0,n.kt)("strong",{parentName:"p"},"not")," support multiple strings being passed into the ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," property, you can create an isomorphic library by bundling two separate configurations:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," path ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'path'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," serverConfig ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  target",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'node'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  output",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    path",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," path",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'dist'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'lib.node.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//…"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," clientConfig ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  target",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'web'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// <=== can be omitted as default is 'web'"),"\n  output",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    path",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," path",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'dist'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'lib.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//…"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),"serverConfig",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," clientConfig",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"The example above will create a ",(0,n.kt)("inlineCode",{parentName:"p"},"lib.js")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"lib.node.js")," file in your ",(0,n.kt)("inlineCode",{parentName:"p"},"dist")," folder."),(0,n.kt)("h2",{id:"resources"},"Resources",(0,n.kt)("a",{href:"#resources","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"As seen from the options above, there are multiple deployment ",(0,n.kt)("em",{parentName:"p"},"targets")," that you can choose from. Below is a list of examples and resources that you can refer to."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{href:"https://github.com/TheLarkInn/compare-webpack-target-bundles",parentName:"strong"},"compare-webpack-target-bundles")),": A great resource for testing and viewing different webpack ",(0,n.kt)("em",{parentName:"li"},"targets"),". Also great for bug reporting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{href:"https://github.com/chentsulin/electron-react-boilerplate",parentName:"strong"},"Boilerplate of Electron-React Application")),": A good example of a build process for electron's main process and renderer process.")),(0,n.kt)("aside",{className:"todo"},(0,n.kt)("h6",{className:"todo__prefix",parentName:"aside"},"todo"),(0,n.kt)("p",{parentName:"aside"},"Need to find up to date examples of these webpack targets being used in live code or boilerplates.")))}s.isMDXComponent=!0,a.default=s}}]);