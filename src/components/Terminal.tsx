import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import 'font-awesome/css/font-awesome.css';
import axios from 'axios';
import styles from './terminal.module.css';

type Repo = {
    name: string;
    html_url: string;
    description: string;
    pushed_at: string;
};

const TerminalComponent: React.FC = () => {
    const isMobile = (): boolean => window.innerWidth <= 768;

    const terminalStyle = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '20px',  // 20px margin
        marginRight: '20px', // 20px margin
        marginTop: '20px',   // 20px margin
        marginBottom: '20px',// 20px margin
    };

    const terminalRef = useRef<HTMLDivElement>(null);
    const termRef = useRef<Terminal | null>(null);
    const webLinksAddon = useMemo(() => new WebLinksAddon(), []);
    const fitAddon = useMemo(() => new FitAddon(), []);

    const [refreshKey, setRefreshKey] = useState<number>(0);
    const DARK_THEME = useMemo(() => ({ 
        background: '#0c1117',
        foreground: '#fffff0',
    }), []);
    const LIGHT_THEME = useMemo(() => ({ 
        background: '#fffff0',
        foreground: '#0c1117',
    }), []);

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
        
    const printPrompt = useCallback(() => {
        if (termRef.current) {
            termRef.current.writeln(` Type ${formatText("help", "green", true)} to see available commands.`);
            termRef.current.write(' > ');
        }
    }, [termRef]);

    const colorize = (text: string, color: string, isBold: boolean): string => {
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
        return `${bold}${colors[color] || ''}${text}${colors.reset}`;
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

    const handleCommand = useCallback((cmd: string) => {
        if (!termRef.current) return;

        if (cmd === 'clear') {
            termRef.current.clear();
            termRef.current.reset();
            if (!isMobile()) {
                termRef.current.writeln('');
                termRef.current.writeln("   ███████╗ █████╗ ██╗  ██╗ █████╗      ██╗    ███████╗██╗███╗   ██╗ ██████╗ ██╗  ██╗");
                termRef.current.writeln("   ██╔════╝██╔══██╗██║  ██║██╔══██╗     ██║    ██╔════╝██║████╗  ██║██╔════╝ ██║  ██║");
                termRef.current.writeln("   ███████╗███████║███████║███████║     ██║    ███████╗██║██╔██╗ ██║██║  ███╗███████║");
                termRef.current.writeln("   ╚════██║██╔══██║██╔══██║██╔══██║██   ██║    ╚════██║██║██║╚██╗██║██║   ██║██╔══██║");
                termRef.current.writeln("   ███████║██║  ██║██║  ██║██║  ██║╚█████╔╝    ███████║██║██║ ╚████║╚██████╔╝██║  ██║");
                termRef.current.writeln("   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝     ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝");
                termRef.current.writeln(colorize(" *If ascii art is not displaying properly, please rotate horizontally or widen the window!", 'gray', true));
            }
            termRef.current.writeln('');
            termRef.current.writeln('');
            termRef.current.writeln('');
            termRef.current.writeln(" Welcome to Sahaj's terminal portfolio!");
            return;
        }

        switch (cmd) {
            case 'help':
                termRef.current.writeln(formatText(" Available commands are as follows:", 'green', true));
                termRef.current.writeln(` ${formatText("\uf2b5", "magenta", true)}  Type ${formatText("about", "magenta", true)} to learn more about me!`);
                termRef.current.writeln(` ${formatText("\uf07b", "magenta", true)}  Type ${formatText("projects", "magenta", true)} to view my projects.`);
                termRef.current.writeln(` ${formatText("\uf095", "cyan", true)}  Type ${formatText("contact", "cyan", true)} to view my contact information.`);
                termRef.current.writeln(` ${formatText("\uf15b", "cyan", true)}  Type ${formatText("resume", "cyan", true)} to view my resume!`);
                termRef.current.writeln(` ${formatText("\uf0e2", "red", true)}  Type ${formatText("clear", "red", true)} to clear the terminal.`);
                termRef.current.writeln(` ${formatText("\uf186", "gray", true)}  Type ${formatText("toggle", "gray", true)} to toggle between light and dark mode.`);
                break;
            case 'about':
                termRef.current.writeln(" Hello World!");
                termRef.current.writeln(" ");
                termRef.current.writeln(` I'm a ${formatText("4th-year Simon Fraser University", "magenta", true)} student pursuing a ${formatText("Computer Engineering", "magenta", true)} degree with a minor in Computing Sciences. Passionate about coding, I specialize in ${formatText("C and Python", "magenta", true)}. I began self-learning programming in middle school and continued to develop my skills through my degree. Check out my GitHub for projects and my journey on ${formatText("\uf0ac https://sahajs.com", "cyan", true)}. Click on the link or simply type ${formatText("website", "cyan", true)} to check it out!`);
                termRef.current.writeln(" ");
                termRef.current.writeln(" Here are some fun facts about me:");
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I'm majoring in Computer Engineering 🧑‍💻 and minoring in CS`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I like to write short stories 📝`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I'm a Student 📕 and TA at SFU 🎓`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I like mystery movies 🎥`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I can't sing 🎤 but I'm a music lover 🎧`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I'm a gamer 🎮`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I've traveled a lot 🛫`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I'm an avid photographer 📷`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I love cooking 🍳`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I'm a dreamer 💭`);
                termRef.current.writeln(`   ${formatText("->", "magenta", true)} I've been coding since middle school 📖`);
                termRef.current.writeln(" ");
                termRef.current.writeln(` Thanks for visiting my terminal portfolio! Make sure to check out my ${formatText("\uf09b GitHub", "cyan", true)} and ${formatText("\uf08c LinkedIn", "cyan", true)} by simply typing ${formatText("contact", "cyan", true)}!`);
                termRef.current.writeln(` \uf1f9 ${new Date().getFullYear()} Sahaj Singh. All Rights Reserved.`);
                break;
            case 'projects':
                termRef.current!.writeln(colorize(" Fetching projects...", 'gray', true));
                let githubDataString = '';
                (async () => {
                    try {
                        const { data: repos } = await axios.get('https://api.github.com/users/SatireSage/repos');
                        const sortedData = repos.sort((a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
                        const formattedData = sortedData.map((repo: Repo) => ` \x1b[1m\x1b[35mName:\x1b[0m ${repo.name}\n \x1b[1m\x1b[36mURL: ${repo.html_url}\x1b[0m\n \x1b[1m\x1b[35mDescription:\x1b[0m ${repo.description || 'No description'}\n\n`).join('');
                        githubDataString = formattedData;
                        termRef.current!.clear();
                        termRef.current!.reset();
                        termRef.current!.writeln(colorize(" \n\n\nProjects I've worked on:\n", 'magenta', true));
                        githubDataString.split('\n').forEach(line => {
                            termRef.current!.writeln(line);
                        });
                        termRef.current!.writeln(colorize(" Feel free to click on the link to visit the respective repository!", 'gray', true));
                        termRef.current!.writeln("");
                        printPrompt();
                    } catch (error) {
                        console.error('Error fetching the repos:', error);
                    }
                })();
                console.log("Done");
                break;
            case 'resume':
                const resumeURL = theme === 'dark' ? 'http://resume.dark.sahajs.com' : 'http://resume.sahajs.com';
                termRef.current.writeln(` ... Redirecting to my ${formatText("\uf15b resume", "cyan", true)} ...`);
                window.open(resumeURL);
                break;
            case 'contact':
                termRef.current.writeln(" Here are ways to get in touch with me:");
                termRef.current.writeln(` ${formatText("\uf1fa", "cyan", true)} Type ${formatText("email", "cyan", true)} to contact me via Email`);
                termRef.current.writeln(` ${formatText("\uf0ac", "cyan", true)} Type ${formatText("website", "cyan", true)} to visit my Personal Website`);
                termRef.current.writeln(` ${formatText("\uf09b", "cyan", true)} Type ${formatText("github", "cyan", true)} to view my GitHub`);
                termRef.current.writeln(` ${formatText("\uf08c", "cyan", true)} Type ${formatText("linkedin", "cyan", true)} to view my LinkedIn`);
                break;
            case 'email':
                termRef.current.writeln(` ... Redirecting to ${formatText("\uf1fa email", "gray", true)} client..`);
                window.open("mailto:sahaj_singh@sfu.ca");
                break;
            case 'website':
                termRef.current.writeln(` ... Redirecting to ${formatText("\uf0ac personal website", "gray", true)}...`);
                window.open("https://sahajs.com");
                break;
            case 'github':
                termRef.current.writeln(` ... Redirecting to ${formatText("\uf09b GitHub", "gray", true)}...`);
                window.open("http://github.sahajs.com");
                break;
            case 'linkedin':
                termRef.current.writeln(` ... Redirecting to ${formatText("\uf08c LinkedIn", "gray", true)}...`);
                window.open("http://linkedin.sahajs.com");
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
                termRef.current.writeln(` Command not found: ${formatText(`${cmd}`, "red", true)}`);
                break;
        }
    }, [termRef, printPrompt, theme]);

    useEffect(() => {
        const currentTheme = theme === 'dark' ? DARK_THEME : LIGHT_THEME;
        const newBackgroundColor = currentTheme.background;
        document.documentElement.style.setProperty('--background-color', newBackgroundColor);
        termRef.current = new Terminal({
            cursorBlink: true,
            fontSize: isMobile() ? 14 : 18,
            fontFamily: 'FontAwesome , monospace',
            theme: currentTheme,
        });

        if (terminalRef.current && termRef.current) {
            termRef.current.loadAddon(webLinksAddon);
            termRef.current.loadAddon(fitAddon);
            termRef.current.open(terminalRef.current);
            fitAddon.fit();

            const terminalViewport = terminalRef.current.querySelector('.xterm-viewport');
            if (terminalViewport) {
                terminalViewport.classList.add(styles.xtermViewport);
            }

            if (!isMobile()) {
                termRef.current.writeln('');
                termRef.current.writeln("   ███████╗ █████╗ ██╗  ██╗ █████╗      ██╗    ███████╗██╗███╗   ██╗ ██████╗ ██╗  ██╗");
                termRef.current.writeln("   ██╔════╝██╔══██╗██║  ██║██╔══██╗     ██║    ██╔════╝██║████╗  ██║██╔════╝ ██║  ██║");
                termRef.current.writeln("   ███████╗███████║███████║███████║     ██║    ███████╗██║██╔██╗ ██║██║  ███╗███████║");
                termRef.current.writeln("   ╚════██║██╔══██║██╔══██║██╔══██║██   ██║    ╚════██║██║██║╚██╗██║██║   ██║██╔══██║");
                termRef.current.writeln("   ███████║██║  ██║██║  ██║██║  ██║╚█████╔╝    ███████║██║██║ ╚████║╚██████╔╝██║  ██║");
                termRef.current.writeln("   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝     ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝");
                termRef.current.writeln(colorize(" *If ascii art is not displaying properly, please rotate horizontally or widen the window!", 'gray', true));
            }
            termRef.current.writeln('');
            termRef.current.writeln('');
            termRef.current.writeln('');
            termRef.current.writeln(" Welcome to Sahaj's terminal portfolio!");
            printPrompt();

            let cmd = '';
            const onDataHandler = termRef.current.onData((data) => {
                if (data === '\r') {
                    termRef.current!.writeln('');
                    termRef.current!.writeln('');
                    handleCommand(cmd.trim());
                    termRef.current!.writeln('');
                    cmd = '';
                    printPrompt();
                } else if (data === '\x7f') {
                    if (cmd.length > 0) {
                        cmd = cmd.slice(0, -1);
                        termRef.current!.write('\b \b');
                    }
                } else if (data.charCodeAt(0) >= 32) {
                    termRef.current!.write(data);
                    cmd += data;
                }
            });  
            
            const onResize = () => {
                if (termRef.current) {
                    fitAddon.fit();
                }
            };

            window.addEventListener('resize', onResize);

            return () => {
                window.removeEventListener('resize', onResize);
                onDataHandler.dispose();
                termRef.current!.dispose();
            };
        }
    }, [refreshKey, theme, DARK_THEME, LIGHT_THEME, webLinksAddon, fitAddon, printPrompt, handleCommand]);

    return (
        <div ref={terminalRef} style={terminalStyle}></div>
    );
};

export default TerminalComponent;
