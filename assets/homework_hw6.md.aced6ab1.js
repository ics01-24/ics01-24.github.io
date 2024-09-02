import{_ as s,o as n,c as a,a as e}from"./app.454a46e9.js";const l="/assets/hw6-4.56b66b27.png",o="/assets/hw6-10.6fc39f83.png",R=JSON.parse('{"title":"\u4F5C\u4E1A\u516D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F5C\u4E1A\u8BF4\u660E","slug":"\u4F5C\u4E1A\u8BF4\u660E"},{"level":2,"title":"T1","slug":"t1"},{"level":2,"title":"T2","slug":"t2"},{"level":2,"title":"T3","slug":"t3"},{"level":2,"title":"T4","slug":"t4"},{"level":2,"title":"T5","slug":"t5"},{"level":2,"title":"T6","slug":"t6"},{"level":2,"title":"T7","slug":"t7"},{"level":2,"title":"T8","slug":"t8"},{"level":2,"title":"T9","slug":"t9"},{"level":2,"title":"T10","slug":"t10"}],"relativePath":"homework/hw6.md","lastUpdated":1725270852000}'),p={name:"homework/hw6.md"},t=e(`<h1 id="\u4F5C\u4E1A\u516D" tabindex="-1">\u4F5C\u4E1A\u516D <a class="header-anchor" href="#\u4F5C\u4E1A\u516D" aria-hidden="true">#</a></h1><h2 id="\u4F5C\u4E1A\u8BF4\u660E" tabindex="-1">\u4F5C\u4E1A\u8BF4\u660E <a class="header-anchor" href="#\u4F5C\u4E1A\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>\u4F5C\u4E1A\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u6216\u82F1\u6587\u5B8C\u6210\uFF0C<strong>\u8BF7\u52FF\u6284\u88AD</strong></li><li>BB \u7CFB\u7EDF\u4E0A\u8BF7\u63D0\u4EA4 <strong>\u7535\u5B50\u7248 PDF</strong>\uFF0C\u5141\u8BB8 LaTeX\u3001Markdown\u3001Word\u3001\u624B\u5199\u62CD\u7167\u7B49</li><li>Deadline: 12 \u6708 24 \u65E5 23:30\uFF0C<strong>\u903E\u671F 0 \u5206</strong></li><li>\u672C\u6B21\u4F5C\u4E1A <a href="/pdf/hw6.pdf">PDF</a></li><li><a href="/pdf/ans6.pdf">\u7B54\u6848</a> \u5DF2\u53D1\u5E03</li></ul><h2 id="t1" tabindex="-1">T1 <a class="header-anchor" href="#t1" aria-hidden="true">#</a></h2><p>The following nonsense program is assembled and executed.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">        .ORIG x3000</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R2, TEXT</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R3, TEST</span></span>
<span class="line"><span style="color:#A6ACCD;">AGAIN   ADD R3, R3, R2</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R2, R2, #-1</span></span>
<span class="line"><span style="color:#A6ACCD;">        BRnzp TEST</span></span>
<span class="line"><span style="color:#A6ACCD;">TEXT    .STRINGZ &quot;An LC-3 program&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">TEST    BRnp AGAIN</span></span>
<span class="line"><span style="color:#A6ACCD;">        TRAP x25</span></span>
<span class="line"><span style="color:#A6ACCD;">        .END</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>How many times is the loop executed? When the program halts, what is the value in R3? (If you do not want to do the calculation, it is okay to answer this with a mathematical expression.)</p><h2 id="t2" tabindex="-1">T2 <a class="header-anchor" href="#t2" aria-hidden="true">#</a></h2><p>Two students wrote interrupt service routines for an assignment. Both service routines did exactly the same work, but the first student accidentally used <code>RET</code> at the end of his routine, while the second student correctly used <code>RTI</code>. There are three errors that arose in the first student\u2019s program due to his mistake. Describe any two of them.</p><h2 id="t3" tabindex="-1">T3 <a class="header-anchor" href="#t3" aria-hidden="true">#</a></h2><p>After learning the instruction <code>JSR</code>, a student wrote the following program to print a character to the console.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">        .ORIG x3000</span></span>
<span class="line"><span style="color:#A6ACCD;">        JSR A</span></span>
<span class="line"><span style="color:#A6ACCD;">        OUT</span></span>
<span class="line"><span style="color:#A6ACCD;">        BRnzp DONE</span></span>
<span class="line"><span style="color:#A6ACCD;">A       AND R0, R0, #0</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R0, R0, #9</span></span>
<span class="line"><span style="color:#A6ACCD;">        JSR B</span></span>
<span class="line"><span style="color:#A6ACCD;">        RET</span></span>
<span class="line"><span style="color:#A6ACCD;">DONE    HALT</span></span>
<span class="line"><span style="color:#A6ACCD;">ASCII   .FILL x0040</span></span>
<span class="line"><span style="color:#A6ACCD;">B       LD R1, ASCII</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R0, R0, R1</span></span>
<span class="line"><span style="color:#A6ACCD;">        RET</span></span>
<span class="line"><span style="color:#A6ACCD;">        .END</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>What does the student intend to print?</li><li>Will the program print the character? Can you explain why?</li></ol><h2 id="t4" tabindex="-1">T4 <a class="header-anchor" href="#t4" aria-hidden="true">#</a></h2><p>The LC-3 contains the following logic.</p><img src="`+l+`" width="90%"><p>Can you tell what signal <code>X</code> is? When will <code>X</code> be set to 1?</p><blockquote><p>Hint: You may refer to Figure C.2 in the textbook.</p></blockquote><h2 id="t5" tabindex="-1">T5 <a class="header-anchor" href="#t5" aria-hidden="true">#</a></h2><p>Imagine that you are writing a simple LC-3 program that is designed to receive a character from the keyboard and then display that character on the screen.</p><ol><li>How do you check in LC-3 if there is a new character input from the keyboard?</li><li>Once a new character input is detected, how do you read this character from the keyboard?</li><li>How do you display the read character on the screen?</li><li>Provide a simple LC-3 assembly code snippet that demonstrates this process.</li></ol><h2 id="t6" tabindex="-1">T6 <a class="header-anchor" href="#t6" aria-hidden="true">#</a></h2><p>Here&#39;s a subroutine that takes 4 chars in hex from keyboard and store the value they represent in <code>R0</code> using polling technique. Note that it assumes all possible input characters are in <code>0123456789ABCDEF</code>. Some comments have been deleted.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">HEX_INPUT</span></span>
<span class="line"><span style="color:#A6ACCD;">        ST R1, SAVE_R1  ; R1 = Constant 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        ST R2, SAVE_R2  ; R2 = Constant 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        ST R3, SAVE_R3  ; R3 = Chars left (counter)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ST R4, SAVE_R4  ; R4 = **DELETED**</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R1, C1</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R2, C2</span></span>
<span class="line"><span style="color:#A6ACCD;">        AND R3, R3, #0</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R3, R3, #4</span></span>
<span class="line"><span style="color:#A6ACCD;">        AND R0, R0, #0  ; R0 stores our result</span></span>
<span class="line"><span style="color:#A6ACCD;">GETCHAR</span></span>
<span class="line"><span style="color:#A6ACCD;">        ; **DELETED**</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R0, R0, R0</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R0, R0, R0</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R0, R0, R0</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R0, R0, R0</span></span>
<span class="line"><span style="color:#A6ACCD;">WAIT</span></span>
<span class="line"><span style="color:#A6ACCD;">        LDI R4, KBSR    ; Check keyboard status</span></span>
<span class="line"><span style="color:#A6ACCD;">        BRzp ____       ; **DELETED**</span></span>
<span class="line"><span style="color:#A6ACCD;">        LDI R4, KBDR    ; Get KBDR</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R4, R4, R1  ; Check if it is a letter</span></span>
<span class="line"><span style="color:#A6ACCD;">        BRzp ____       ; Got a capital letter</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R4, R4, R2  ; Not a letter -&gt; digit</span></span>
<span class="line"><span style="color:#A6ACCD;">        BR ____</span></span>
<span class="line"><span style="color:#A6ACCD;">LETTER</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R4, R4, #10 ; **DELETED**</span></span>
<span class="line"><span style="color:#A6ACCD;">CONTINUE</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R0, R0, R4  ; Add to result</span></span>
<span class="line"><span style="color:#A6ACCD;">        ADD R3, R3, #-1 ; Decr counter</span></span>
<span class="line"><span style="color:#A6ACCD;">        BRp ____        ; Wait for another char</span></span>
<span class="line"><span style="color:#A6ACCD;">        ; Restore regs</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R1, SAVE_R1</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R2, SAVE_R2</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R3, SAVE_R3</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R4, SAVE_R4</span></span>
<span class="line"><span style="color:#A6ACCD;">        RET</span></span>
<span class="line"><span style="color:#A6ACCD;">        ; Data</span></span>
<span class="line"><span style="color:#A6ACCD;">C1      .FILL #___  ; **DELETED**</span></span>
<span class="line"><span style="color:#A6ACCD;">C2      .FILL #___  ; **DELETED**</span></span>
<span class="line"><span style="color:#A6ACCD;">KBSR    .FILL xFE00</span></span>
<span class="line"><span style="color:#A6ACCD;">KBDR    .FILL xFE02</span></span>
<span class="line"><span style="color:#A6ACCD;">SAVE_R1 .BLKW 1</span></span>
<span class="line"><span style="color:#A6ACCD;">SAVE_R2 .BLKW 1</span></span>
<span class="line"><span style="color:#A6ACCD;">SAVE_R3 .BLKW 1</span></span>
<span class="line"><span style="color:#A6ACCD;">SAVE_R4 .BLKW 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Your jobs:</p><ol><li>Fill in the blanks (denoted by underlines <code>_</code>) to complete the program.</li><li>Briefly explain what the four consecutive <code>ADD R0, R0, R0</code> do.</li><li>We have no idea what <code>R0</code> stores before the subroutine is called, so we placed the instruction <code>AND R0, R0, #0</code> before the label <code>GETCHAR</code> in order to clear <code>R0</code>. Is this instruction necessary? Why or why not?</li></ol><h2 id="t7" tabindex="-1">T7 <a class="header-anchor" href="#t7" aria-hidden="true">#</a></h2><p>The following program needs to be assembled and stored in LC-3 memory:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">        .ORIG x3000</span></span>
<span class="line"><span style="color:#A6ACCD;">        LEA R0, STRING</span></span>
<span class="line"><span style="color:#A6ACCD;">        PUTS</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R0, SYMBOL</span></span>
<span class="line"><span style="color:#A6ACCD;">        OUT</span></span>
<span class="line"><span style="color:#A6ACCD;">        HALT</span></span>
<span class="line"><span style="color:#A6ACCD;">STRING  .STRINGZ &quot;H3ll0_W0r1d&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">SYMBOL  .FILL #33</span></span>
<span class="line"><span style="color:#A6ACCD;">        .END</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>What is the output of the program?</li><li>How many bytes of memory does the program occupy?</li></ol><h2 id="t8" tabindex="-1">T8 <a class="header-anchor" href="#t8" aria-hidden="true">#</a></h2><ol><li>What problem might arise if a program does not check <code>KBSR</code> before <em>reading</em> <code>KBDR</code>?</li><li>What problem might arise if the keyboard does not check <code>KBSR</code> before <em>writing</em> to <code>KBDR</code>?</li><li>Which one of the two problems mentioned above is more likely to occur? Justify your answer.</li></ol><h2 id="t9" tabindex="-1">T9 <a class="header-anchor" href="#t9" aria-hidden="true">#</a></h2><p>The following LC-3 program is assembled and then executed. What is the output of this program? Assume all registers are initialized to 0 before the program executes.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">        .ORIG x3000</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R0, A</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R1, B</span></span>
<span class="line"><span style="color:#A6ACCD;">        AND R1, R0, R1</span></span>
<span class="line"><span style="color:#A6ACCD;">        ST R0, #7</span></span>
<span class="line"><span style="color:#A6ACCD;">        ST R1, #5</span></span>
<span class="line"><span style="color:#A6ACCD;">        ST R2, #6</span></span>
<span class="line"><span style="color:#A6ACCD;">        LEA R0, LABEL</span></span>
<span class="line"><span style="color:#A6ACCD;">        TRAP x22</span></span>
<span class="line"><span style="color:#A6ACCD;">        TRAP x25</span></span>
<span class="line"><span style="color:#A6ACCD;">LABEL   .STRINGZ &quot;FUNKY&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">LABEL2  .STRINGZ &quot;HELLO WORLD&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">A       .FILL #33</span></span>
<span class="line"><span style="color:#A6ACCD;">B       .FILL #32</span></span>
<span class="line"><span style="color:#A6ACCD;">        .END</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="t10" tabindex="-1">T10 <a class="header-anchor" href="#t10" aria-hidden="true">#</a></h2><p>Consider the following program:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">        .ORIG x3000</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R0, A</span></span>
<span class="line"><span style="color:#A6ACCD;">        LD R1, B</span></span>
<span class="line"><span style="color:#A6ACCD;">        BRz DONE</span></span>
<span class="line"><span style="color:#A6ACCD;">        _____________ (a)</span></span>
<span class="line"><span style="color:#A6ACCD;">        _____________ (b)</span></span>
<span class="line"><span style="color:#A6ACCD;">        BRnzp AGAIN</span></span>
<span class="line"><span style="color:#A6ACCD;">DONE    ST R0, A</span></span>
<span class="line"><span style="color:#A6ACCD;">        HALT</span></span>
<span class="line"><span style="color:#A6ACCD;">A       .FILL x0___ (c)</span></span>
<span class="line"><span style="color:#A6ACCD;">B       .FILL x0001</span></span>
<span class="line"><span style="color:#A6ACCD;">        .END</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The program uses only <code>R0</code> and <code>R1</code>. Note that lines (a) and (b) indicate two missing instructions, and that line (c) includes some missing digits.</p><p>Note also that one of the instructions <strong>in the program</strong> must be labeled <code>AGAIN</code>, but now the label is missing.</p><p>After execution of the program, the contents of <code>A</code> is x1800. In total, 9 instructions are executed.</p><p>During execution, some snapshots of the computer is taken at some clock cycles. The table below is ordered by the cycle number in which the snapshot is taken. Note that we doesn&#39;t say anything about how many clock cycles a memory access takes.</p><img src="`+o+'" width="90%"><p>Fill in the missing instructions in the program, and complete the program by labeling the appropriate instruction as <code>AGAIN</code>. Also, fill in the missing information in the table and answer the following questions.</p><ol><li>How many clock cycles does a memory access take? (We define the clock cycles of a memory access as the cycles during which the computer stays at a state that does either <code>MDR&lt;\u2212M[MAR]</code> or <code>M[MAR]&lt;-MDR</code>)</li><li>Given values for <code>A</code> and <code>B</code>, what does the program do?</li></ol><blockquote><p>Hint: You may refer to Figure C.2, Figure C.3 and Table C.1 in the textbook. How signal LD.XX is used can be found in section 4.3.4.</p></blockquote>',46),c=[t];function i(r,A,d,C,h,D){return n(),a("div",null,c)}const u=s(p,[["render",i]]);export{R as __pageData,u as default};
