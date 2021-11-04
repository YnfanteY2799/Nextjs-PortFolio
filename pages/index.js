import 'bulma/css/bulma.min.css';
import { AppBar, AsidedLeftMenu } from "../components/NavigationComponents.jsx";

export default function Home() {
  return (
    <div>
      <AppBar />
      <AsidedLeftMenu />
        <div className="container">
          
          <div className="columns">
            <div className="column">
              First column
            </div>
            <div className="column">
              Second column
            </div>
            <div className="column">
              Third column
            </div>
            <div className="column">
              Fourth column
            </div>
          </div>          
        </div>
    </div>
  )
}
