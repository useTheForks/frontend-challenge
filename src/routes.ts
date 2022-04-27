import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import { UserDashboardView } from '@views/user/UserDashboardView';
import { UserHistoryView } from '@views/user/UserHistoryView';
import { ReactElement } from 'react';
export interface Route {
  path: string;
  name: string;
  component: () => ReactElement;
  layout: string;
  icon: any;
}

export const userRoutes: Route[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: UserDashboardView,
    layout: '/user',
    icon: DashboardRoundedIcon,
  },
  {
    path: '/history',
    name: 'History',
    component: UserHistoryView,
    layout: '/user',
    icon: HistoryRoundedIcon,
  },
];
