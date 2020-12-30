/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />
namespace RTW {
  type Button<P> = P & React.ButtonHTMLAttributes<HTMLButtonElement>;
  type Input<P> = P & React.InputHTMLAttributes<HTMLInputElement>;
  type Div<P> = P & React.HTMLAttributes<HTMLDivElement>;
}

declare module 'agora-stream-player';
