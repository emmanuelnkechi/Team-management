/**
 * Created by Nkechi Emmanuel on 21/03/2022
 * @name ICreateUser
 * @description
 * Interface for sidebar props
 */

export interface ISidebar {
  setActiveDashboard: (title: string) => void;
  activeDashboard: string;
  to: string;
  title: string;
  icon: any;
  collapse: boolean;
}
