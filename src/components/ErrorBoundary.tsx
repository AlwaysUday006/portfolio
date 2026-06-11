import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an uncaught exception:", error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#07070a] text-slate-300 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
          {/* Ambient background glows */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

          <div className="w-full max-w-xl glassmorphism p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10 text-center">
            
            {/* Warning Icon Badge */}
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6 text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            {/* Error Header */}
            <h1 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-none mb-4">
              Something went <span className="italic text-gradient">wrong</span>
            </h1>
            
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-md mx-auto">
              An unexpected application error occurred. We have intercepted it gracefully to prevent a blank screen.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={this.handleReset}
                className="btn-premium px-8 py-3 bg-white text-black font-semibold rounded-full flex items-center justify-center gap-2 text-xs shadow-xl cursor-pointer hover:bg-slate-100 transition-all duration-300 w-full sm:w-auto"
              >
                Reload Application
              </button>
              <a
                href="/"
                className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-full flex items-center justify-center gap-2 text-xs transition-all duration-300 cursor-pointer w-full sm:w-auto"
              >
                Go to Homepage
              </a>
            </div>

            {/* Technical Details Accordion */}
            {this.state.error && (
              <details className="text-left bg-black/40 border border-white/5 rounded-xl p-4 transition-all duration-300 group">
                <summary className="text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer list-none flex items-center justify-between hover:text-slate-300">
                  <span>Technical Diagnostics</span>
                  <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 space-y-2 text-xs font-mono text-cyan-400/90 overflow-x-auto max-h-40">
                  <p className="font-semibold text-rose-400">{this.state.error.toString()}</p>
                  {this.state.errorInfo && (
                    <pre className="text-[10px] text-slate-500 leading-normal whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
