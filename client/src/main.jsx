
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import LoginContext from './loginCongtext.jsx';
createRoot(document.getElementById('root')).render(
 <LoginContext>
     <App />
 </LoginContext>
  

)
