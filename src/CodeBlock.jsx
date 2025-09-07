import { useState } from "react";

export default function CodeBlock() {
    const [copied, setCopied] = useState(false);
  
    const codeText = `0 #After downloading debian file from above ubuntu downl0ad button
1
2 #To Download
3 cd ~/Downloads
4 sudo dpkg -i rgukt-game.deb
5 sudo apt-get install -f
6
7 #To Start the game
8 rgukt-game
9
10 #To uninstall the game
11 sudo apt-get remove rgukt-game`;
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };
  
    return (
      <div className="bg-[#161B22]  text-white font-mono rounded-lg p-4 w-full max-w-2xl relative">
        <h1 className="text-lg font-bold mb-2">Ubuntu Setup Commands</h1>
        <pre className="bg-[#0D1117] p-3 rounded-lg overflow-x-auto whitespace-pre-wrap text-left text-blue-300 w-full">
          {codeText}
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute bottom-3 right-3 bg-[#21262D] text-white px-3 py-1 rounded text-sm hover:bg-[#30363D] transition"
        >
          {copied ? "Copied!" : "Copy to clipboard"}
        </button>
        <div className="text-gray-400 text-sm pt-2">PowerShell</div>
      </div>
    );
  }
  