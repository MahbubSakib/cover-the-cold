import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home/Home";
import DonationCampaign from "../layouts/DonationCampaign/DonationCampaign";
import HowToHelp from "../layouts/HowToHelp/HowToHelp";
import Dashboard from "../layouts/Dashboard/Dashboard";
import CampaignDetails from "../layouts/CampaignDetails/CampaignDetails";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../layouts/UpdateProfile/UpdateProfile";
import ForgotPassword from "../layouts/ForgotPassword/ForgotPassword";
import NotFound from "../layouts/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/donation-campaign',
        element: <DonationCampaign></DonationCampaign>,
        loader: () => fetch('../coverTheCold.json')
    },
    {
        path: '/campaign/:id',
        element: <PrivateRoute>
            <CampaignDetails></CampaignDetails>
        </PrivateRoute>,
        loader: async ({ params }) => {
            const res = await fetch('/coverTheCold.json')
            const data = await res.json()
            const campaign = data.find(singleData => singleData.id == params.id)

            return campaign
        }
    },
    {
        path: '/how-to-help',
        element: <HowToHelp></HowToHelp>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>
    },
    {
        path: '/my-profile',
        element: <PrivateRoute>
            <UpdateProfile></UpdateProfile>
        </PrivateRoute>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword></ForgotPassword>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
            v7_startTransition: true,
        }
    })

export default router;