import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import TextAnalyserPage from "./TextAnalyserPage/TextAnalyserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: HomePage()
    },
    {
        path: "/text-analyser",
        element: TextAnalyserPage()
    }
]);

export default router;