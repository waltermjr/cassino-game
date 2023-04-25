import { createBrowserRouter } from 'react-router-dom'
import Cassino from '../pages/cassino'

const router = createBrowserRouter([
  {
    path: '/cassino',
    element: <Cassino />,
  }
])

export default router