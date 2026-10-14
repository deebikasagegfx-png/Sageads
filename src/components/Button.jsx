import { Link } from 'react-router-dom';

export default function Button({to='/contact/',children='Let’s talk'}){return <Link className="button" to={to}>{children}<span>↗</span></Link>}
