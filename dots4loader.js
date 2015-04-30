/*
 * The MIT License
 *
 * Copyright 2015 Sacha Cochin <sacha.cochin@etu.univ-orleans.fr>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


function hide_loader(element) {
    element.hide();
}
function show_loader(element) {
    element.show();
}

function dots4loader(element) {
    element.html('<div class="dots4loaderoverlay"><div class="dots4loader-container"><div class="dots4loader-logo"><span class="dots4loader-top-dot"><!-- empty --></span><span class="dots4loader-left-dot"><!-- empty --></span><span class="dots4loader-right-dot"><!-- empty --></span><span class="dots4loader-bottom-dot"><!-- empty --></span></div><div><h1>Un instant s\'il vous plait</h1><span class="dots4loader-first-point">.</span><span class="dots4loader-second-point">.</span><span class="dots4loader-third-point">.</span></div></div></div>');
    hide_loader(element);
}