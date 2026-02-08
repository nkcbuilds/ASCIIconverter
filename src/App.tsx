import { ThemeProvider } from './contexts/ThemeContext';
import { Editor } from './components/Editor';

function App() {
    return (
        <ThemeProvider>
            <div className="h-dvh min-h-0 flex flex-col overflow-hidden">
                {/* Main Editor */}
                <Editor />
            </div>
        </ThemeProvider>
    );
}

export default App;
