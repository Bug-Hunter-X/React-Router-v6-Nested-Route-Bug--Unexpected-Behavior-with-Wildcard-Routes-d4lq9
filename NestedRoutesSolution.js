```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  let location = useLocation();
  console.log(location);
  return (
    <div>Home Page{location.pathname}</div>
  );
}

function About() {
  return <div>About Page</div>;
}

function NotFound() {
  return <div>404 Not Found</div>;
}
export default App; 
```
The solution involves using nested routes correctly.  The wildcard route `*` should be a top-level route or handled carefully within nested contexts to prevent unwanted matches.  Additionally, a more robust approach for handling navigation is recommended, potentially involving additional state management techniques for complex applications. Using useLocation can help with debugging and route tracking.