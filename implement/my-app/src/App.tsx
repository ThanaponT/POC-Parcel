import {Test} from 'poc'
function App() {
  const htmlLang = document.documentElement.lang?.toString();

  return (
    <div>
      <Test language={htmlLang} ></Test>
    </div>
  );
}

export default App;
