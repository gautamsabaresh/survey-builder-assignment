import React from "react"
import { CONSTANTS } from "../libs";

const Home = React.lazy(() => import("../pages/home"))
const Survey = React.lazy(() => import("../pages/sample-survey"))
const SensoryPreferences = React.lazy(() => import("../pages/sensory-preferences"))

const routes = [
    { path: CONSTANTS.ROUTE_PATHS.HOME, element: <Home /> },
    { path: CONSTANTS.ROUTE_PATHS.SURVEY, element: <Survey /> },
    { path: CONSTANTS.ROUTE_PATHS.SENSORY_PREFERENCES, element: <SensoryPreferences /> },
]
export default routes;