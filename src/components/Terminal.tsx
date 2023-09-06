import React, { useRef, useEffect, useState } from 'react';
import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import 'font-awesome/css/font-awesome.css';

const TerminalComponent: React.FC = () => {
    const isMobile = (): boolean => window.innerWidth <= 768;

    const terminalStyle = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const terminalRef = useRef<HTMLDivElement>(null);
    const termRef = useRef<Terminal | null>(null);
    const webLinksAddon = new WebLinksAddon();
    const fitAddon = new FitAddon();

    const [refreshKey, setRefreshKey] = useState<number>(0);
    const DARK_THEME = {
        background: '#0c1117',
        foreground: '#fbdb5c',
    };
    
    const LIGHT_THEME = {
        background: '#fbdb5c',
        foreground: '#0c1117',
    };    
    const getUserPreferredTheme = (): string => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    const [theme, setTheme] = useState(getUserPreferredTheme());
    
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light');
            setRefreshKey(prevKey => prevKey + 1);
        };
    
        mediaQuery.addEventListener('change', handleChange);
    
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);
        
    const printPrompt = () => {
        if (termRef.current) {
            termRef.current.write(' > ');
        }
    };

    const colorize = (text: string, color: string): string => {
        const colors: Record<string, string> = {
            red: '\x1b[31m',
            green: '\x1b[32m',
            yellow: '\x1b[33m',
            blue: '\x1b[34m',
            magenta: '\x1b[35m',
            cyan: '\x1b[36m',
            white: '\x1b[37m',
            gray: '\x1b[90m',
            bold: '\x1b[1m',
            reset: '\x1b[0m',
        };
    
        return `${colors[color] || ''}${text}${colors.reset}`;
    };
    // usage example: termRef.current.writeln(colorize("Welcome to Sahaj's terminal portfolio!", 'red'));

    const formatText = (text: string, color: string, isBold: boolean): string => {
        const colors: Record<string, string> = {
            red: '\x1b[31m',
            green: '\x1b[32m',
            yellow: '\x1b[33m',
            blue: '\x1b[34m',
            magenta: '\x1b[35m',
            cyan: '\x1b[36m',
            white: '\x1b[37m',
            gray: '\x1b[90m',
            bold: '\x1b[1m',
            reset: '\x1b[0m',
        };

        const bold = isBold ? '\x1b[1m' : '';
        const chosenColor = colors[color] || '';
        
        return `${bold}${chosenColor}${text}\x1b[0m`;
    };
    // usage example: termRef.current.writeln(`${formatText("Welcome", "red", true)} to Sahaj's terminal portfolio!`);

    useEffect(() => {
        const currentTheme = theme === 'dark' ? DARK_THEME : LIGHT_THEME;
        const newBackgroundColor = currentTheme.background;
        document.documentElement.style.setProperty('--background-color', newBackgroundColor);
        termRef.current = new Terminal({
            cursorBlink: true,
            fontSize: isMobile() ? 12 : 16,
            fontFamily: 'FontAwesome, monospace',
            theme: currentTheme,
        });

        if (terminalRef.current && termRef.current) {
            termRef.current.loadAddon(webLinksAddon);
            termRef.current.loadAddon(fitAddon);
            termRef.current.open(terminalRef.current);
            fitAddon.fit();

            if (!isMobile()) {
                termRef.current.writeln('');
                termRef.current.writeln("   ███████╗ █████╗ ██╗  ██╗ █████╗      ██╗    ███████╗██╗███╗   ██╗ ██████╗ ██╗  ██╗");
                termRef.current.writeln("   ██╔════╝██╔══██╗██║  ██║██╔══██╗     ██║    ██╔════╝██║████╗  ██║██╔════╝ ██║  ██║");
                termRef.current.writeln("   ███████╗███████║███████║███████║     ██║    ███████╗██║██╔██╗ ██║██║  ███╗███████║");
                termRef.current.writeln("   ╚════██║██╔══██║██╔══██║██╔══██║██   ██║    ╚════██║██║██║╚██╗██║██║   ██║██╔══██║");
                termRef.current.writeln("   ███████║██║  ██║██║  ██║██║  ██║╚█████╔╝    ███████║██║██║ ╚████║╚██████╔╝██║  ██║");
                termRef.current.writeln("   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝     ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝");
                termRef.current.writeln('');
                termRef.current.writeln(' If ascii art is not displaying properly, please rotate horizontally or widen the window!');
                termRef.current.writeln('');
            }
            termRef.current.writeln(" Welcome to Sahaj's terminal portfolio!");
            termRef.current.writeln(' Type "help" to see available commands.');
            printPrompt();

            let cmd = '';
            const onDataHandler = termRef.current.onData((data) => {
                //if enter is pressed, handle the command
                if (data === '\r') {
                    termRef.current!.writeln('');
                    handleCommand(cmd.trim());
                    cmd = '';
                    printPrompt();
                } else if (data === '\x7f') { // if backspace is pressed, remove the last character from the command
                    //only remove the last character if the command is not empty
                    if (cmd.length > 0) {
                        cmd = cmd.slice(0, -1);
                        termRef.current!.write('\b \b');
                    }
                } else {
                    termRef.current!.write(data);
                    cmd += data;
                }
            });  
            
            const onResize = () => {
                if (termRef.current) {
                    fitAddon.fit(); // Resize the terminal to fit the new window dimensions
                }
            };

            // Add event listener for window resize
            window.addEventListener('resize', onResize);

            // Cleanup on unmount
            return () => {
                window.removeEventListener('resize', onResize);
                onDataHandler.dispose();
                termRef.current!.dispose();
            };
        }
    }, [refreshKey]);

    const handleCommand = (cmd: string) => {
        if (!termRef.current) return;

        if (cmd === 'clear') {
            termRef.current.clear();
            termRef.current.reset();
            termRef.current.writeln(' Welcome to my terminal portfolio!');
            termRef.current.writeln(' Type "help" to see available commands.');
            return;
        }

        switch (cmd) {
            case 'help':
                termRef.current.writeln(' Available commands are as follows:');
                termRef.current.writeln(' \uf2b5  Type "about" to learn more about me');
                termRef.current.writeln(' \uf07b  Type "projects" to view my projects');
                termRef.current.writeln(' \uf095  Type "contact" to view my contact information');
                termRef.current.writeln(' \uf0e2  Type "clear" to clear the terminal');
                termRef.current.writeln(' \uf186  Type "toggle" to toggle between light and dark mode');
                break;
            case 'about':
                termRef.current.writeln(" I'm a 4th-year Simon Fraser University student pursuing a Computer Engineering degree with a minor in Computing Sciences. Passionate about coding, I specialize in C and Python. I began self-learning programming in middle school and continued to develop my skills through my degree. Check out my GitHub for projects and my journey on sahajs.com 🌐.");
                break;
            case 'projects':
                termRef.current.writeln(' 1. Project A: A brief description...');
                termRef.current.writeln(' 2. Project B: Another description...');
                // List out your projects
                break;
            case 'contact':
                termRef.current.writeln(' \uf1fa Type "email" to contact me via Email');
                termRef.current.writeln(' \uf0ac Type "website" to visit my Personal Website');
                termRef.current.writeln(' \uf09b Type "github" to view my GitHub');
                termRef.current.writeln(' \uf08c Type "linkedin" to view my LinkedIn');
                break;
            case 'email':
                window.open("mailto:sahaj_singh@sfu.ca");
                termRef.current.writeln(' Attempting to open \uf1fa email client...');
                break;
            case 'website':
                window.open("https://www.sahajs.com");
                termRef.current.writeln(' Attempting to open \uf0ac personal website...');
                break;
            case 'github':
                window.open("https://github.com/SatireSage");
                termRef.current.writeln(' Attempting to open \uf09b GitHub...');
                break;
            case 'linkedin':
                window.open("https://www.linkedin.com/in/sahaj--singh/");
                termRef.current.writeln(' Attempting to open \uf08c LinkedIn...');
                break;
            case 'toggle':
                if (theme === 'dark') {
                    setTheme('light');
                } else {
                    setTheme('dark');
                }
                setRefreshKey(prevKey => prevKey + 1);
                break;                
            default:
                termRef.current.writeln(` Command not found: ${cmd}`);
                break;
        }
    };

    return (
        <div ref={terminalRef} style={terminalStyle}></div>
    );
};

export default TerminalComponent;
