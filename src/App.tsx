import { ThemeProvider } from './contexts/ThemeContext';
import { GrainOverlay } from './components/GrainOverlay';
import { Editor } from './components/Editor';

function App() {
    return (
        <ThemeProvider>
            <div className="h-screen flex flex-col overflow-hidden">
                {/* Grain Overlay Effect */}
                <GrainOverlay />

                {/* Main Editor */}
                <Editor />
            </div>
        </ThemeProvider>
    );
}

export default App;
