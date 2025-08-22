// ==UserScript==
// @name         Quicker Markdown Renderer
// @name:zh-CN   Quicker Markdown 渲染器
// @namespace    https://greasyfork.org/users/833671-cea
// @version      1.0.0
// @description  Render markdown content in Quicker action versions table automatically
// @description:zh-CN  在 Quicker 动作版本表格中自动渲染 Markdown 内容，提升阅读体验
// @author       Cea
// @match        https://getquicker.net/Share/Actions/Versions?code=*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/marked@4.3.0/marked.min.js
// @license      CC BY-NC 4.0
// @supportURL   https://greasyfork.org/zh-CN/scripts/546744-quicker-markdown-renderer/feedback
// ==/UserScript==

(function() {
    'use strict';

    // Wait for page to load
    function waitForElement(selector, timeout = 5000) {
        return new Promise((resolve, reject) => {
            const startTime = Date.now();
            
            const checkElement = () => {
                const element = document.querySelector(selector);
                if (element) {
                    resolve(element);
                    return;
                }
                
                if (Date.now() - startTime > timeout) {
                    reject(new Error(`Element ${selector} not found within ${timeout}ms`));
                    return;
                }
                
                setTimeout(checkElement, 100);
            };
            
            checkElement();
        });
    }

    // Render markdown content
    function renderMarkdown(text) {
        if (!text || typeof text !== 'string') {
            return text;
        }
        
        try {
            // Configure marked options
            marked.setOptions({
                breaks: true,
                gfm: true,
                sanitize: false
            });
            
            return marked.parse(text);
        } catch (error) {
            console.error('Error rendering markdown:', error);
            return text;
        }
    }

    // Process table cells
    function processTableCells() {
        const table = document.querySelector('body > div.body-wrapper > div.mt-3.container.bg-white.rounded-top > div.pb-5 > table');
        if (!table) {
            console.log('Table not found');
            return;
        }

        const cells = table.querySelectorAll('td');
        cells.forEach((cell, index) => {
            const originalText = cell.textContent.trim();
            
            // Skip if cell is empty or already processed
            if (!originalText || cell.hasAttribute('data-markdown-processed')) {
                return;
            }
            
            // Check if content looks like markdown (contains common markdown patterns)
            const markdownPatterns = [
                /\*\*.*?\*\*/, // bold
                /\*.*?\*/, // italic
                /`.*?`/, // inline code
                /\[.*?\]\(.*?\)/, // links
                /^[-*+]\s/, // unordered lists
                /^\d+\.\s/, // ordered lists
                /^#{1,6}\s/, // headers
                /```[\s\S]*?```/, // code blocks
                /^\|.*\|$/, // table rows
                /^\>\s/, // blockquotes
            ];
            
            const hasMarkdown = markdownPatterns.some(pattern => pattern.test(originalText));
            
            if (hasMarkdown) {
                const renderedHtml = renderMarkdown(originalText);
                
                // Create a wrapper div to preserve original text
                const wrapper = document.createElement('div');
                wrapper.innerHTML = renderedHtml;
                wrapper.style.cssText = `
                    max-width: 100%;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                `;
                
                // Clear cell and add rendered content
                cell.innerHTML = '';
                cell.appendChild(wrapper);
                
                // Mark as processed
                cell.setAttribute('data-markdown-processed', 'true');
                
                console.log(`Processed cell ${index + 1}:`, originalText.substring(0, 50) + '...');
            }
        });
    }

    // Main function
    async function init() {
        try {
            console.log('Quicker Markdown Renderer: Starting...');
            
            // Wait for table to load
            await waitForElement('body > div.body-wrapper > div.mt-3.container.bg-white.rounded-top > div.pb-5 > table');
            
            // Process table cells
            processTableCells();
            
            // Set up observer for dynamic content
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                        // Check if new table content was added
                        const hasNewTableContent = Array.from(mutation.addedNodes).some(node => {
                            return node.nodeType === Node.ELEMENT_NODE && 
                                   (node.matches('table') || node.querySelector('table'));
                        });
                        
                        if (hasNewTableContent) {
                            setTimeout(processTableCells, 100);
                        }
                    }
                });
            });
            
            // Observe the container for changes
            const container = document.querySelector('body > div.body-wrapper > div.mt-3.container.bg-white.rounded-top > div.pb-5');
            if (container) {
                observer.observe(container, {
                    childList: true,
                    subtree: true
                });
            }
            
            console.log('Quicker Markdown Renderer: Initialized successfully');
            
        } catch (error) {
            console.error('Quicker Markdown Renderer: Error during initialization:', error);
        }
    }

    // Start the script
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
