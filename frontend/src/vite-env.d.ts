/// <reference types="vite/client" />

declare class SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: any) => void) | null;
  onerror: ((event: any) => void) | null;
  onend: ((event: any) => void) | null;
  onstart: ((event: any) => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

declare class webkitSpeechRecognition extends SpeechRecognition {}

interface Window {
  SpeechRecognition: typeof SpeechRecognition;
  webkitSpeechRecognition: typeof webkitSpeechRecognition;
}
