webpackJsonp([60383714059621],{518:function(s,n){s.exports={data:{blog:{html:'<p>Ever needed to apply middleware to specific controller methods? Just use the <code class="language-text">middleware()</code> method in the controller\'s constructor and feed it a middleware and array of method names.</p>\n<blockquote>\n<p>Protip: You can stack middleware as much as you want (just don\'t lock yourself out!). If you need to apply different middleware, or complex \'only\' and \'except\' situations, call the middleware method as much as you need.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">//... the class</span>\n<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n<span class="token punctuation">{</span>\n    <span class="token comment">// Apply middleware to only certain routes</span>\n    <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'auth\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'only\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'create\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'store\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'edit\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'delete\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// Or apply middleware to all routes except these</span>\n    <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'auth\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'except\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token single-quoted-string string">\'index\'</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'show\'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">✅ <a href="https://twitter.com/hashtag/Laravel?src=hash&amp;ref_src=twsrc%5Etfw">#Laravel</a> <a href="https://twitter.com/hashtag/ProTip?src=hash&amp;ref_src=twsrc%5Etfw">#ProTip</a> You can apply your middleware to specific routes in the controller&#39;s construct method 👌 <a href="https://t.co/BU7taP0ksv">https://t.co/BU7taP0ksv</a> <a href="https://t.co/6UQc2gYMU4">pic.twitter.com/6UQc2gYMU4</a></p>&mdash; Ryosuke (@whoisryosuke) <a href="https://twitter.com/whoisryosuke/status/1001976417826017280?ref_src=twsrc%5Etfw">May 30, 2018</a></blockquote>\n<p>Before writing this post, this wasn\'t in the Laravel docs. I could have swore I\'ve seen it since, but just in case, I\'ve archived it here.</p>\n<p>Hope that helps,\nRyo</p>\n<hr>\n<p><strong>References</strong></p>\n<ul>\n<li><a href="https://twitter.com/whoisryosuke/status/1001976417826017280">Original tweet</a></li>\n<li><a href="https://gist.github.com/whoisryosuke/902f2ebd3b1e0c232b85b0c6ac255105">See the code gist</a></li>\n<li><a href="https://laravel.com/docs/5.6/eloquent-resources#concept-overview">Laravel docs - Resource Collections</a></li>\n<li><a href="https://laracasts.com/discuss/channels/general-discussion/apply-middleware-for-certain-methods?page=0">Laracasts middleware thread</a></li>\n</ul>',frontmatter:{title:"shortcode - Apply middleware to Laravel controller methods",cover_image:{publicURL:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac.jpg",childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3E%3Cpath d='M0 134v133h10c11 0 14-1 14-6l1-1c1 0 3-5 3-9 0-2 0-3 2-3s2-1 2-4v-4h4l4-1h8l5-3 6-4c2 0 2-1 2-4v-4h6c4 0 5 0 5-2s1-2 4-2c4 0 7 2 7 3 0 3 4 5 8 5h5v-12h8v-8h16v-8h4c4 0 4 0 4-2 0-3 0-3 4-3l4-1c0-2 1-2 4-2l4-1c0-2 2-2 8-2 8 0 8 0 8-2 0-3 0-3 4-3 3 0 4 0 4 2l1 2 3-2 3-2 1-3c0-3 2-4 4-2l2 1c2 0 4-3 3-4l3-6 2 3 2 4v-9h8v4l1 4 1-4c0-3 0-4 2-4l1-4c0-3 0-4 2-4l1-1 4-1 8-2c3-2 4-2 4-1 0 2 1 2 4 2l4-1c0-2 1-2 4-2l4-1h2c2 2 2 2 3 0 2-1 2-2-1-3l-8-2-4-1h4l9-1 7-2c4 0 4 0 4-3s0-3 4-3 4 0 4-2c0-3 0-3 4-3l4-1 4-1h4v-4c0-5 0-5 3-4l4-1c2-2 3-4 1-3s-7-1-5-2c1-1 1-1-1-1-2 1-5-4-4-9l1-5c1-3 12-1 12 3h2l1-2 4-4-1 2v1l2-2h4c2-3 1-3-3-3l-4 1-1 1-1-1c0-3 10-3 12 0 1 1 1 1 2-1 1-1 1-1 1 1-1 2 0 3 2 3l2 3 2-1 4-3 4-2v3l2 4c0 2 0 2-1 1l-1-1 1 3v3l1 3 1-5c0-8 1-9 5-9h1c-3 0-2-3 1-2 2 0 2 0 1-1s-1-1 2-1 3 0 2 1l-2 1-1 1 2 1v1l1 2 1 1c0-3 2-2 2 1s0 3 1 1l1-4c1 0 1-1-1-1-1-1-1-1 1-1 3 0 3-2 0-3h-2l2-1 3 1h1l3 2h2l-1-2 3-3c1 1 2 2 2 5v5l1-4c0-4 0-4 1-2v4l1 1 1-2 2-3c1-1 1-1-1-1-2 1-2 0-2-1 0-2 0-2 1-1l4 1 4 1h-2l-1 1 3 1h1c0 2 4 1 5-1l1-2 1-1c0-2 1-2 4-2 4 0 4 0 4-2l1-3 1-4-1-4-1-1c0-2 1-2 4-2s4 0 4 2l4 1h4v93c0 81 1 75 1-40V0H0v134m263-36l-1 3v10c-1 1-1 1-2-2l-2-2h-3c-3-2-3-4-1-4v1l1 1h1v1l1-2v-1c3 1 3-1 1-2-3-1-10 2-10 5 0 2 0 2 1 1l1-1c1 1 2 3 4 3l3 3c-1 3-3 4-6 1l-3-2 1 2v3a1139 1139 0 0 1 9 0c2-1 2-1 2 1s2 0 2-3c1-2 1-2 1 0 0 5 2 3 3-3 0-6 1-8 4-8 2 1 2 1 2 5v8c2 5 4 5 3-1 0-3 0-3 1 0l1 1v-3l-1-5c1-5-2-7-7-7-3 1-4 1-3-1v-5c-1-1-2 0-3 3' fill='lightgray' fill-rule='evenodd'/%3E%3C/svg%3E",src:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg",srcSet:"/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-7cc04.jpg 310w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-69042.jpg 620w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-4e8db.jpg 1240w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-50ab1.jpg 1860w,\n/static/shortcode-code-snippets-88148405a821950263064ed5b62734ac-e738f.jpg 1920w"}}},date:"30 May, 2018",tags:["laravel","php","api","shortcode","code snippet","tips"],section:"blog"},fields:{slug:"/blog/2018/shortcode-laravel-apply-middleware-in-controller/"}},relatedPosts:{edges:[{node:{html:'<p>I had to do some development on another computer recently, and after settling down in front of a desk with the default VSCode config, I quickly realized how much of my local environment and workflow needed to be configured and installed. </p>\n<h2>Backing up your VSCode setup ⬇️</h2>\n<p>Luckily, VSCode makes it a fairly easy process to backup your settings and extensions. Your configuration is a JSON file, making it a effortless copy and paste scenario. And as for the extensions, you just install a bash script to back everything up. This generates a list of Bash commands that install each individual extension:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">code --list-extensions <span class="token operator">|</span> <span class="token function">xargs</span> -L 1 <span class="token keyword">echo</span> code --install-extension\n</code></pre>\n      </div>\n<blockquote>\n<p>To install the code Bash alias on Mac, go to Command Palette and type "install command" to find the shell script. Make sure to install it on both your backup, and new computer.</p>\n</blockquote>\n<h2>My setup 🎨</h2>\n<h3>JSON Configuration 🔧</h3>\n<p>Not too much special here. Only a couple customizations of hotkeys (I used to use Sublime, so I prefer those shortcuts). I modified the Palenight Italic theme because I didn\'t like the contrast of some sections (like the sidebar color).</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"workbench.colorTheme"</span><span class="token operator">:</span> <span class="token string">"Palenight Italic"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.fontFamily"</span><span class="token operator">:</span> <span class="token string">"Fira Code"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.fontSize"</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n    <span class="token property">"workbench.iconTheme"</span><span class="token operator">:</span> <span class="token string">"material-icon-theme"</span><span class="token punctuation">,</span>\n    <span class="token property">"sublimeTextKeymap.promptV3Features"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.multiCursorModifier"</span><span class="token operator">:</span> <span class="token string">"ctrlCmd"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.snippetSuggestions"</span><span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.formatOnPaste"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"window.zoomLevel"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">"workbench.colorCustomizations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"[Palenight Italic]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">"sideBar.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"sideBarSectionHeader.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"tab.activeBackground"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"editor.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"editorHoverWidget.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"debugExceptionWidget.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"peekViewTitle.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"panel.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"statusBar.noFolderBackground"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"notifications.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"debugToolBar.background"</span><span class="token operator">:</span> <span class="token string">"#222635"</span><span class="token punctuation">,</span>\n            <span class="token property">"tab.inactiveBackground"</span><span class="token operator">:</span> <span class="token string">"#2d3244"</span><span class="token punctuation">,</span>\n            <span class="token property">"tab.inactiveForeground"</span><span class="token operator">:</span> <span class="token string">"#929ac9"</span><span class="token punctuation">,</span>\n            <span class="token property">"sideBar.foreground"</span><span class="token operator">:</span> <span class="token string">"#7179a1"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"javascript.updateImportsOnFileMove.enabled"</span><span class="token operator">:</span> <span class="token string">"never"</span><span class="token punctuation">,</span>\n    <span class="token property">"files.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"*.js"</span><span class="token operator">:</span> <span class="token string">"javascriptreact"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Extensions ⚙️</h3>\n<p>Just a few of the must-haves. </p>\n<ul>\n<li><strong>Project Manager</strong> is great for keeping track of projects across your computer/drives. </li>\n<li><strong>ES7 / ReactJS</strong> snippets are a must.Start typing <code class="language-text">r</code>...to get premade React component structures (like functional or Redux containers)</li>\n<li><strong>PHP Intellisense</strong> - This is a must for PHP developers working with complex application. Hover over any method/function to see it\'s documentation, and click the tooltip to navigate directly to the function\'s source file.</li>\n<li><strong>PHP Docblocker</strong> - Makes documenting PHP code easy. Type <code class="language-text">/**</code> to generate a docblock based on your function. It\'ll automatically pick up things like the return value and toss it in your docs (complete with type checking).</li>\n<li><strong>Todo Tree</strong> - If you ever find yourself leaving <code class="language-text">// @todo</code> comments in your code, this extension will scan your code and find all them to place in a todo list.</li>\n<li><strong>Polacode</strong> - Great way to quickly take screenshots of your code, all styled with your editors theme.</li>\n<li><strong>Multi-line find and replace</strong> - Ever need to copy more than one line of code without adding regex manually? Select text, open up the command palette, and choose this plugin to copy a valid regex search. This is essential for VSCode since it doesn\'t support this by default.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">code <span class="token operator">--</span>install<span class="token operator">-</span>extension alefragnani<span class="token punctuation">.</span>project<span class="token operator">-</span>manager\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension axlan<span class="token punctuation">.</span>multiline<span class="token operator">-</span>find<span class="token operator">-</span>and<span class="token operator">-</span>replace\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension cjhowe7<span class="token punctuation">.</span>laravel<span class="token operator">-</span>blade\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension dbaeumer<span class="token punctuation">.</span>vscode<span class="token operator">-</span>eslint\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension dsznajder<span class="token punctuation">.</span>es7<span class="token operator">-</span>react<span class="token operator">-</span>js<span class="token operator">-</span>snippets\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension felixfbecker<span class="token punctuation">.</span>php<span class="token operator">-</span>intellisense\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension Gruntfuggly<span class="token punctuation">.</span>todo<span class="token operator">-</span>tree\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension HookyQR<span class="token punctuation">.</span>beautify\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension joelday<span class="token punctuation">.</span>docthis\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension juanmnl<span class="token punctuation">.</span>vscode<span class="token operator">-</span>theme<span class="token operator">-</span>hydra\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension kumar<span class="token operator">-</span>harsh<span class="token punctuation">.</span>graphql<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">-</span>vscode\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension leighlondon<span class="token punctuation">.</span>eml\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension mikestead<span class="token punctuation">.</span>dotenv\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension ms<span class="token operator">-</span>vscode<span class="token punctuation">.</span>sublime<span class="token operator">-</span>keybindings\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension neilbrayfield<span class="token punctuation">.</span>php<span class="token operator">-</span>docblocker\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension neilding<span class="token punctuation">.</span>language<span class="token operator">-</span>liquid\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension octref<span class="token punctuation">.</span>vetur\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension PKief<span class="token punctuation">.</span>material<span class="token operator">-</span>icon<span class="token operator">-</span>theme\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension pnp<span class="token punctuation">.</span>polacode\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension sdras<span class="token punctuation">.</span>night<span class="token operator">-</span>owl\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension whizkydee<span class="token punctuation">.</span>material<span class="token operator">-</span>palenight<span class="token operator">-</span>theme\ncode <span class="token operator">--</span>install<span class="token operator">-</span>extension zhuangtongfa<span class="token punctuation">.</span>Material<span class="token operator">-</span>theme\n</code></pre>\n      </div>\n<h2>What\'s your setup like? 💻</h2>\n<p>I\'m always interested in learning from other\'s workflows and maybe some lesser known extensions that are must-haves. Let me know what your VSCode setup looks like in the comments! 👍</p>\n<p>Cheers 🍻\nRyo</p>',frontmatter:{title:"My Visual Studio Code Setup 🎨",cover_image:{publicURL:"/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5.jpg",childImageSharp:{sizes:{src:"/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-4e8db.jpg",srcSet:"/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-7cc04.jpg 310w,\n/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-69042.jpg 620w,\n/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-4e8db.jpg 1240w,\n/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-50ab1.jpg 1860w,\n/static/vs-code-setup-1920px-de765469176d2c3a2768535156194ca5-e738f.jpg 1920w"}}},date:"27 July, 2018",tags:["vscode","tips","resource"]},fields:{slug:"/blog/2018/my-visual-studio-code-setup/"}}},{node:{html:'<p>Have you been developing a <a href="http://nextjs.org">NextJS</a> app with dynamic routing (using maybe Express), and found that every time you make a change you have to do the tedious process of shutting down the server (CTRL+C) and restarting it? (<code class="language-text">npm run dev</code>).</p>\n<p>If you\'re used to working with <a href="http://nodejs.org">NodeJS</a>, or <a href="https://expressjs.com/">ExpressJS</a>, you\'ve probably come across <a href="https://github.com/remy/nodemon">nodemon</a>. It\'s a utility that enables hot reloading on Node-based servers, so that whenever you make a change to a server file and save -- it instantly starts to restart without any prompt from your part.</p>\n<p>But <strong>nodemon doesn\'t work out of the box with NextJS</strong> and requires a <em>small amount</em> of configuration. If you try running nodemon without a config or the proper CLI params, you\'ll find that your server will start acting <em>real wonky</em>. My server started restarting infinitely, because it was detecting changes each time NextJS compiled, triggering an infinite loop of compilations.</p>\n<blockquote>\n<p>This guide assumes you have a NextJS project with dynamic routing setup. You can find a few in <a href="https://github.com/zeit/next.js/tree/master/examples">the examples section of the NextJS repo</a> </p>\n</blockquote>\n<h2>The solution?</h2>\n<p>Nodemon accepts a configuration file, which allows you have a greater degree of control over the process. By adding a few values to this file, we can solve all our issues.</p>\n<h3>Install nodemon</h3>\n<p>If you haven\'t already, install nodemon:</p>\n<p><code class="language-text">npm install --save-dev nodemon</code></p>\n<h3>Create the config file</h3>\n<p>Create a <code class="language-text">nodemon.json</code> file in the project root and paste the following into it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"verbose"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"ignore"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node_modules"</span><span class="token punctuation">,</span> <span class="token string">".next"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"watch"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"server/**/*"</span><span class="token punctuation">,</span> <span class="token string">"server.js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"ext"</span><span class="token operator">:</span> <span class="token string">"js json"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This tells nodemon to ignore the <code class="language-text">.next</code> folder, which is used as a cache for the Next compiler (and triggers the infinite reload). And we also tell it which file to watch for changes from. I keep my server file in a separate server folder, since I have stuff like routes/middleware/etc that need separate files and folders.</p>\n<h3>Update your npm dev script</h3>\n<p>Now you can modify your <code class="language-text">package.json</code> and update the \'dev\' script value to use nodemon instead of the default <code class="language-text">node server.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"dev"</span><span class="token punctuation">:</span> <span class="token string">"nodemon -w server/server.js server/server.js"</span><span class="token punctuation">,</span>\n    <span class="token string">"build"</span><span class="token punctuation">:</span> <span class="token string">"next build"</span><span class="token punctuation">,</span>\n    <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token string">"NODE_ENV=production node server.js"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>Now you can run <code class="language-text">npm run dev</code> and you\'ll have yourself a hot-reloading server.</p>\n<p>I found this solution on <a href="https://github.com/zeit/next.js/issues/791">the NextJS Github issues</a>, where a people were having - go figure - the same issue.</p>\n<p>Hope that helps ✌️\nRyo</p>\n<hr>\n<p><strong>References</strong>:</p>\n<ul>\n<li><a href="https://github.com/remy/nodemon">nodemon</a></li>\n<li><a href="https://github.com/zeit/next.js/issues/791">NextJS Github issue - hot reloading</a></li>\n</ul>',frontmatter:{title:"NextJS Tip: Hot reloading for dynamic servers",cover_image:{publicURL:"/static/NextJS-Tips-Nodemon-1920px-6a346c8ffe4684585c23388268cc5d1f.jpg",childImageSharp:{sizes:{src:"/static/NextJS-Tips-Nodemon-1920px-6a346c8ffe4684585c23388268cc5d1f-4e8db.jpg",srcSet:"/static/NextJS-Tips-Nodemon-1920px-6a346c8ffe4684585c23388268cc5d1f-7cc04.jpg 310w,\n/static/NextJS-Tips-Nodemon-1920px-6a346c8ffe4684585c23388268cc5d1f-69042.jpg 620w,\n/static/NextJS-Tips-Nodemon-1920px-6a346c8ffe4684585c23388268cc5d1f-4e8db.jpg 1240w,\n/static/NextJS-Tips-Nodemon-1920px-6a346c8ffe4684585c23388268cc5d1f-50ab1.jpg 1860w,\n/static/NextJS-Tips-Nodemon-1920px-6a346c8ffe4684585c23388268cc5d1f-e738f.jpg 1920w"}}},date:"25 July, 2018",tags:["nextjs","express","js","es6","tips"]},fields:{slug:"/blog/2018/nextjs-tip-hot-reloading-for-dynamic-servers/"}}}]}},pathContext:{tag:"tips",slug:"/blog/2018/shortcode-laravel-apply-middleware-in-controller/"}}}});
//# sourceMappingURL=path---blog-2018-shortcode-laravel-apply-middleware-in-controller-a4759030857f57c8cc23.js.map