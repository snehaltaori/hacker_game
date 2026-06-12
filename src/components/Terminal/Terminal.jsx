import { useState } from "react";
import "./Terminal.css";
import files from "../../data/files";
import levels from "../../data/levels";
import { useEffect, useRef } from "react";

export default function Terminal() {
    const [input, setInput] = useState("");
    const [currentLevel, setCurrentLevel] = useState(0);
    const level = levels[currentLevel];
    const [logs, setLogs] = useState([
        "Initializing system...",
        "Connected.",
        'Type "help" to begin.',
    ]);

    const outputRef = useRef(null);
    useEffect(() => {
        outputRef.current?.scrollTo({
            top: outputRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [logs]);
    const addLogs = (newLogs) => {
        setLogs((prev) => [...prev, ...newLogs]);
    };

    const executeCommand = () => {
        const command = input.trim().toLowerCase();
        const fileNames = Object.keys(level.files);

        if (!command) return;

        setLogs((prev) => [...prev, `> ${command}`]);

        const parts = command.split(" ");
        if (parts[0] === "open") {

            const filename = parts[1];

            if (!filename) {
                addLogs([
                    "Usage: open <filename>"
                ]);

                setInput("");
                return;
            }

            if (level.files[filename]) {

                addLogs([
                    `----- ${filename} -----`,
                    level.files[filename]
                ]);

            } else {

                addLogs([
                    "File not found."
                ]);
            }

            setInput("");
            return;
        }
        if (parts[0] === "login") {

            const password = parts[1];

            if (!password) {

                addLogs([
                    "Usage: login <password>"
                ]);

                setInput("");
                return;
            }

            if (password === level.password) {

                addLogs([
                    "ACCESS GRANTED",
                    "LEVEL COMPLETE"
                ]);

                setTimeout(() => {

                    if (currentLevel < levels.length - 1) {

                        setCurrentLevel(prev => prev + 1);

                        setLogs([
                            `Loading Level ${currentLevel + 2}...`
                        ]);

                    } else {

                        setLogs([
                            "SYSTEM BREACHED",
                            "ALL LEVELS COMPLETE"
                        ]);
                    }

                }, 1500);
            } else {

                addLogs([
                    "ACCESS DENIED"
                ]);
            }

            setInput("");
            return;
        }

        switch (command) {
            case "help":
                addLogs([
                    "",
                    "Available Commands",
                    "------------------",
                    "help  - Show commands",
                    "scan  - Scan system",
                    "open  - Open file",
                    "login - Login with password",
                    "hint  - Get hint",
                    "clear - Clear terminal",
                ]);
                break;

            case "scan":
                addLogs([
                    "",
                    "FILES FOUND",
                    "-----------",
                    ...fileNames,
                ]);
                break;

            case "hint":
                addLogs([
                    level.hint
                ]);
                break;

            case "clear":
                setLogs([]);
                break;

            default:
                addLogs([
                    `> ${command}`,
                    "",
                    "Unknown command.",
                ]);
        }

        setInput("");
    };

    return (
        <div className="terminal">
            <div className="terminal-header">
                HACKER TERMINAL v1.0
                <br />
                Level {level.id}: {level.title}
            </div>

            <div className="terminal-output" ref={outputRef}>
                {logs.map((log, index) => (
                    <p key={index}>{log}</p>
                ))}
            </div>

            <div className="terminal-input-line">
                <span>{">"}</span>
                <span className="cursor">█</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            executeCommand();
                        }
                    }}
                    autoFocus
                />
            </div>
        </div>
    );
}