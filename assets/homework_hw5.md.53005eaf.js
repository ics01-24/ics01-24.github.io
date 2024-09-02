import{_ as s,o as n,c as a,a as e}from"./app.0bbd2e7a.js";const D=JSON.parse('{"title":"\u4F5C\u4E1A\u4E94","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F5C\u4E1A\u8BF4\u660E","slug":"\u4F5C\u4E1A\u8BF4\u660E"},{"level":2,"title":"T1","slug":"t1"},{"level":2,"title":"T2","slug":"t2"},{"level":2,"title":"T3","slug":"t3"},{"level":2,"title":"T4","slug":"t4"},{"level":2,"title":"T5","slug":"t5"},{"level":2,"title":"T6","slug":"t6"},{"level":2,"title":"T7","slug":"t7"},{"level":2,"title":"T8","slug":"t8"},{"level":2,"title":"T9","slug":"t9"},{"level":2,"title":"T10","slug":"t10"}],"relativePath":"homework/hw5.md","lastUpdated":1725270852000}'),l={name:"homework/hw5.md"},o=e(`<h1 id="\u4F5C\u4E1A\u4E94" tabindex="-1">\u4F5C\u4E1A\u4E94 <a class="header-anchor" href="#\u4F5C\u4E1A\u4E94" aria-hidden="true">#</a></h1><h2 id="\u4F5C\u4E1A\u8BF4\u660E" tabindex="-1">\u4F5C\u4E1A\u8BF4\u660E <a class="header-anchor" href="#\u4F5C\u4E1A\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>\u4F5C\u4E1A\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u6216\u82F1\u6587\u5B8C\u6210\uFF0C<strong>\u8BF7\u52FF\u6284\u88AD</strong></li><li>BB \u7CFB\u7EDF\u4E0A\u8BF7\u63D0\u4EA4 <strong>\u7535\u5B50\u7248 PDF</strong>\uFF0C\u5141\u8BB8 LaTeX\u3001Markdown\u3001Word\u3001\u624B\u5199\u62CD\u7167\u7B49</li><li>Deadline: 12 \u6708 03 \u65E5 23:30\uFF0C<strong>\u903E\u671F 0 \u5206</strong></li><li>\u672C\u6B21\u4F5C\u4E1A <a href="/pdf/hw5.pdf">PDF</a></li><li><a href="/pdf/ans5.pdf">\u7B54\u6848</a> \u5DF2\u53D1\u5E03</li></ul><h2 id="t1" tabindex="-1">T1 <a class="header-anchor" href="#t1" aria-hidden="true">#</a></h2><p>What is the purpose of the <code>.END</code> pseudo-op? How does it differ from the <code>HALT</code> instruction?</p><h2 id="t2" tabindex="-1">T2 <a class="header-anchor" href="#t2" aria-hidden="true">#</a></h2><p>What are the definitions of a <em>queue</em>?</p><h2 id="t3" tabindex="-1">T3 <a class="header-anchor" href="#t3" aria-hidden="true">#</a></h2><p>The following program has an error in it. What is the error? How would you fix it?</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    .ORIG x3000</span></span>
<span class="line"><span style="color:#A6ACCD;">A   .FILL xDEAD</span></span>
<span class="line"><span style="color:#A6ACCD;">B   .FILL xBEEF</span></span>
<span class="line"><span style="color:#A6ACCD;">    LD R0, A</span></span>
<span class="line"><span style="color:#A6ACCD;">    ST R0, B</span></span>
<span class="line"><span style="color:#A6ACCD;">    HALT</span></span>
<span class="line"><span style="color:#A6ACCD;">    .END</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="t4" tabindex="-1">T4 <a class="header-anchor" href="#t4" aria-hidden="true">#</a></h2><p>Suppose you write two separate assembly language modules that you expect to be combined by the linker. Each module uses the label <code>AGAIN</code>, and neither module contains the pseudo-op <code>.EXTERNAL AGAIN</code>. Is there a problem using the label <code>AGAIN</code> in both modules? Why or why not?</p><h2 id="t5" tabindex="-1">T5 <a class="header-anchor" href="#t5" aria-hidden="true">#</a></h2><p>Your friend has just written a simple program intended to calculate complements, which is as follows:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    .ORIG x3000</span></span>
<span class="line"><span style="color:#A6ACCD;">    ; Simple program that should calculate </span></span>
<span class="line"><span style="color:#A6ACCD;">    ; complement of DATA and store the result back</span></span>
<span class="line"><span style="color:#A6ACCD;">    LD R2, DATA</span></span>
<span class="line"><span style="color:#A6ACCD;">    NOT R2, R2</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD R2, R2, #1</span></span>
<span class="line"><span style="color:#A6ACCD;">    ST R2, DATA</span></span>
<span class="line"><span style="color:#A6ACCD;">DATA .FILL xF001</span></span>
<span class="line"><span style="color:#A6ACCD;">    .END</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>However, it does not seem to be reliable for some reason...</p><p>Questions:</p><ol><li>What&#39;s the 2&#39;s complement of <code>xF001</code> in hex?</li><li>Will the program store the complement to <code>DATA</code>?</li><li>What will happen afterwards? Why?</li></ol><blockquote><p>Open questions (Answer if you like, but it <strong>WILL NOT</strong> be graded): What&#39;s the root cause of this phenomenon? How can we prevent this from happening?</p></blockquote><h2 id="t6" tabindex="-1">T6 <a class="header-anchor" href="#t6" aria-hidden="true">#</a></h2><p>What&#39;s the difference between pseudo-ops <code>.FILL</code>, <code>.BLKW</code> and <code>.STRINGZ</code> in LC3?</p><h2 id="t7" tabindex="-1">T7 <a class="header-anchor" href="#t7" aria-hidden="true">#</a></h2><p>It is often useful to find the midpoint between two values. <strong>For this problem, assume A and B are both even numbers, and A is less than B.</strong> For example, if A = 2 and B = 8, the midpoint is 5. The following program finds the midpoint of two even numbers A and B by continually incrementing the smaller number and decrementing the larger number. You can assume that <code>A</code> and <code>B</code> have been loaded with values before this program starts execution.</p><p>Your job: Insert the missing instructions.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    .ORIG x3000</span></span>
<span class="line"><span style="color:#A6ACCD;">    LD R0, A</span></span>
<span class="line"><span style="color:#A6ACCD;">    LD R1, B</span></span>
<span class="line"><span style="color:#A6ACCD;">X   ________________ (a)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ________________ (b)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD R2, R2, R1</span></span>
<span class="line"><span style="color:#A6ACCD;">    ________________ (c)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD R1, R1, #-1</span></span>
<span class="line"><span style="color:#A6ACCD;">    ________________ (d)</span></span>
<span class="line"><span style="color:#A6ACCD;">    BRnzp X</span></span>
<span class="line"><span style="color:#A6ACCD;">DONE ST R1,C</span></span>
<span class="line"><span style="color:#A6ACCD;">    TRAP x25</span></span>
<span class="line"><span style="color:#A6ACCD;">A   .BLKW 1</span></span>
<span class="line"><span style="color:#A6ACCD;">B   .BLKW 1</span></span>
<span class="line"><span style="color:#A6ACCD;">C   .BLKW 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    .END</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="t8" tabindex="-1">T8 <a class="header-anchor" href="#t8" aria-hidden="true">#</a></h2><p>We all know that we can achieve left-shift by adding the number to itself. For example, <code>ADD R0, R0, R0</code> will left-shift <code>R0</code> by 1 bit. However, <strong>right-shift</strong> is not that easy. Complete the following LC3 program so that it will right-shift <code>R0</code> by 1 bit. Note that some comments have been deleted.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    .ORIG x3000</span></span>
<span class="line"><span style="color:#A6ACCD;">    ; Suppose R0 is already loaded with the target number</span></span>
<span class="line"><span style="color:#A6ACCD;">    ; Initialize</span></span>
<span class="line"><span style="color:#A6ACCD;">    AND R1, R1, #0      ; Result</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD R2, R1, #15     ; Loop var i</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD R3, R1, #__ (a) ; 1 &lt;&lt; (**DELETED**)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD R4, R1, #1      ; 1 &lt;&lt; (15 - i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    AND R5, R5, #0      ; Temp result</span></span>
<span class="line"><span style="color:#A6ACCD;">    ; Main Loop</span></span>
<span class="line"><span style="color:#A6ACCD;">L   AND R5, R3, R0      ; Test bit</span></span>
<span class="line"><span style="color:#A6ACCD;">    BR___ (b) N         ; **DELETED**</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD R1, R1, R4      ; Add to result</span></span>
<span class="line"><span style="color:#A6ACCD;">N   ADD R3, __, __ (c)  ; **DELETED**</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD R4, R4, R4      ; L-shift R4</span></span>
<span class="line"><span style="color:#A6ACCD;">    ADD __, __, __ (d)  ; **DELETED**</span></span>
<span class="line"><span style="color:#A6ACCD;">    BRp L</span></span>
<span class="line"><span style="color:#A6ACCD;">    ; End</span></span>
<span class="line"><span style="color:#A6ACCD;">    HALT</span></span>
<span class="line"><span style="color:#A6ACCD;">    .END</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="t9" tabindex="-1">T9 <a class="header-anchor" href="#t9" aria-hidden="true">#</a></h2><p>The following operations are performed on a stack:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">PUSH A</span></span>
<span class="line"><span style="color:#A6ACCD;">PUSH B</span></span>
<span class="line"><span style="color:#A6ACCD;">POP</span></span>
<span class="line"><span style="color:#A6ACCD;">PUSH C</span></span>
<span class="line"><span style="color:#A6ACCD;">POP</span></span>
<span class="line"><span style="color:#A6ACCD;">PUSH D</span></span>
<span class="line"><span style="color:#A6ACCD;">PUSH E</span></span>
<span class="line"><span style="color:#A6ACCD;">PUSH F</span></span>
<span class="line"><span style="color:#A6ACCD;">POP</span></span>
<span class="line"><span style="color:#A6ACCD;">PUSH G</span></span>
<span class="line"><span style="color:#A6ACCD;">POP</span></span>
<span class="line"><span style="color:#A6ACCD;">POP</span></span>
<span class="line"><span style="color:#A6ACCD;">POP</span></span>
<span class="line"><span style="color:#A6ACCD;">PUSH H</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>What dose the stack contain after the <code>PUSH H</code> ?</li><li>At which point does the stack contain the most element?</li></ol><p>Without removing the element left in the stack from the previous operations, we change this stack to a queue (the front of queue is the top of stack), and perform</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ENQUEUE I</span></span>
<span class="line"><span style="color:#A6ACCD;">DEQUEUE</span></span>
<span class="line"><span style="color:#A6ACCD;">ENQUEUE J</span></span>
<span class="line"><span style="color:#A6ACCD;">ENQUEUE K</span></span>
<span class="line"><span style="color:#A6ACCD;">DEQUEUE</span></span>
<span class="line"><span style="color:#A6ACCD;">ENQUEUE L</span></span>
<span class="line"><span style="color:#A6ACCD;">DEQUEUE</span></span>
<span class="line"><span style="color:#A6ACCD;">DEQUEUE</span></span>
<span class="line"><span style="color:#A6ACCD;">DEQUEUE</span></span>
<span class="line"><span style="color:#A6ACCD;">DEQUEUE</span></span>
<span class="line"><span style="color:#A6ACCD;">ENQUEUE M</span></span>
<span class="line"><span style="color:#A6ACCD;">DEQUEUE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>What does the stack contain now?</li></ol><h2 id="t10" tabindex="-1">T10 <a class="header-anchor" href="#t10" aria-hidden="true">#</a></h2><p>Write a function that implements another stack function, <code>PEEK</code>. <code>PEEK</code> returns the value of the top element of the stack without removing the element from the stack. The return value is stored in <code>R0</code>, so you don&#39;t need to save <code>R0</code>. <code>PEEK</code> should also do underflow error checking: if an underflow occurs, you should output the string &quot;Stack underflow error&quot; and halt. (Suppose the pointer of top of the stack is in <code>R6</code>, and the stack can only take up the memory space from <code>x3FFF</code> to <code>x3FF0</code>)</p>`,37),p=[o];function t(c,i,r,d,A,h){return n(),a("div",null,p)}const u=s(l,[["render",t]]);export{D as __pageData,u as default};
